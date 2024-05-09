'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { FaInstagram } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { useState, useEffect } from 'react';
import React from 'react';

export default function NavBar() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

    useEffect(() => {
        const closeDropdown = (e: MouseEvent) => {
            if (!(e.target as Element).closest('.navbar-end')) {
                setIsDropDownOpen(false);
            }
        };
        if (isDropDownOpen) {
            window.addEventListener('click', closeDropdown)
        }
        return () => {
            window.removeEventListener('click', closeDropdown)
        };
    }, [isDropDownOpen])

    return (
        <nav className="fixed top-0 left-0 z-50 w-full flex justify-between text-xl bg-white bg-opacity-50 backdrop-blur-lg">
            <div className="navbar-start flex-grow p-4">
                <Link href={'/#hero'} passHref>
                        <Image src="/images/Favicon-H-Knockout.svg" 
                        alt="Hardwater" 
                        height={32} 
                        width={32} 
                        priority
                         />
                </Link>
            </div>
            <div className="navbar-end flex-grow p-4">
                <ul className="hidden md:flex gap-6">
                    <li><Link href="/#bio" passHref>About Us</Link></li>
                    <li><Link href="/#contact" passHref>Contact</Link></li>
                </ul>
                    <button onClick={toggleDropDown} className="block md:hidden" aria-expanded={isDropDownOpen} aria-controls="dropdown-menu">
                        <MdMenu aria-label='Menu' />
                    </button>
                    {isDropDownOpen && (
                        <ul id="dropdown-menu" className="absolute right-0 top-full mt-2 w-52 rounded bg-base-100 p-2 shadow md:hidden">
                            <li><Link href={'/#bio'}>About Us</Link></li>
                            <li><Link href={'/#contact'}>Contact</Link></li>
                            {/* <li><Link href="https://www.instagram.com/hardwaterbentonville/"><FaInstagram aria-label="Instagram" /></Link></li> */}
                        </ul>
                    )}
                </div>
        </nav>
    )
}


{/* <li className="text-3xl" hidden>
                        <Link href="https://www.instagram.com/hardwaterbentonville/">
                            <FaInstagram aria-label="Instagram" />
                        </Link>
                    </li> */}

//                 <div className="dropdown">
//                     <div
//                         tabIndex={0}
//                         role="button"
//                         className="btn btn-ghost md:hidden text-xl"
//                     >
//                         <MdMenu aria-label="Menu" />
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu dropdown-content menu-sm relative right-0 z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
//                     >
//                         <li>
//                             <Link href={'/#bio'}>About Us</Link>
//                         </li>
//                         <li>
//                             <Link href={'/#contact'}>Contact</Link>
//                         </li>
//                         <li>
//                             <Link href="https://www.instagram.com/hardwaterbentonville/">
//                                 <FaInstagram aria-label="Instagram" />
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }