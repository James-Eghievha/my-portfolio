import { useState } from "react"
import { cn } from "./lib/utils";


const skills = [
     
    { name: 'CSS', level: 'Advanced', category: 'Front-End' },
    { name: 'HTML', level: 'Advanced', category: 'Front-End' },
    { name: 'JavaScript', level: 'Intermediate', category: 'Front-End' },
    { name: 'ReactJS', level: 'Intermediate', category: 'Front-End' },
    { name: 'Redux', level: 'Intermediate', category: 'Front-End'},
    { name: 'TypeScript', level: 'Intermediate', category: 'Front-End'},
    { name: 'Bootstrap', level: 'Intermediate', category: 'Front-End' },
    { name: 'EJS', level: 'Intermediate', category: 'Front-End' },
    { name: 'React Native', level: 'Intermediate', category: 'Front-End' },
    { name: 'NextJS', level: 'Intermediate', category: 'Front-End' },
    { name: 'Tailwind CSS', level: 'Advanced', category: 'Front-End' },

    { name: 'NodeJS', level: 'Intermediate', category: 'Back-End' },
    { name: 'NestJS', level: 'Beginner', category: 'Back-End' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Back-End' },
    { name: 'MySQL', level: 'Intermediate', category: 'Back-End' },

    { name: 'Git & Github', level: 'Advanced', category: 'Tools' },
    { name: 'Docker', level: 'Advanced', category: 'Tools' },
    { name: 'Figma', level: 'Advanced', category: 'Tools' },
    { name: 'VS Code', level: 'Advanced', category: 'Tools' },

];

const categories = ["All", "Front-End", "Back-End", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // This component renders a skills section with filtering capabilities based on categories.
    const filteredSkills = skills.filter((skill) => activeCategory === "All"
     || skill.category === activeCategory);

    return (
        <section id="skills"
            className="py-12 sm:py-24 px-2 sm:px-4 relative bg-secondary/30">
            <div className='container mx-auto max-w-5xl'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                    {categories.map((category, key) => (
                        <button key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-3 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-base transition-colors duration-300",
                            activeCategory === category ? "bg-primary text-primary-foreground" : 
                            "bg-secondary/70 text-foreground hover:bg-secondary/80 hover:text-primary",
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-3 sm:p-6 bg-background rounded-lg shadow-xs
                            card-hover 
                            hover:shadow-lg transition-shadow duration-300">
                                <div className="mb-2 sm:mb-4 text-left">
                                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{skill.name}</h3>
                                </div>

                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-2 rounded-full 
                                    origin-left animate-[grow_1.5s_ease-out" 
                                    style={{ width: skill.level === 'Advanced' ? '100%' : skill.level === 'Intermediate' ? '66%' : '33%' }} />
                                </div>
                                <div className="text-right mt-1">
                                    <span className="text-muted-foreground text-xs sm:text-sm">
                                        {skill.level === 'Advanced' ? 'Expert' : skill.level === 'Intermediate' ? 'Proficient' : 'Beginner'}
                                    </span>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}