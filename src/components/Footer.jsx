import React from "react";

const Footer = ({ name }) => {
  return (
    <footer>
      <span className="footerLabel">Developed by : </span>
      <span>{name}</span>
    </footer>
  );
};

export default Footer;
