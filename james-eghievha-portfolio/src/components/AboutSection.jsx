
import { Code } from "lucide-react"; // 2.1k (gzipped
import { User } from "lucide-react";
import { Briefcase } from "lucide-react"; // 2.1k (gzipped: 1.1k)

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12  items-center">
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold">Passionate Software Engineer & 
                        Tech Creator</h3>
                    <p className="text-muted-foreground">
                        James Eghievha is a visionary Full-stack Software Engineer and Technical 
                        Creative dedicated to building clean, responsive, and user-focused web 
                        experiences. As the founder of I-Radiance and a rising force in the world
                         of digital innovation, James brings a unique blend of artistic vision and
                          technical precision to everything he creates
                    </p>
                    <p className="text-muted-foreground">
                        With a foundation forged in the Nigerian Navy’s engine rooms and 
                        sharpened through a Postgraduate in Information Technology, 
                        James has seamlessly transitioned from maintaining critical naval systems 
                        to crafting intuitive, high-performance web applications.
                         He has over six years of hands-on technical experience, and his work 
                         reflects a rare mix of discipline, design thinking, and code craftsmanship.
                    </p>

                    <p className="text-muted-foreground">
                        James aspires to lead groundbreaking tech projects that solve real-world problems, 
                        particularly at the intersection of business, education, and community impact. 
                        His standout achievements include developing a full-featured React-based 
                        dashboard from scratch, and building a fast-scaling digital brand that helps 
                        businesses tell their stories visually and strategically.
                    </p>

                    <p className="text-muted-foreground">
                        Driven by purpose and powered by passion, James Eghievha is not just building
                         websites—he’s building bridges between people, ideas, and opportunity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch

                        </a>

                        <a href="https://docs.google.com/document/d/1YJNgD-xlUgNLxbxuxfEjdpf4lf6wMURskxykxPlY_fk/export?format=pdf"
                              target="_blank"
  rel="noopener             noreferrer" className="px-6 py-2 rounded-full border border-primary
                            hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV

                        </a>

                    </div>

                </div>

                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Code Craftmanship</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        Clean, scalable, and performance-driven code is my signature. 
                                        I write with intention, structure for growth, and build solutions that not only work—but endure. 
                                        It’s not just development; it’s digital craftsmanship.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Design Thinking</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        I don’t just build websites—I build experiences. With every project, I ask: 
                                        What does the user need? What solves the problem beautifully? 
                                        My process is fueled by empathy, clarity, and a deep respect for intuitive design.
                                    </p>

                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Discipline</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        Years of service in high-stakes environments taught me one thing—every detail matters. 
                                        I bring that same level of focus, reliability, 
                                        and execution into my code. Timelines are sacred. Quality is non-negotiable.
                                    </p>

                                </div>
                                
                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div className="mt-24 flex justify-center">
    <div className="rounded-lg overflow-hidden shadow-xs border bg-card max-w-3xl w-full">
        
        <iframe
            src="https://www.youtube.com/embed/X1EqRPhDOK0"
            title="YouTube video player"
            width={560} height={315}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-84 object-cover bg-black mt-12 muted-foreground"
        ></iframe>
    </div>
</div>
        </div>
        
    </section>
}