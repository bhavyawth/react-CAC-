import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 shadow-inner border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap -m-6">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-6">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} All Rights Reserved by DevUI.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Company
              </h3>
              <ul className="space-y-4">
                {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/"
                      className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Support
              </h3>
              <ul className="space-y-4">
                {["Account", "Help", "Contact Us", "Customer Support"].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/"
                      className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="w-full md:w-1/2 lg:w-3/12 p-6">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Legal
              </h3>
              <ul className="space-y-4">
                {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/"
                      className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer