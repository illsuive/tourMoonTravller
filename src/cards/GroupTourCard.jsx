import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Users, Clock, Calendar, CheckCircle2, 
  ArrowLeft, Send, Zap, User, Info, MapPin, 
  ShieldCheck, Share2, Heart, Globe
} from 'lucide-react';
import { initiateBooking, updateUserDetails } from '../store/slices/BookingSlice.js';

const GroupTourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tour = useSelector((state) => 
    state.groupTours?.items?.find((item) => item.id === id)
  );

  const { userDetails } = useSelector((state) => state.booking || { userDetails: {} });

  useEffect(() => {
    if (tour) {
      dispatch(initiateBooking(tour));
    }
  }, [tour, dispatch]);

  if (!tour) return <div className="py-20 text-center font-black text-slate-400 uppercase tracking-widest">Expedition Not Found</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserDetails({ [name]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    // Fixed: Including the tour title explicitly in the message
    const message = `*GROUP EXPEDITION ENQUIRY*%0a` +
                    `--------------------------%0a` +
                    `*Selected Package:* ${tour.title}%0a` +
                    `*Batch:* ${tour.nextBatch}%0a` +
                    `*Price:* ${tour.price}%0a` +
                    `--------------------------%0a` +
                    `*Traveler:* ${userDetails?.name || 'N/A'}%0a` +
                    `*Phone:* ${userDetails?.phone || 'N/A'}%0a` +
                    `*Travel Date:* ${userDetails?.travelDate || 'N/A'}%0a` +
                    `*Adults:* ${userDetails?.adults || 1}`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fcfcfc]" />
        
        <div className="absolute top-8 left-0 right-0 px-8 flex justify-between items-center max-w-7xl mx-auto w-full">
          <button onClick={() => navigate(-1)} className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl text-white hover:bg-white hover:text-black transition-all">
            <ArrowLeft size={20} />
          </button>
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-4">
            <span className="w-fit bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full shadow-xl">
              {tour.tag || "Limited Batch"}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              {tour.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
        
        {/* Left Section: Highlights & Itinerary */}
        <div className="lg:col-span-8 space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-1.5 bg-blue-600 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Batch Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Professional Captain', 'Verified Community', 'Premium Transportation', 'Shared Accomodation'].map((perk) => (
                <div key={perk} className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                  <span className="text-slate-800 font-black text-sm uppercase tracking-wide">{perk}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-1.5 bg-blue-600 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">The Journey</h2>
            </div>
            <div className="space-y-4">
              {tour.itinerary?.map((item, idx) => (
                <div key={idx} className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xs group-hover:bg-blue-600 transition-colors">
                        0{idx + 1}
                    </div>
                    <div className="w-0.5 h-full bg-slate-100 group-last:bg-transparent my-2" />
                  </div>
                  <div className="flex-1 pb-10">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 group-hover:shadow-2xl transition-all">
                        <h3 className="font-black text-slate-900 text-xl mb-3">{item.day}</h3>
                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Form */}
        <div className="lg:col-span-4">
          <div className="sticky top-12 bg-slate-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 text-white p-8 pb-4">
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1 text-center">Enquiry For</p>
              <h3 className="text-xl font-black text-center uppercase tracking-tight line-clamp-1">{tour.title}</h3>
            </div>

            <form onSubmit={handleWhatsApp} className="bg-white rounded-[2.8rem] p-8 space-y-5">
                
                {/* Fixed Package Name Input (Read Only) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Selected Expedition</label>
                  <div className="relative">
                    <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
                    <input 
                      readOnly 
                      value={tour.title} 
                      className="w-full pl-14 p-5 bg-blue-50 border border-blue-100 rounded-3xl font-black text-sm text-blue-700 cursor-not-allowed" 
                    />
                  </div>
                </div>

                {/* User Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input required name="name" value={userDetails?.name || ''} onChange={handleInputChange} type="text" placeholder="Your Name" className="w-full pl-14 p-5 bg-slate-50 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4">WhatsApp No</label>
                    <input required name="phone" value={userDetails?.phone || ''} onChange={handleInputChange} type="tel" placeholder="+91" className="w-full p-5 bg-slate-50 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-4">Preferred Date</label>
                    <input required name="travelDate" value={userDetails?.travelDate || ''} onChange={handleInputChange} type="date" className="w-full p-5 bg-slate-50 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-sm" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-6 rounded-3xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-500/20 mt-4 group">
                  <Send size={18} /> 
                  <span className="uppercase tracking-widest text-xs">Confirm {tour.price}</span>
                </button>

                <div className="flex items-center justify-center gap-2 py-2">
                    <ShieldCheck size={14} className="text-blue-600" />
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Secure Reservation</p>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupTourDetails;