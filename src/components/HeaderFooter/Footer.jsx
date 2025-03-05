import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-8">
      {/* Social Media & Contact Icons */}
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-500 transition-colors duration-300">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/odevthoas" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/odevthoas" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors duration-300">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/odevthoas" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition-colors duration-300">
          <FaInstagram />
        </a>
      </div>

      {/* Location and Scroll Up */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>Localização: Brasil</span>
        </div>
        <a href="#top" className="text-lg hover:text-gray-300 transition-colors duration-300">
          <FaChevronUp />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t pt-4 text-sm">
        <p>
          © {new Date().getFullYear()} Thomas Eduardo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
