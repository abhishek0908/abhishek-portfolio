import { useReveal } from '@/hooks/use-reveal';
import { Calendar, ExternalLink } from 'lucide-react';

const Booking = () => {
    const { domRef, isVisible } = useReveal();
    const calLink = "https://cal.com/abhishek-udiya-bw59jl/30min";

    return (
        <section id="booking" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />

            <div
                ref={domRef}
                className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-primary font-mono text-sm mb-6 tracking-widest animate-pulse flex items-center justify-center gap-2">
                        Get in touch
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        <span className="text-gradient">Ready to Talk?</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-mono">
                        Directly block a slot in my calendar for a technical discussion,
                        project collaboration, or just a quick chat.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href={calLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-12 py-6 bg-primary text-black font-mono font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_40px_-15px_rgba(34,197,94,0.4)]"
                        >
                            <div className="relative z-10 flex items-center gap-4 text-xl">
                                <Calendar size={28} className="group-hover:rotate-12 transition-transform duration-300" />
                                <span>Book a Slot</span>
                                <ExternalLink size={20} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>

                            {/* Animated background for the button */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            ONLINE
                        </div>
                        <div className="h-px w-12 bg-slate-800" />
                        <div>30 MIN SESSIONS</div>
                        <div className="h-px w-12 bg-slate-800" />
                        <div>CAL.COM SECURE</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
