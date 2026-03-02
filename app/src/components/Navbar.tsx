import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm' : 'bg-black/30 backdrop-blur-md py-6 border-b border-white/10'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                        <span className="text-black font-black text-sm">SH</span>
                    </div>
                    <span className={`text-xl font-bold tracking-tight drop-shadow-md transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>Surya</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#projects" className={`text-sm font-semibold hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Projects</a>
                    <a href="#about" className={`text-sm font-semibold hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>About Us</a>
                    <a href="#reviews" className={`text-sm font-semibold hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Reviews</a>
                </div>

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden md:flex px-6 py-2.5 rounded-full bg-[#0e165c] text-white text-sm font-bold tracking-wide hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
                        Get Pricing
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/10 backdrop-blur-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className={`w-6 h-6 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl overflow-hidden py-4 px-6 flex flex-col gap-4 z-50">
                    <a href="#projects" className="text-lg font-bold text-slate-800 hover:text-amber-500 py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    <a href="#about" className="text-lg font-bold text-slate-800 hover:text-amber-500 py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#reviews" className="text-lg font-bold text-slate-800 hover:text-amber-500 py-2" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                    <a href="#contact" className="mt-2 w-full text-center px-6 py-3 rounded-full bg-[#0e165c] text-white font-bold tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Pricing
                    </a>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
