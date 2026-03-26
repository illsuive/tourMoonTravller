import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedInternational } from '../store/slices/InterNational.js';
import { Globe, Plane, Heart, Star, ArrowUpRight, X } from 'lucide-react';

const InternationalScreen = () => {
    const dispatch = useDispatch();
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    // Form field states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const internationalPackages = useSelector((state) => state.international.items);
    const selectedPkg = useSelector((state) => state.international.selectedPackage);

    const handleOpenForm = (pkg) => {
        dispatch(setSelectedInternational(pkg));
        setIsFormOpen(true);
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        // Construct the professional message
        const message = `*New Inquiry Request*%0A%0A` +
            `*Package:* ${selectedPkg?.title}%0A` +
            `*Name:* ${name}%0A` +
            `*Number:* ${number}%0A` +
            `*Email:* ${email}%0A` +
            `*Duration:* ${selectedPkg?.duration}`;

        // Opens WhatsApp with the formatted message
        window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
        
        // Optional: Close form and reset fields
        setIsFormOpen(false);
        setName('');
        setEmail('');
        setNumber('');
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 py-25 relative">
            {/* Hero Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center gap-2 text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">
                    <Globe size={16} />
                    <span>Global Escapes</span>
                </div>
                <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
                    International <span className="text-blue-600">Honeymoons</span>
                </h1>
                <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
                    Discover breathtaking island paradises and luxury overwater stays.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {internationalPackages.map((pkg) => (
                    <div 
                        key={pkg.id} 
                        className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row border border-slate-100"
                    >
                        {/* Image Section */}
                        <div className="relative w-full lg:w-2/5 h-72 lg:h-auto overflow-hidden">
                            <img 
                                src={pkg.image} 
                                alt={pkg.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800"; }}
                            />
                            <div className="absolute top-5 left-5">
                                <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                    {pkg.tag}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:w-3/5 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{pkg.title}</h3>
                                    <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                                        <span className="flex items-center gap-1">
                                            <Plane size={14} className="text-blue-500" /> {pkg.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star size={14} className="text-yellow-400 fill-yellow-400" /> 5.0
                                        </span>
                                    </div>
                                </div>
                                <button className="text-slate-300 hover:text-red-500 transition-colors">
                                    <Heart size={24} />
                                </button>
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                                "{pkg.description}"
                            </p>

                            <div className="grid grid-cols-1 gap-2 mb-8">
                                {pkg.perks.slice(0, 3).map((perk, index) => (
                                    <div key={index} className="flex items-center gap-2 text-[13px] text-slate-600">
                                        <div className="h-1 w-1 rounded-full bg-blue-500" />
                                        {perk}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-50 flex justify-end">
                                <button 
                                    onClick={() => handleOpenForm(pkg)}
                                    className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 group"
                                >
                                    Enquire Now
                                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inquiry Form Modal */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                        <button 
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Your Trip</h2>
                        <p className="text-slate-500 mb-6">Interested in: <span className="font-semibold text-blue-600">{selectedPkg?.title}</span></p>
                        
                        <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                            <input 
                                required
                                type="text" 
                                placeholder="Your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <input 
                                required
                                type="email" 
                                placeholder="Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <input 
                                required
                                type="tel" 
                                placeholder="Phone Number" 
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <button 
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                            >
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InternationalScreen;