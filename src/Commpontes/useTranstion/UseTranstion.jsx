import React, { useState, useTransition, useEffect } from "react";

function UseTranstion() {
  const [tab, setTab] = useState("Home");
  const [filtered, setFiltered] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Fake 20000 members
  const largeData = Array.from({ length: 20000 }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    active: i % 2 === 0,
  }));

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  useEffect(() => {
    if (tab === "Members") {
      // 🟡 Low priority background update
      startTransition(() => {
        // Fake delay to simulate heavy work
        setTimeout(() => {
          const activeMembers = largeData.filter((m) => m.active);
          setFiltered(activeMembers);
        }, 1000);
      });
    }
  }, [tab]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Current Tab: {tab}</h2>

      <div>
        <button onClick={() => handleTabChange("Home")}>Home</button>
        <button onClick={() => handleTabChange("Members")}>Members</button>
        <button onClick={() => handleTabChange("About")}>About</button>
      </div>

      {tab === "Home" && <p>Welcome to the Home page!</p>}
      {tab === "About" && <p>About our application...</p>}

      {tab === "Members" && (
        <>
          {isPending && <p style={{ color: "orange" }}>Filtering large data...</p>}
          <p>Total Members: {filtered.length}</p>
          <ul>
            {filtered.slice(0, 50).map((m) => (
              <li key={m.id}>{m.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UseTranstion;
