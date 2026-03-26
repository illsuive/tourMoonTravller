import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSpiritual } from '../store/slices/spiritual.js'; // Adjust path
import { MapPin, Clock, Star, Check, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpiritualScreen = () => {
    const dispatch = useDispatch();
    // Accessing items from the spiritual slice specifically
    const spiritualPackages = useSelector((state) => state.spiritual.items);

    return (
        <div className="min-h-screen bg-[#fcf9f5] py-12 px-4 sm:px-6 lg:px-8 py-30 bg-slate-50">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Divine Journeys</span>
                <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">Spiritual Pilgrimages</h1>
                <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {spiritualPackages.map((pkg) => (
                    <div 
                        key={pkg.id} 
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100 flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={pkg.image} 
                                alt={pkg.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1545105511-94970926867a?auto=format&fit=crop&q=80&w=800"; }}
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-md text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                    {pkg.tag}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex-grow">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-gray-800 tracking-tight">{pkg.title}</h3>
                                <div className="flex items-center bg-green-50 px-2 py-1 rounded-md">
                                    <Star size={14} className="text-green-600 fill-green-600" />
                                    <span className="ml-1 text-xs font-bold text-green-700">4.9</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-4 text-gray-500">
                                <div className="flex items-center text-sm">
                                    <Clock size={16} className="mr-1 text-orange-500" />
                                    {pkg.duration}
                                </div>
                                <div className="flex items-center text-sm">
                                    <MapPin size={16} className="mr-1 text-orange-500" />
                                    India
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                                {pkg.description}
                            </p>

                            {/* Perks Checklist */}
                            <div className="space-y-2 mb-6">
                                {pkg.perks.slice(0, 3).map((perk, index) => (
                                    <div key={index} className="flex items-center text-sm text-gray-700">
                                        <div className="mr-3 bg-orange-100 p-1 rounded-full">
                                            <Check size={12} className="text-orange-600" />
                                        </div>
                                        {perk}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Price & Action */}
                        <div className="p-6 pt-0 mt-auto">
                            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Package Price</p>
                                    <p className="text-2xl font-black text-gray-900">
                                        {pkg.price.split('/')[0]}
                                    </p>
                                </div>
                                <Link to={`/spiritual/${pkg.id}`}>
                                <button 
                                    onClick={() => dispatch(setSelectedSpiritual(pkg))}
                                    className="bg-orange-600 hover:bg-gray-900 text-white p-3 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-200 hover:shadow-none"
                                >
                                    <ArrowRight size={20} />
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpiritualScreen;