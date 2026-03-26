import React from 'react';
import { Users, Clock, Calendar, ArrowUpRight, Compass, Sparkles, MapPin } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const GroupTours = () => {
  const items = useSelector((state) => state.groupTours?.items || []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-32 pt-32">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header Section: Editorial Style */}
        <div className="relative mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">
                <Sparkles size={14} /> Moon Traveller Signature
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                SHARED <span className="text-transparent stroke-text">MEMORIES.</span><br/>
                COLLECTIVE <span className="text-blue-600 italic font-serif">SOULS.</span>
              </h1>
            </div>
            
            <div className="hidden lg:block pb-4">
              <div className="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 border border-slate-100">
                <div className="bg-blue-600 text-white p-4 rounded-2xl rotate-12 shadow-lg shadow-blue-500/20">
                   <Compass size={24} className="animate-pulse" />
                </div>
                <div>
                   <p className="text-3xl font-black text-slate-900 leading-none">{items.length}</p>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Expeditions Open</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Background Text */}
          <div className="absolute -top-16 -left-10 text-[12rem] font-black text-slate-900/[0.03] select-none pointer-events-none uppercase">
            Batches
          </div>
        </div>

        {/* The Grid: Dynamic Staggered Layout */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {items.map((tour, idx) => (
              <div 
                key={tour.id} 
                className={`group relative flex flex-col transition-all duration-700 ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                {/* Image Container with Custom Mask */}
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  />
                  
                  {/* Floating Overlays */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-2xl shadow-xl">
                      {tour.tag || 'Open Batch'}
                    </span>
                    <div className="bg-slate-900 text-white p-4 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                       <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Gradient Info Shield */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="flex items-center gap-3 text-white/80 text-[10px] font-black uppercase tracking-widest mb-3">
                      <div className="flex items-center gap-1"><Clock size={14} className="text-blue-400" /> {tour.duration}</div>
                      <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                      <div className="flex items-center gap-1"><Users size={14} className="text-blue-400" /> {tour.groupSize}</div>
                    </div>
                    <h3 className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                      {tour.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="mt-8 px-4 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 font-black text-[9px] uppercase tracking-[0.3em] mb-1">
                      <MapPin size={10} className="text-blue-600" /> Next Batch: {tour.nextBatch}
                    </div>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter italic">
                      {tour.price}
                    </p>
                  </div>
                  <Link 
                    to={`/group-tour/${tour.id}`} 
                    className="bg-blue-600 hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-blue-500/20"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-white rounded-[4rem] border border-slate-100 shadow-inner">
            <Compass className="mx-auto text-slate-100 mb-6 animate-spin-slow" size={100} />
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Searching for the path...</h3>
            <p className="text-slate-400 font-bold text-sm mt-2">No active batches at this coordinate.</p>
          </div>
        )}
      </div>

      {/* Global CSS for the Stroke Effect */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #0f172a;
          color: transparent;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GroupTours;