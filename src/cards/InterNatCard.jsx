import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Heart, Clock, MapPin, CheckCircle2, ArrowLeft, 
  Utensils, Sparkles, Camera, Send, User, Info, Plane, Globe, Calendar
} from 'lucide-react';
import { setSelectedInternational } from '../store/slices/InterNational.js'; // Adjust path

const InternationalCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Get package from International Slice
  const pkg = useSelector((state) => 
    state.international?.items?.find((item) => item.id === id)
  );

  // 2. Local State for Form (or use your BookingSlice if connected)
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    travelDate: '',
    adults: 2,
    children: 0
  });

  useEffect(() => {
    if (pkg) {
      dispatch(setSelectedInternational(pkg));
    }
  }, [pkg, dispatch]);

  if (!pkg) return <div className="py-20 text-center font-bold text-slate-400">Package not found!</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    // Constructing a detailed message for International Enquiry
    const message = `*INTERNATIONAL ESCAPE ENQUIRY*%0a` +
                    `--------------------------%0a` +
                    `*Destination:* ${pkg.title}%0a` +
                    `*Price:* ${pkg.price}%0a` +
                    `--------------------------%0a` +
                    `*Traveler:* ${formData.name || 'N/A'}%0a` +
                    `*WhatsApp:* ${formData.phone || 'N/A'}%0a` +
                    `*Travel Date:* ${formData.travelDate || 'N/A'}%0a` +
                    `*Travelers:* ${formData.adults} Adults, ${formData.children} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover" 
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <button 
            onClick={() => navigate(-1)} 
            className="absolute top-8 left-8 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all z-10"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="absolute bottom-12 left-8 right-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                {pkg.tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">{pkg.title}</h1>
          <div className="flex flex-wrap gap-6 mt-6 text-blue-100 font-bold text-sm">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"><Clock size={18}/> {pkg.duration}</span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"><Globe size={18}/> Global Experience</span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"><Heart size={18}/> Honeymoon Special</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        
        {/* Left Section: Info & Itinerary */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* About */}
          <section>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Experience Overview</h2>
            <p className="text-slate-500 text-lg leading-relaxed">{pkg.description}</p>
          </section>

          {/* Perks / Inclusions */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Sparkles size={28} className="text-blue-600" /> Exclusive Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pkg.perks?.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-3xl border border-blue-100/50 text-slate-800 font-bold text-sm">
                  <div className="bg-white p-2 rounded-xl shadow-sm text-blue-600">
                    <CheckCircle2 size={20} />
                  </div>
                  {perk}
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-slate-900">Your Journey</h2>
                <span className="text-blue-600 font-black text-sm uppercase tracking-widest">Full Itinerary</span>
            </div>
            <div className="space-y-8">
              {pkg.itinerary?.map((item, idx) => (
                <div key={idx} className="group relative pl-12 border-l-2 border-slate-100 hover:border-blue-600 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rounded-full border-2 border-slate-300 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all shadow-sm" />
                  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                    <span className="font-black text-blue-600 text-xs uppercase tracking-widest block mb-2">{item.day}</span>
                    <p className="text-slate-700 font-bold text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Section: Sticky Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-slate-900 rounded-[3rem] p-8 shadow-2xl text-white">
            <div className="mb-8 p-6 bg-white/5 rounded-[2rem] border border-white/10">
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Starting from</p>
              <h3 className="text-4xl font-black text-white">{pkg.price}</h3>
              <p className="text-slate-400 text-xs mt-2 font-medium italic">*Pricing varies based on season</p>
            </div>

            <form onSubmit={handleWhatsApp} className="space-y-5">
                 <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Plan Name</label>
                  <div className="relative">
                    {/* <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} /> */}
                    <input 
                        required 
                        
                        value={pkg.title} 
                        disabled={true} 
                        type="text" 
                        // placeholder="Traveler Name" 
                        className="w-full pl-14 p-5 bg-white/5 border border-white/10 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm text-white placeholder:text-slate-600" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input 
                        required 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="Traveler Name" 
                        className="w-full pl-14 p-5 bg-white/5 border border-white/10 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm text-white placeholder:text-slate-600" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4">WhatsApp No.</label>
                    <input 
                        required 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        type="tel" 
                        placeholder="+91" 
                        className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm text-white placeholder:text-slate-600" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Expected Date</label>
                    <input 
                        required 
                        name="travelDate" 
                        value={formData.travelDate} 
                        onChange={handleInputChange} 
                        type="date" 
                        className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm text-white" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4 text-center block">Adults</label>
                    <input 
                        name="adults" 
                        value={formData.adults} 
                        onChange={handleInputChange} 
                        type="number" 
                        className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl text-center font-black text-lg" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4 text-center block">Children</label>
                    <input 
                        name="children" 
                        value={formData.children} 
                        onChange={handleInputChange} 
                        type="number" 
                        className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl text-center font-black text-lg" 
                    />
                  </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-white hover:text-slate-900 text-white font-black py-6 rounded-3xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl shadow-blue-500/20 mt-6"
                >
                  <Send size={20} /> Reserve My Spot
                </button>

                <div className="p-4 flex gap-3 mt-4 items-center justify-center">
                  <Info className="text-blue-400 shrink-0" size={16} />
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Response within 2 hours
                  </p>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalCard;
