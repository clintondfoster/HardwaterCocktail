import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <video
                playsInline
                autoPlay
                muted
                loop
                className="absolute z-10 h-screen object-cover"
                poster="/videos/boulevardier-cocktail-bourbon-negroni.png"
            >
                <source src="/videos/HardwaterVid.mp4" type="video/mp4" />
            </video>
            <div className="z-20 flex h-full w-full flex-col items-center justify-center gap-8 bg-slate-900/50 font-semibold">
                <Image
                    src="/images/Hardwater-Vertical-Knockout.svg"  
                    alt="Hardwater Cocktail Room"
                    width={400}
                    height={200}
                />
                {/* <h1 className="text-xl text-slate-100 md:text-3xl text-center">
                    Your captivating tagline here!
                </h1> */}
                {/* <Link href="#action">
                    <button className="btn bg-[#EB4A98] text-white">
                        Call to Action
                    </button>
                </Link> */}
            </div>
        </div>
    )
}