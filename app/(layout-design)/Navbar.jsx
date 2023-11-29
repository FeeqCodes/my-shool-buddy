
'use client'


import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import {  usePathname } from 'next/navigation'
import PopUp from "../components/PopUp"





const Navbar = () => {
  const currentPath = usePathname()
  const [popUp, SetPopUp ] = useState(false)


  const handlePopUp = () => {
    if(popUp === false) {
      SetPopUp(true);

    } else {

      SetPopUp(false);
    }
  };


  const [account, setAccount] = useState(false)
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "How to use", href:'', onclick: handlePopUp },
  ];

  

  return (
    <>
      <nav className="relative flex justify-between items-center p-3 px-[40px] z-10 m-auto bg-transparent shadow-md  w-[65%] bg-black mt-5 font-loveYa rounded-full backdrop-blur-md shadow-white gap-8">
        <div>
          <Image width={100} height={100} src="/assets/Study AI.svg" alt="" />
        </div>
        <ul className=" relative text-white flex items-center justify-center gap-x-14">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.href === currentPath ? "text-[#fff]" : "text-[#ddd]"
              } hover:text-gray-400`}
              onClick={link.onclick}
            >
              {link.label}
            </Link>
          ))}

          {/* Pop up */}
          <div className="absolute left-[50%] translate-x-[-50%] mt-20 z-[999]">
            <PopUp popUp={popUp} />
          </div>
        </ul>

        <div>
          <button className="border-solid border-[1.5px] border-white  p-2 px-6 bg-[#511781] rounded-full hover:bg-[#15061B] transition-all duration-300">
            {!account ? " Connect wallet" : "Welcome"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar