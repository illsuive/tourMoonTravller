import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Users, ArrowRight, ShieldCheck, Star, Compass, Award, Plane, Sprout } from 'lucide-react';
import homePagePhoto from '../resourse/ScreenPhoto/HomPagePhoto.jpeg';
import river from '../resourse/ScreenPhoto/river.jpeg';
import honeyMoon from '../resourse/ScreenPhoto/honeyMoon.jpeg';
import gropTour from '../resourse/ScreenPhoto/gropTour.jpeg';
import spritual from '../resourse/spritual.jpeg'
import interNational from '../resourse/interNational.jpeg'
// Import your new images for International and Spiritual here
// import internationalImg from '../resourse/ScreenPhoto/international.jpeg';
// import spiritualImg from '../resourse/ScreenPhoto/spiritual.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src={homePagePhoto} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Himalayas"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block border border-white/30">
            Adventure Awaits
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            EXPLORE THE <span className="text-blue-500">UNSEEN.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
            From the romantic peaks of Manali to the rugged trails of Spiti, we craft journeys that stay with you forever.
          </p>
          
          <div className="flex justify-center">
            <Link to="/packages" className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/40 active:scale-95">
              love the nature <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Intro / About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={homePagePhoto} className="rounded-3xl h-64 w-full object-cover mt-8 shadow-lg" alt="Manali" />
              <img src={river} className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Leh" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block text-center">
              <p className="text-4xl font-black text-blue-600">5k+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Travellers</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <Compass size={20} /> Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              We Don't Just Plan Trips, We <span className="text-blue-600">Craft Memories.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Founded by <strong>Aman Thakur</strong>, Moon Traveller began with a simple mission: to provide authentic Himalayan experiences that go beyond the typical tourist trails. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Based in the heart of the mountains, our local expertise allows us to provide exclusive access to hidden valleys and premium stays. Whether it's a honeymoon or a soul-searching trip, we are your local companions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl font-black text-slate-900">Pick Your Style</h2>
            <p className="text-slate-500 font-medium">Choose from our handcrafted travel categories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Honeymoon */}
          <Link to="/honeymoon" className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
            <img src={honeyMoon} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Honeymoon" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <Heart className="text-rose-400 mb-4 fill-rose-400" size={32} />
              <h2 className="text-3xl font-black mb-2 tracking-tight">Honeymoon Specials</h2>
              <p className="text-rose-100/80 font-medium">Romantic suites & candlelit dinners.</p>
            </div>
          </Link>

          {/* Group Tours */}
          <Link to="/group-tours" className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
            <img src={gropTour} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Group Tours" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <Users className="text-blue-400 mb-4" size={32} />
              <h2 className="text-3xl font-black mb-2 tracking-tight">Group Expeditions</h2>
              <p className="text-blue-100/80 font-medium">Adventure with a community of travelers.</p>
            </div>
          </Link>

          {/* International */}
          <Link to="/international" className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
            <img src={interNational} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="International" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <Plane className="text-cyan-400 mb-4" size={32} />
              <h2 className="text-3xl font-black mb-2 tracking-tight">International Escapes</h2>
              <p className="text-cyan-100/80 font-medium">Explore Bali, Maldives, and beyond.</p>
            </div>
          </Link>

          {/* Spiritual */}
          <Link to="/spiritual" className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
            <img src={spritual} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Spiritual" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <Sprout className="text-orange-400 mb-4" size={32} />
              <h2 className="text-3xl font-black mb-2 tracking-tight">Sacred Spiritual</h2>
              <p className="text-orange-100/80 font-medium">Inner peace & divine pilgrimages.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why Book With Us?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <ShieldCheck size={40} className="text-blue-600 mx-auto mb-4" />, title: "Verified Hotels", desc: "We hand-pick every hotel to ensure premium quality and safety." },
              { icon: <Star size={40} className="text-blue-600 mx-auto mb-4" />, title: "Best Price", desc: "Direct tie-ups with Volvo and hotels for the most competitive rates." },
              { icon: <Award size={40} className="text-blue-600 mx-auto mb-4" />, title: "Trusted Brand", desc: "Moon Traveller is synonymous with reliability and mountain expertise." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
