import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

export default function NavBar() {
    return (
        <nav className="navbar absolute z-50 text-xl text-slate-100">
            <div className="navbar-start">
            <Link href={'/#hero'}>
                <a>
                    <Image src="/images/Favicon-H-Knockout.svg" alt="Hardwater" className="h-8 w-auto" />
                </a>
            </Link>
            </div>
            <div className="navbar-end">
                <ul className="font-subtitle menu hidden gap-6 px-1 text-xl text-slate-100 md:menu-horizontal">
                    <li>
                        <Link href={'/#bio'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/#contact'}>Contact</Link>
                    </li>
                    <li className="text-3xl">
                        <Link href="https://www.instagram.com/hardwaterbentonville/">
                            <FaInstagram aria-label="Instagram" />
                        </Link>
                    </li>
                </ul>
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden text-xl"
                    >
                        <MdMenu aria-label="Menu" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm relative right-0 z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li>
                            <Link href={'/#bio'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/#contact'}>Contact</Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/hardwaterbentonville/">
                                <FaInstagram aria-label="Instagram" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}