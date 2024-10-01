"use client";

import { useState } from "react";
import cs from "clsx";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <div className="lg:hidden">
        <button className="text-black" onClick={onOpen}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8125 8.3125H23.1875M4.8125 14H23.1875M4.8125 19.6875H23.1875"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={cs(
          "fixed m-0 inset-0 z-20 bg-black/50 transition-all",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cs(
            "w-[90%] bg-white h-full ml-auto transition-all duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h4 className="font-light text-sm">Navigate Between Pages</h4>
              <button onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={28}
                  height={28}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
