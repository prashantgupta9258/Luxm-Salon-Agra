import React from "react";
import { Scissors } from "lucide-react";

export default React.memo(function Footer() {
  return (
    <footer className="bg-[#1C1917] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-12 mb-8 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="/"
              aria-label="Lumx Salon Agra Home"
              className="flex items-center gap-2 mb-4"
            >
              <Scissors className="w-5 h-5 text-[#C4A47C]" aria-hidden="true" />
              <span className="font-serif text-xl font-bold tracking-wider">
                LUMX
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Elevating the art of hair design in a welcoming, luxurious
              environment in Agra tailored exactly to you.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com/lumxsalonagra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#C4A47C] hover:border-[#C4A47C] transition-colors"
            >
              <span className="text-xs">IG</span>
            </a>
            <a
              href="https://facebook.com/lumxsalonagra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#C4A47C] hover:border-[#C4A47C] transition-colors"
            >
              <span className="text-xs">FB</span>
            </a>
            <a
              href="https://youtube.com/@lumxsalonagra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on YouTube"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#C4A47C] hover:border-[#C4A47C] transition-colors"
            >
              <span className="text-xs">YT</span>
            </a>
            <a
              href="https://linkedin.com/company/lumxsalonagra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#C4A47C] hover:border-[#C4A47C] transition-colors"
            >
              <span className="text-xs">IN</span>
            </a>
            <a
              href="https://twitter.com/lumxsalonagra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#C4A47C] hover:border-[#C4A47C] transition-colors"
            >
              <span className="text-xs">X</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-800 pb-12 mb-8 text-sm text-gray-400">
          <div>
            <h3 className="text-white uppercase tracking-widest mb-4 font-bold text-xs">Contact Information</h3>
            <address className="not-italic flex flex-col gap-2">
              <p>Near Taj Mahal</p>
              <p>Agra, Uttar Pradesh 282001, India</p>
              <p>
                <a href="tel:+919876543210" className="hover:text-[#C4A47C] transition-colors">+91 98765 43210</a>
              </p>
              <p>
                <a href="mailto:hello@lumxsalon.in" className="hover:text-[#C4A47C] transition-colors">hello@lumxsalon.in</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-white uppercase tracking-widest mb-4 font-bold text-xs">Opening Hours</h3>
            <div className="flex flex-col gap-2">
              <p>Monday - Sunday: 9:00 AM - 8:00 PM</p>
              <p>Walk-ins welcome, appointments preferred.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
          <p>
            &copy; {new Date().getFullYear()} Lumx Salon Agra. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
