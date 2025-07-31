import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Udalice Official Website",
        description: "The official online presence of Udalice Integrated Nig. Ltd, showcasing its role as a leading Nigerian supplier of palm kernel products",
        image: "/projects/udalice.png",
        tags: ["ReactJS", "Tailwind CSS", "TypeScript"],
        demoUrl: "https://udalice.com",
        githubUrl: "#"
    },
     {
        id: 2,
        title: "Task Management App",
        description: "A task management application to help users manage their tasks efficiently.",
        image: "/projects/scheduleapp.png",
        tags: ["ReactJS", "NodeJS", "Express"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my skills and projects.",
        image: "/projects/myportfolio.png",
        tags: ["ReactJS", "Bootstrap", "JavaScript"],
        demoUrl: "https://james-portfolio1.netlify.app/",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Triada Mobile",
        description: "A website for Triada Mobile.",
        image: "/projects/triada1.png",
        tags: ["HTML", "CSS", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "E-Commerce Website",
        description: "A fully functional e-commerce website built with ReactJS and NodeJS, featuring product listings, shopping cart, and checkout functionality.",
        image: "/projects/comingsoon.jpeg",
        tags: ["ReactJS", "NodeJS", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "Blog Platform",
        description: "A blogging platform where users can create, edit, and delete posts. Built with Next.js and MongoDB.",
        image: "/projects/comingsoon.jpeg",
        tags: ["Next.js", "MongoDB", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 7,
        title: "Weather App",
        description: "A weather application that provides real-time weather updates using a third-party API.",
        image: "/projects/comingsoon.jpeg",
        tags: ["ReactJS", "API Integration", "CSS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 8,
        title: "Chat Application",
        description: "A real-time chat application built with ReactJS and Socket.io.",
        image: "/projects/comingsoon.jpeg",
        tags: ["ReactJS", "Socket.io", "NodeJS"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "} Featured <span className="text-primary"> Projects</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project showcases my
                skills in web development and my ability to create user-friendly
                 applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20
                                     text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary 
                                transition-colors duration-300" target="_blank">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary 
                                transition-colors duration-300" target="_blank">
                                    <Github size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="https://github.com/James-Eghievha" target="_blank">
                    Check My Github <ArrowRight size={16} />
                </a>

            </div>
        </div>
    </section>
}