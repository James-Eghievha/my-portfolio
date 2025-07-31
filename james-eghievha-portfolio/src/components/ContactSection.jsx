import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { cn } from "./lib/utils";

export const ContactSection = () => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setTimeout(() => {
    //         alert("Message sent successfully!");
    //     }, 1500);
    // }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
                I’d love to hear from you! Whether you have a question, a project idea, or just want to say hi,
                feel free to reach out using the form below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />{" "}
                            </div>

                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:jameseghievha@gmail.com" className="
                                    text-muted-foreground hover:text-primary transition-colors">
                                    jameseghievha@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />{" "}
                            </div>

                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+2348130564227" className="
                                    text-muted-foreground hover:text-primary transition-colors">
                                    +2348130564227
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />{" "}
                            </div>

                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Lagos, Nigeria
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="#" target="_blank">
                                <Twitter />
                            </a>
                            <a href="#" target="_blank">
                                <Instagram />
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                className="w-full px-4 py-3 rounded-md border border-input 
                                bg-background focus:outline-hidden focus:ring-2 focus:ring-primary 
                                transition-colors"
                                placeholder="Samuel Agu..." 
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {" "}
                                Your Email
                            </label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email"
                                className="w-full px-4 py-3 rounded-md border border-input 
                                bg-background focus:outline-hidden focus:ring-2 focus:ring-primary 
                                transition-colors"
                                placeholder="samuel@mail.com" 
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {" "}
                                Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message"
                                className="w-full px-4 py-3 rounded-md border border-input 
                                bg-background focus:outline-hidden focus:ring-2 focus:ring-primary 
                                transition-colors resize-none"
                                placeholder="Hello, I'd like to talk about..." 
                                required
                            />
                        </div>

                        <button type="submit" 
                        className={cn("cosmic-button w-full flex justify-center gap-2",
                            ""
                        )}>Send Message
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
}