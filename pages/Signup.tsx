
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16 lg:p-20 justify-between bg-white overflow-y-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">№</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight">Financial</h1>
            <p className="text-slate-400 text-sm">Dashboard</p>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto py-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Create an account</h2>
            <p className="text-slate-500">Join thousands of users managing their wealth better.</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="fullname">Full Name</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-900 placeholder:text-slate-400" id="fullname" name="fullname" placeholder="John Doe" type="text" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">Email Address</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-900 placeholder:text-slate-400" id="email" name="email" placeholder="name@company.com" type="email" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password">Password</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-900 placeholder:text-slate-400" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  required 
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex gap-1">
                  <div className="h-1 w-full bg-primary rounded-full"></div>
                  <div className="h-1 w-full bg-primary rounded-full"></div>
                  <div className="h-1 w-full bg-slate-200 rounded-full"></div>
                  <div className="h-1 w-full bg-slate-200 rounded-full"></div>
                </div>
                <p className="text-xs text-slate-400">Password strength: <span className="text-slate-600 font-medium">Medium</span></p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-900 placeholder:text-slate-400" 
                  id="confirm-password" 
                  name="confirm-password" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  required 
                />
              </div>
            </div>
            <div className="flex items-start pt-2">
              <div className="flex items-center h-5">
                <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20 cursor-pointer" id="terms" name="terms" type="checkbox" required />
              </div>
              <label className="ml-2 block text-sm text-slate-600 cursor-pointer" htmlFor="terms">
                I agree to the <a className="text-primary hover:underline font-medium" href="#">Terms of Service</a> and <a className="text-primary hover:underline font-medium" href="#">Privacy Policy</a>
              </label>
            </div>
            <button className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]" type="submit">
              Create Account
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-slate-500">
              Already have an account? 
              <Link to="/login" className="text-primary font-bold hover:underline ml-1">Sign In</Link>
            </p>
          </div>
        </div>

        <div className="text-slate-400 text-xs flex justify-between">
          <p>© 2026 Financial Dashboard Inc.</p>
          <div className="flex gap-4">
            <a className="hover:text-slate-600" href="#">Privacy Policy</a>
            <a className="hover:text-slate-600" href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-50 items-center justify-center p-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,107,78,0.15),transparent),radial-gradient(circle_at_bottom_left,rgba(232,107,78,0.05),transparent)] bg-[#fcfcfc]"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-lg text-center">
          <div className="mb-12 inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl shadow-slate-200/50">
            <span className="material-symbols-outlined text-primary text-5xl">shield_with_heart</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Manage your finances with ease</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Experience the next generation of financial management. Secure, intuitive, and designed to help you grow your wealth with confidence.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white text-left">
              <span className="material-symbols-outlined text-primary mb-2">analytics</span>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Deep Analytics</h3>
              <p className="text-xs text-slate-500 mt-1">Real-time insights on your spending habits.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white text-left">
              <span className="material-symbols-outlined text-primary mb-2">verified_user</span>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Bank Security</h3>
              <p className="text-xs text-slate-500 mt-1">Multi-layer encryption for your peace of mind.</p>
            </div>
          </div>
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-2">
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/40/40?random=4" />
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/40/40?random=5" />
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/40/40?random=6" />
              </div>
              <p className="text-sm font-medium text-slate-500">Trusted by 10k+ professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
