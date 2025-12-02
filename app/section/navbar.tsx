"use client";

import { Dispatch, SetStateAction } from "react";


export default function NavBar({
  isSAW,
  setIsSAW,
} : {
  isSAW: boolean;
  setIsSAW: Dispatch<SetStateAction<boolean>>
}) {

  const listOfNavigation = [
    "SAW",
    "WP",
  ];

  return (
    <nav className="sticky bg-custom-black top-0 min-h-[54px] py-2 px-6 gap-12 items-center justify-center flex flex-row z-50">
       {listOfNavigation.map(nav => (
        <button key={nav} className={`text-[16px] cursor-pointer font-bold hover:underline inline ${(nav == "SAW" && isSAW) || (nav == "WP" && !isSAW) ? "text-custom-white" : "text-custom-darker-white"}`} onClick={() => {
          if (nav == "SAW") {
            setIsSAW(true);
          }
          else {
            setIsSAW(false);
          }
        }}>
          {nav}
        </button>
       ))}
    </nav>
  )
}