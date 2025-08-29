import React from "react";
import "./Services.css";
import { FaGavel, FaLock, FaBalanceScale, FaCannabis, FaChild, FaBook, FaLaptopCode, FaMoneyCheckAlt, FaUniversity } from "react-icons/fa";

const services = [
  { icon: <FaGavel />, title: "Bail Application", desc: "Quick and efficient assistance in filing bail applications." },
  { icon: <FaLock />, title: "Anticipatory Bail", desc: "Protective legal support before arrest situations." },
  { icon: <FaBalanceScale />, title: "Criminal Appeal", desc: "Strong representation in criminal appeal matters." },
  { icon: <FaCannabis />, title: "NDPS Act Cases", desc: "Expertise in narcotics and drug-related cases." },
  { icon: <FaChild />, title: "POCSO Cases", desc: "Sensitive handling of Protection of Children cases." },
  { icon: <FaBook />, title: "IPC Cases", desc: "Defense and prosecution in all IPC-related cases." },
  { icon: <FaLaptopCode />, title: "Cyber Crime", desc: "Legal aid in cyber fraud, hacking, and online crime." },
  { icon: <FaMoneyCheckAlt />, title: "Cheque Bounce", desc: "Expert representation in Section 138 NI Act cases." },
//   { icon: <FaUniversity />, title: "Trial Court", desc: "Comprehensive representation in trial courts." },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
