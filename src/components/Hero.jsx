import {ButtonPrimary, ButtonSecondary} from "./Button";

function Hero() {
    return (

        <section id="home" className="pt-28 md:pt-36 ">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-full">
                            <img src="/images/Image.jpg" alt="hero" width={40} height={40} className="img-cover"/>
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping">

                                </span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Software Engineer & Instructor, ready to bring innovation to your projects.
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary label="Download CV"
                                       href="https://drive.google.com/file/d/1FWdXvqpp9CciYxf_EFxuZgSv0e_SyT5_/view?usp=sharing"
                                       icon="download"
                                       classes=""
                        />
                        <ButtonSecondary href="#about" label="Scroll down" icon="arrow_downward"/>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure
                        className="w-full mx-w-[480px] ml-auto bg-gradient-to-b from-red-400 via-25% via-red-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img src="/images/Mahmoud%20Ayman.png" alt="Mahmoud Ayman" width={656} height={800}
                             className="w-full h-full"/>
                    </figure>
                </div>
            </div>
        </section>
    )

}

export default Hero;