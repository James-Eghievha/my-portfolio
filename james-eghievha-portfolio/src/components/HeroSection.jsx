import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 pt-20 md:pt-32"
        >
            <div className="container max-w-xs sm:max-w-md md:max-w-4xl mx-auto text-center z-10">
                <div className="space-y-4 sm:space-y-6">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        <span className=" opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className=" text-primary opacity-0 animate-fade-in-delay-1">
                            {"  "}
                            James
                        </span>
                        <span className=" text-gradient ml-0 sm:ml-2 opacity-0 animate-fade-in-delay-2">
                             {"  "}Eghievha
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-2xl md:max-w-5xl mx-auto opacity-0 animate-fade-in-delay-4">
                        A Software Engineer with a passion for crafting beautiful, user-friendly web applications.
                        With a keen eye for design and a knack for problem-solving,
                        I build sleek, responsive, and high-performance web experiences that don’t just
                        look good but solve real problems.
                        Let’s build solutions that don’t just work—but win.
                    </p>

                    <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#projects"
                            className="cosmic-button text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll</span>
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 sm:mt-2" />
            </div>
        </section>
    );
}