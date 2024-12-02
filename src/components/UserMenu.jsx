import React, { useState, useRef, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    function UserMenu() {
      const [dropdownOpen, setDropdownOpen] = useState(false);

      const trigger = useRef(null);
      const dropdown = useRef(null);

      // Close on click outside
      useEffect(() => {
        const clickHandler = ({ target }) => {
          if (!dropdown.current) return;
          if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
          setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
      });

      return (
        <div className="relative inline-flex">
          <button
            ref={trigger}
            className="inline-flex justify-center items-center group"
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32" width="32" height="32" alt="User" />
            <div className="flex items-center truncate">
              <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">Admin User</span>
              <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </button>

          <div
            className={`origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              dropdownOpen ? 'block' : 'hidden'
            }`}
          >
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
            >
              <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
                <div className="font-medium text-gray-800">Admin User</div>
                <div className="text-xs text-gray-500 italic">Administrator</div>
              </div>
              <ul>
                <li>
                  <Link
                    className="font-medium text-sm text-purple-500 hover:text-purple-600 flex items-center py-1 px-3"
                    to="/settings"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-sm text-purple-500 hover:text-purple-600 flex items-center py-1 px-3"
                    to="/signin"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    export default UserMenu;
