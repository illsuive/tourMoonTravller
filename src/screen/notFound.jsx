import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Plane, Compass } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-20 overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-[120px] opacity-60" />

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* Animated Icon Container */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-blue-600/10 rounded-full animate-ping" />
          <div className="relative bg-white shadow-2xl shadow-blue-500/10 border border-slate-100 p-8 rounded-[3rem]">
            <Compass size={80} className="text-blue-600 animate-[spin_10s_linear_infinite]" />
          </div>
          
          {/* Floating Plane */}
          <div className="absolute -top-4 -right-4 bg-slate-900 text-white p-3 rounded-2xl shadow-xl animate-bounce">
            <Plane size={24} className="rotate-45" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-slate-900/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          404
        </h1>
        
        <div className="space-y-6 relative">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
            You've drifted <span className="text-blue-600">off course.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
            The destination you're looking for doesn't exist or has moved to a new coordinate. Let's get you back to the expedition.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button 
            onClick={() => navigate('/')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
          >
            <Home size={18} />
            Back to Base
          </button>
          
          <button 
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-sm hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95"
          >
            <ArrowLeft size={18} />
            Previous Coordinate
          </button>
        </div>

        {/* Footer Support */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Need help? Contact Aman Thakur Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;