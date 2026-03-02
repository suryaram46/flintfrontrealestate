import { motion } from 'motion/react';

const HeroSearch = () => {
    return (
        <section className="relative -mt-16 md:-mt-24 z-30 px-6 max-w-6xl mx-auto mb-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="bg-white/90 backdrop-blur-2xl border border-slate-200/50 rounded-[2.5rem] p-4 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
            >
                {/* Search Fields Container */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">

                    {/* Location */}
                    <div className="bg-white rounded-[1.5rem] p-4 flex-1 flex flex-col justify-center min-w-[200px] h-[88px] w-full">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 px-1">Location</label>
                        <div className="flex items-center gap-2 text-slate-900 border-none outline-none pl-1">
                            <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <select className="bg-transparent border-none outline-none w-full text-base lg:text-lg font-bold appearance-none cursor-pointer">
                                <option>Madurai</option>
                                <option>Coimbatore</option>
                                <option>Chennai</option>
                            </select>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="bg-white rounded-[1.5rem] p-4 flex-1 flex flex-col justify-center min-w-[200px] h-[88px] w-full">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 px-1">Price Range</label>
                        <div className="flex items-center gap-2 text-slate-900 border-none outline-none pl-1">
                            <div className="w-5 h-5 text-amber-500 shrink-0 flex items-center justify-center font-bold text-sm bg-amber-50 rounded-full border border-amber-200">₹</div>
                            <select className="bg-transparent border-none outline-none w-full text-base lg:text-lg font-bold appearance-none cursor-pointer">
                                <option>₹50L - ₹80L</option>
                                <option>₹80L - ₹1.5Cr</option>
                                <option>₹1.5Cr+</option>
                            </select>
                        </div>
                    </div>

                    {/* Property Type */}
                    <div className="bg-white rounded-[1.5rem] p-4 flex-1 flex flex-col justify-center min-w-[220px] h-[88px] w-full">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 px-1">Property Type</label>
                        <div className="flex items-center gap-2 text-slate-900 border-none outline-none pl-1">
                            <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <select className="bg-transparent border-none outline-none w-full text-base lg:text-lg font-bold appearance-none cursor-pointer">
                                <option>Premium Villa</option>
                                <option>Luxury Apartment</option>
                                <option>Commercial Space</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 font-bold h-[88px] px-8 rounded-[1.5rem] transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-lg shadow-amber-500/30 whitespace-nowrap">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search Properties
                    </button>

                </div>
            </motion.div>
        </section>
    );
};

export default HeroSearch;
