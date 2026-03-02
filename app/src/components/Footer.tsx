const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-32 md:pb-10 border-t border-white/10 relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                            <span className="text-black font-bold text-sm">SH</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Surya Homes</span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                        Transforming landscapes and elevating lifestyles across Tamil Nadu for over three decades. Let's build your future together.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wide text-sm">Contact Us</h4>
                    <ul className="space-y-4 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>Anna Salai, Madurai<br />Tamil Nadu, India</span>
                        </li>
                        <li className="flex items-center gap-3 mt-4">
                            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span>suryaram518business@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li><a href="#projects" className="hover:text-amber-500 transition-colors">Featured Projects</a></li>
                        <li><a href="#reviews" className="hover:text-amber-500 transition-colors">Client Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-amber-500 transition-colors">Get Pricing</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-slate-600 text-sm max-w-7xl mx-auto px-6 border-t border-white/5 pt-8">
                &copy; {new Date().getFullYear()} Surya Homes. All rights reserved.
            </div>

            {/* Mobile Sticky Contact Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-white/10 z-50 flex items-center justify-between p-4 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div>
                    <p className="text-xs text-slate-400 font-medium">Ready to discuss?</p>
                    <p className="text-white font-bold text-sm">+91 90256 94520</p>
                </div>
                <div className="flex gap-3">
                    <a href="tel:+919025694520" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </a>
                    <a href="#contact" className="px-5 py-2 rounded-full bg-green-500 text-black text-sm font-bold tracking-wide hover:bg-green-400 transition-colors">
                        WhatsApp
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
