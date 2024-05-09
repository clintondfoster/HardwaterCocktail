import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="flex w-full flex-wrap items-center justify-between bg-slate-950 p-4">
            <aside>
                  <Image src="/images/Hardwater-Horizontal-Knockout.svg"
                        alt="Hardwater" 
                        height={50} 
                        width={100} 
                        priority
                         />
            </aside>
            <Link href="https://www.instagram.com/hardwaterbentonville/"
                            className="flex flex-row items-center gap-2 text-2xl">
                            <FaInstagram aria-label="Instagram" />{' '}
                            <span className='text-xs'>hardwaterbentonville</span>
                        </Link>
        </footer>
    )
}

                        
               