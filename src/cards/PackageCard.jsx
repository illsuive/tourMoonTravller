import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Calendar, Bed, Utensils, Bus, 
  Info, User, Send, ArrowLeft, ShieldCheck, Globe, MapPin, Sparkles
} from 'lucide-react';
import { updateUserDetails, initiateBooking } from '../store/slices/BookingSlice.js';

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pkg = useSelector((state) => 
    state.allPackages?.items?.find((item) => item.id === id)
  );

  const { userDetails } = useSelector((state) => state.booking || { userDetails: {} });

  useEffect(() => {
    if (pkg) {
      dispatch(initiateBooking(pkg));
    }
  }, [pkg, dispatch]);

  if (!pkg) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <div className="animate-pulse text-slate-300 mb-4"><Globe size={48} /></div>
        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Expedition Not Found</p>
        <button onClick={() => navigate(-1)} className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest">Go Back</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserDetails({ [name]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `*CUSTOM PACKAGE ENQUIRY*%0a` +
                    `--------------------------%0a` +
                    `*Plan:* ${pkg.title}%0a` +
                    `*Price:* ${pkg.price}%0a` +
                    `--------------------------%0a` +
                    `*Traveler:* ${userDetails?.name || 'N/A'}%0a` +
                    `*WhatsApp:* ${userDetails?.phone || 'N/A'}%0a` +
                    `*Travel Date:* ${userDetails?.travelDate || 'N/A'}%0a` +
                    `*Group:* ${userDetails?.adults || 0} Adults, ${userDetails?.children || 0} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Dynamic Hero Header */}
      <div className="bg-white border-b border-slate-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-black text-[10px] uppercase tracking-[0.3em] mb-8">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Explore
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">
                <Sparkles size={14} /> {pkg.tag || 'Moon Traveller Exclusive'}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                {pkg.title}
              </h1>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-bold text-xs">
                  <MapPin size={14} /> Multiple Locations
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-bold text-xs">
                  <Calendar size={14} /> {pkg.duration}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Quick Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Bus />, label: "Transport", val: "Pvt Vehicle" },
              { icon: <Utensils />, label: "Meal Plan", val: "Breakfast & Dinner" },
              { icon: <Bed />, label: "Lodging", val: "Boutique Stays" },
              { icon: <ShieldCheck />, label: "Assistance", val: "24/7 Support" }
            ].map((spec, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3">{spec.icon}</div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{spec.label}</p>
                <p className="font-bold text-slate-900 text-sm">{spec.val}</p>
              </div>
            ))}
          </div>

          {/* Itinerary Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">The Itinerary</h2>
              <div className="h-px flex-grow bg-slate-200" />
            </div>
            
            <div className="space-y-6">
              {pkg.itinerary?.map((item, idx) => (
                <div key={idx} className="group flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-100 text-slate-900 flex items-center justify-center font-black text-sm group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="w-px h-full bg-slate-200 group-last:bg-transparent my-2" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title || `Day ${idx + 1}`}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">
                      {item.desc || item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: High-End Form */}
        <div className="lg:col-span-4">
          <div className="sticky top-12 bg-slate-900 rounded-[3rem] p-1 shadow-3xl overflow-hidden">
            <div className="p-10 pb-6">
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Estimated Package Total</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-black text-white tracking-tighter">{pkg.price}</h3>
                <span className="text-slate-500 text-xs font-bold">/ person</span>
              </div>
            </div>

            <form onSubmit={handleWhatsApp} className="bg-white rounded-[2.8rem] p-10 space-y-5">
              
              {/* Fixed Package Label */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Enquiry For</label>
                <div className="relative">
                  <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-600" size={16} />
                  <input readOnly value={pkg.title} className="w-full pl-14 p-5 bg-blue-50/50 border border-blue-100 rounded-3xl font-black text-xs text-blue-700 uppercase tracking-tighter" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input required name="name" value={userDetails?.name || ''} onChange={handleInputChange} type="text" placeholder="John Doe" className="w-full pl-14 p-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">WhatsApp</label>
                  <input required name="phone" value={userDetails?.phone || ''} onChange={handleInputChange} type="tel" placeholder="+91" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Travel Date</label>
                  <input required name="travelDate" value={userDetails?.travelDate || ''} onChange={handleInputChange} type="date" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-3xl text-center border border-slate-100">
                  <label className="text-[9px] font-black text-slate-400 uppercase block mb-1">Adults</label>
                  <input required name="adults" value={userDetails?.adults || 2} onChange={handleInputChange} type="number" min="1" className="bg-transparent text-xl font-black text-slate-900 w-full text-center outline-none" />
                </div>
                <div className="p-4 bg-slate-50 rounded-3xl text-center border border-slate-100">
                  <label className="text-[9px] font-black text-slate-400 uppercase block mb-1">Children</label>
                  <input name="children" value={userDetails?.children || 0} onChange={handleInputChange} type="number" min="0" className="bg-transparent text-xl font-black text-slate-900 w-full text-center outline-none" />
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-6 rounded-3xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-2xl shadow-blue-200 mt-4 group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                <span className="uppercase tracking-[0.2em] text-xs">Request Quotation</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-2">
                <Info size={14} className="text-orange-500" />
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Fastest response via WhatsApp</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;