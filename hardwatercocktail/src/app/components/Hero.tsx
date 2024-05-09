import Image from 'next/image'
// import Link from 'next/link'

export default function Hero() {
    console.log("Hero component loaded");
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 z-10">
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover object-cover"
                    poster="/videos/boulevardier-cocktail-bourbon-negroni.png"
                >
                    <source src="/videos/HardwaterVid.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="absolute z-20 inset-0 flex items-center justify-center bg-slate-900/50">
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
                <div>
                    <h1>Hero Content here!</h1>
                </div>
            </div>
        </div>
    )
}


//  {/* <h1 className="text-xl text-slate-100 md:text-3xl text-center">
//                     Your captivating tagline here!
//                 </h1> */}
//                 {/* <Link href="#action">
//                     <button className="btn bg-[#EB4A98] text-white">
//                         Call to Action
//                     </button>
//                 </Link> */}