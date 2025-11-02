import React from 'react';
import CommanpyName from '../CommanyName/CommanpyName';


const listofCompany = [
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
  { ComanyLogo: "//logotyp.us/file/hdfc.svg" },
];

const Section2 = () => {
  return (
    <div className="marquee-container  w-full">
      <div className="marquee">
        {listofCompany.map((elem, idx) => (
          <div key={idx} className="marquee-item">
            <CommanpyName logo={elem.ComanyLogo} />
          </div>
        ))}
        {listofCompany.map((elem, idx) => (
          <div key={`dup-${idx}`} className="marquee-item">
            <CommanpyName logo={elem.ComanyLogo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
