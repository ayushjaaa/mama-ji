import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "Timéo Lamy",
    role: "Credigi COO",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  {
    name: "Cloé Millet",
    role: "Marketing",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  {
    name: "Ryan Ouellet",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
];

const TeamSection = () => {
  return (
    <div className="md:py-20 w-full text-center container mx-auto px-4 pb-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-semibold mb-2">
        Our{" "}
        <span className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent">
          Team
        </span>
      </h1>
      <p className="text-gray-500 mb-10">"We are here to get your card"</p>

      {/* Team Grid */}
      <div className="grid  gap-20 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative w-full ">
            {/* Image */}
            <div className="rounded-xl overflow-hidden h-90">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Card */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[90%] rounded-2xl bg-white shadow-[3px_8px_15px_rgba(27,117,107,0.3)] py-8">
              {/* Social Icons */}
              <div className="flex justify-center gap-3 absolute -top-6 left-1/2 -translate-x-1/2">
                <a
                  href={member.facebook}
                  className="hovericone w-10 h-10 bg-[#1C756B] text-white rounded-sm flex justify-center items-center hover:bg-[#145f53] transition"
                >
                  <FaFacebookF className=" h-5 w-5" />
                </a>
                <a
                  href={member.linkedin}
                  className="hovericone w-10 h-10 bg-[#1C756B] text-white rounded-sm flex justify-center items-center hover:bg-[#145f53] transition"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href={member.whatsapp}
                  className="hovericone w-10 h-10 bg-[#1C756B] text-white rounded-sm flex justify-center items-center hover:bg-[#145f53] transition"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
