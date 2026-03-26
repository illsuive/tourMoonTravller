import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Clock, MapPin, CheckCircle2, ArrowLeft, 
  Send, User, Info, Flower2, Sunrise, ShieldCheck, Star
} from 'lucide-react';
import { setSelectedSpiritual } from '../store/slices/spiritual.js'; // Adjust path

const SpiritualCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Get package from Spiritual Slice
  const pkg = useSelector((state) => 
    state.spiritual?.items?.find((item) => item.id === id)
  );

  // 2. Local Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    adults: 2,
    children: 0
  });

  useEffect(() => {
    if (pkg) {
      dispatch(setSelectedSpiritual(pkg));
    }
  }, [pkg, dispatch]);

  if (!pkg) return <div className="py-20 text-center font-bold text-slate-400 font-serif">Sacred journey not found!</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    const message = `*DIVINE PILGRIMAGE ENQUIRY*%0a` +
                    `--------------------------%0a` +
                    `*Sacred Tour:* ${pkg.title}%0a` +
                    `*Duration:* ${pkg.duration}%0a` +
                    `--------------------------%0a` +
                    `*Devotee Name:* ${formData.name || 'N/A'}%0a` +
                    `*Phone:* ${formData.phone || 'N/A'}%0a` +
                    `*Darshan Date:* ${formData.travelDate || 'N/A'}%0a` +
                    `*Total Members:* ${formData.adults} Adults, ${formData.children} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="bg-[#FFFAF3] min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[55vh] overflow-hidden">
        <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover shadow-inner" 
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1545105511-94970926867a?auto=format&fit=crop&q=80&w=1200"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-orange-900/20 to-transparent" />
        
        <button 
            onClick={() => navigate(-1)} 
            className="absolute top-8 left-8 bg-white/30 backdrop-blur-lg p-3 rounded-full text-white hover:bg-orange-600 transition-all z-10"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="absolute bottom-12 left-8 right-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                {pkg.tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold border border-white/30">
                <Clock size={16}/> {pkg.duration}
            </span>
            {/* <span className="flex items-center gap-2 bg-orange-500/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg">
                <Sunrise size={16}/> VIP Darshan Included
            </span> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Section: Spiritual Info */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-orange-100">
            <h2 className="text-3xl font-serif font-bold text-orange-900 mb-6 flex items-center gap-3">
               <Flower2 className="text-orange-500" /> About the Pilgrimage
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed italic">
              "{pkg.description}"
            </p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <Star size={24} className="text-orange-500 fill-orange-500" /> Pilgrimage Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.perks?.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-orange-50 rounded-3xl border border-orange-100 text-orange-900 font-bold text-sm">
                  <CheckCircle2 size={20} className="text-orange-600 shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Spiritual Timeline</h2>
            <div className="space-y-6">
              {pkg.itinerary?.map((item, idx) => (
                <div key={idx} className="relative pl-10 border-l-2 border-orange-200 ml-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-sm" />
                  <div className="bg-white p-6 rounded-3xl border border-orange-50 shadow-sm hover:border-orange-300 transition-all">
                    <span className="font-black text-orange-600 text-xs uppercase tracking-widest block mb-1">
                      {item.day}
                    </span>
                    <p className="text-slate-700 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Section: Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white rounded-[3rem] p-8 shadow-xl border-t-8 border-orange-500">
            <div className="mb-8">
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Dakshina / Package Price</p>
              <h3 className="text-4xl font-black text-slate-900">{pkg.price}</h3>
              <div className="flex items-center gap-2 mt-3 text-emerald-600 font-bold text-xs bg-emerald-50 w-fit px-3 py-1 rounded-full">
                <ShieldCheck size={14} /> All-Inclusive Satvik Plan
              </div>
            </div>

            <form onSubmit={handleWhatsApp} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Plan Name</label>
                  <div className="relative">
                    <input required name="name" value={pkg.title} disabled={true} type="text" placeholder="Devotee Name" className="w-full pl-14 p-4 bg-orange-50 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-sm text-slate-800" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-300" size={18} />
                    <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Devotee Name" className="w-full pl-14 p-4 bg-orange-50 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-sm text-slate-800" />
                  </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4">WhatsApp No.</label>
                    <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="+91" className="w-full p-4 bg-orange-50 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-sm" />
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Darshan Date</label>
                    <input required name="travelDate" value={formData.travelDate} onChange={handleInputChange} type="date" className="w-full p-4 bg-orange-50 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-sm text-slate-800" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase text-center block">Adults</label>
                    <input name="adults" value={formData.adults} onChange={handleInputChange} type="number" className="w-full p-4 bg-orange-50 rounded-2xl text-center font-black text-lg border-b-2 border-orange-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase text-center block">Children</label>
                    <input name="children" value={formData.children} onChange={handleInputChange} type="number" className="w-full p-4 bg-orange-50 rounded-2xl text-center font-black text-lg border-b-2 border-orange-200" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-orange-200 mt-6">
                  <Send size={20} /> Request Call Back
                </button>

                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex gap-3 mt-4 items-center justify-center">
                  <Info className="text-orange-500 shrink-0" size={16} />
                  <p className="text-[10px] text-orange-800 font-bold uppercase tracking-widest text-center">
                    Direct Contact with Tour Captain
                  </p>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualCard;