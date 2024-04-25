import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div id="contact" className="w-full bg-[#06AEEF] p-8 text-slate-100">
            <h1 className="font-subtitle pb-4 text-center text-xl text-slate-900">
                Ready to get the party started?
            </h1>
            <p className="pb-4 text-center text-slate-900">
                Drop us an email to discuss your event
            </p>
            <div className="flex w-full justify-center">
                <Link href="mailto:hello@thevibeband.co.uk">
                    <button className="font-subtitle btn border-none bg-[#EB4A98] text-white">
                        <MdOutlineEmail aria-label="Email" />hello@thevibeband.co.uk
                    </button>
                </Link>
            </div>
        </div>
    )
}