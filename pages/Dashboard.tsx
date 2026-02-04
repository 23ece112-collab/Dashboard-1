
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Dashboard: React.FC = () => {
  const { toggleSidebar, isDarkMode, toggleDarkMode } = useAppContext();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen">
      {/* Sidebar is now managed by AppShell for persistent mounting */}
      <div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">
        <header className="flex flex-wrap items-center justify-between mb-8 gap-6">
          <div className="flex items-center gap-6">
            <div 
              className="bg-card-light dark:bg-card-dark p-3 rounded-2xl shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              onClick={toggleSidebar}
            >
              <span className="material-icons-outlined text-slate-500">menu</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-lg">№</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg leading-tight">Financial</h1>
                <p className="text-slate-400 text-sm">Dashboard</p>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl relative hidden lg:flex items-center gap-4">
            <div className="relative flex-1">
              <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full bg-card-light dark:bg-card-dark border-none rounded-full py-3 pl-12 pr-6 focus:ring-2 focus:ring-primary/20 text-sm shadow-sm" 
                placeholder="Start searching here..." 
                type="text"
              />
            </div>
            <button className="p-3 bg-card-light dark:bg-card-dark rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center">
              <span className="material-icons-outlined text-slate-500">share</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 bg-card-light dark:bg-card-dark p-2 pl-4 pr-2 rounded-full shadow-sm">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition relative">
                <span className="material-symbols-outlined text-slate-500">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-card-dark"></span>
              </button>
              <div className="h-8 w-px bg-slate-100 dark:bg-slate-800"></div>
              <div className="hidden md:flex flex-col text-right ml-1">
                <span className="font-bold text-sm">Dwayne Tatum</span>
                <span className="text-slate-400 text-xs">CEO Assistant</span>
              </div>
              <img alt="User Profile" className="w-10 h-10 rounded-full object-cover" src="https://picsum.photos/40/40?random=10" />
              <button className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition shadow-lg shadow-primary/20">
                <span className="material-icons-outlined">add</span>
              </button>
            </div>
            <button 
              className="p-3 bg-card-light dark:bg-card-dark rounded-full shadow-sm border border-transparent hover:border-primary/20 transition-all flex items-center justify-center" 
              onClick={toggleDarkMode}
            >
              <span className={`material-icons-outlined ${isDarkMode ? 'hidden' : 'block'} text-slate-500`}>dark_mode</span>
              <span className={`material-icons-outlined ${!isDarkMode ? 'hidden' : 'block'} text-slate-300`}>light_mode</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="bg-card-light dark:bg-card-dark w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-sm">
              <span className="text-2xl font-bold">19</span>
            </div>
            <div>
              <p className="text-slate-500 font-medium">Tue, December</p>
              <div className="flex items-center gap-2 mt-2">
                <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition">
                  Show my Tasks <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
                <button className="bg-card-light dark:bg-card-dark p-2.5 rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                  <span className="material-icons-outlined text-slate-500">calendar_today</span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-1">Hey, Need help? 👋</h2>
            <div className="relative max-w-lg">
              <input className="w-full bg-transparent border-none text-2xl font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-0 p-0" placeholder="Just ask me anything!" type="text"/>
              <div className="absolute -left-4 top-0 h-full w-1 bg-slate-200 dark:bg-slate-800"></div>
            </div>
          </div>
          <div className="lg:col-span-2 flex items-center justify-end">
            <button className="bg-card-light dark:bg-card-dark w-16 h-16 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition">
              <span className="material-icons-outlined text-slate-500 text-3xl">mic</span>
            </button>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-4 bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold tracking-widest text-lg">VISA</span>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-full text-xs py-1 px-4 focus:ring-0">
                <option>Direct Debits</option>
              </select>
            </div>
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-1">Linked to main account</p>
              <p className="text-xl font-bold tracking-[0.2em]">**** 2719</p>
            </div>
            <div className="flex gap-2 mb-8">
              <button className="flex-1 bg-black dark:bg-white text-white dark:text-black py-3 rounded-full font-medium">Receive</button>
              <button className="flex-1 bg-slate-100 dark:bg-slate-800 py-3 rounded-full font-medium">Send</button>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-slate-400 text-xs mb-1">Monthly regular fee</p>
                <p className="text-xl font-bold text-primary">$ 25.00</p>
              </div>
              <button className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-icons-outlined text-sm">edit</span>
                Edit cards limitation
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="material-icons-outlined text-slate-400">history</span>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-full text-[10px] py-1 px-3">
                  <option>Weekly</option>
                </select>
              </div>
              <p className="text-slate-400 text-sm mb-1">Total income</p>
              <p className="text-2xl font-bold text-primary">$ 23,194.80</p>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="material-icons-outlined text-slate-400">payments</span>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-full text-[10px] py-1 px-3">
                  <option>Weekly</option>
                </select>
              </div>
              <p className="text-slate-400 text-sm mb-1">Total paid</p>
              <p className="text-2xl font-bold text-primary">$ 8,145.20</p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center flex-1">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-3">
                <span className="material-icons-outlined text-slate-500">lock</span>
              </div>
              <p className="text-xs font-bold">System Lock</p>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center flex-1 relative overflow-hidden">
              <div className="w-24 h-24 rounded-full border-8 border-slate-100 dark:border-slate-800 flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle className="text-black dark:text-white" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="160.7" strokeWidth="8"></circle>
                </svg>
                <div className="text-center">
                  <p className="text-lg font-bold">36%</p>
                  <p className="text-[8px] text-slate-400">Growth rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-icons-outlined text-slate-400 text-sm">schedule</span>
                <span className="text-xs font-bold">13 Days</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-4">109 hours, 23 minutes</p>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(7)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>)}
                {[...Array(7)].map((_, i) => <div key={i+7} className="w-2 h-2 rounded-full bg-primary/40"></div>)}
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="material-icons-outlined text-slate-400">bar_chart</span>
                <div className="text-right">
                  <p className="text-xs text-slate-400">2023</p>
                  <div className="w-px h-8 bg-primary/50 mx-auto mt-1"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <h3 className="font-bold text-sm">Main Stocks</h3>
                    <p className="text-[10px] text-slate-400">Extended & Limited</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-xs">$ 16,073.49</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Charts & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-3 bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold">Annual profits</h3>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-full text-[10px] py-1 px-3">
                <option>2023</option>
              </select>
            </div>
            <div className="relative h-64 flex items-center justify-center">
              <div className="concentric-circle w-56 h-56 bg-primary/5">
                <div className="concentric-circle w-44 h-44 bg-primary/10">
                  <div className="concentric-circle w-32 h-32 bg-primary/20">
                    <div className="concentric-circle w-20 h-20 bg-primary shadow-lg shadow-primary/40">
                      <span className="text-white font-bold text-xs">$ 4K</span>
                    </div>
                    <span className="absolute top-12 text-[10px] font-bold text-primary">$ 6.8K</span>
                  </div>
                  <span className="absolute top-6 text-[10px] font-bold text-primary">$ 9.3K</span>
                </div>
                <span className="absolute top-0 text-[10px] font-bold text-primary">$ 14K</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h3 className="font-bold">Activity manager</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full"><span className="material-icons-outlined text-sm">more_vert</span></button>
                <button className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full"><span className="material-icons-outlined text-sm">filter_list</span></button>
                <button className="flex items-center gap-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-xs font-medium">
                  <span className="material-icons-outlined text-sm">tune</span> Filters
                </button>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <div className="relative flex-1">
                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-full py-2 pl-10 text-xs" placeholder="Search in activities..." type="text"/>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold flex items-center gap-2">Team <div className="w-1.5 h-1.5 rounded-full bg-primary"></div></button>
                <button className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold flex items-center gap-2">Insights <span className="material-icons-outlined text-[10px]">close</span></button>
                <button className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold flex items-center gap-2">Today <span className="material-icons-outlined text-[10px]">close</span></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-xl font-bold">$ 43.20</span>
                  <span className="text-[10px] text-slate-400 mt-1">USD</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  <div className="w-1 h-4 bg-primary/20 rounded-full"></div>
                  <div className="w-1 h-8 bg-primary/40 rounded-full"></div>
                  <div className="w-1 h-6 bg-primary/20 rounded-full"></div>
                  <div className="w-1 h-10 bg-primary rounded-full"></div>
                  <div className="w-1 h-5 bg-primary/20 rounded-full"></div>
                  <div className="w-1 h-9 bg-primary/60 rounded-full"></div>
                  <div className="w-1 h-4 bg-primary/20 rounded-full"></div>
                </div>
                <div className="flex justify-center gap-1 mt-4">
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-1 rounded-full bg-primary"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold">Business plans</span>
                  <span className="material-icons-outlined text-sm">more_vert</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center"><span className="material-icons-outlined text-[10px] text-primary">account_balance</span></div>
                      <span>Bank loans</span>
                    </div>
                    <span className="material-icons-outlined text-xs">keyboard_arrow_down</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center"><span className="material-icons-outlined text-[10px] text-primary">analytics</span></div>
                      <span>Accounting</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center"><span className="material-icons-outlined text-[10px] text-primary">groups</span></div>
                      <span>HR management</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex flex-col items-center text-center">
                <div className="mb-2 text-primary">
                  <span className="material-icons-outlined text-3xl">wb_sunny</span>
                </div>
                <p className="text-[10px] font-bold mb-1">Wallet Verification</p>
                <p className="text-[8px] text-slate-400 mb-4">Enable 2-step verification to secure your wallet.</p>
                <button className="w-full bg-primary text-white py-2 rounded-lg text-[10px] font-bold">Enable</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                <div className="w-3 h-1.5 rounded-full bg-slate-800 dark:bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
              </div>
              <button className="p-1 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                <span className="material-icons-outlined text-sm">close</span>
              </button>
            </div>
            <div className="mb-auto">
              <p className="text-[10px] text-slate-400 mb-2">Review rating</p>
              <h3 className="text-xl font-bold leading-tight">How is your business management going?</h3>
            </div>
            <div className="flex justify-between mt-8">
              {['C', 'B', '_', ')', 'U'].map((char, i) => (
                <button key={i} className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition">{char}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Performance Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-8 bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap justify-between items-end mb-10">
              <div>
                <h3 className="text-2xl font-bold mb-1">Financial Performance</h3>
                <p className="text-slate-400 text-sm">Compare revenue vs expenses for this year</p>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-xs font-medium uppercase tracking-wider">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium uppercase tracking-wider">Expenses</span>
                </div>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-full text-xs py-2 px-4 focus:ring-0 ml-4 font-bold cursor-pointer">
                  <option>Year 2023</option>
                </select>
              </div>
            </div>
            <div className="relative h-[320px] w-full mt-4 flex items-end justify-between gap-4">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                {[...Array(5)].map((_, i) => <div key={i} className="border-t border-slate-400 w-full h-px"></div>)}
              </div>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, i) => (
                <div key={month} className="relative z-10 flex-1 flex flex-col items-center group">
                  <div className="flex gap-1.5 items-end h-full w-full justify-center">
                    <div className="chart-bar w-3 bg-black dark:bg-white group-hover:opacity-80" style={{ height: `${[60, 75, 90, 45, 80, 100, 65, 85][i]}%` }}></div>
                    <div className="chart-bar w-3 bg-primary group-hover:opacity-80" style={{ height: `${[40, 35, 55, 65, 30, 45, 50, 40][i]}%` }}></div>
                  </div>
                  <span className="text-[10px] font-bold mt-4 text-slate-400 uppercase tracking-tighter">{month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-8">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group hover:bg-primary hover:text-white transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-card-dark rounded-xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Invoicing</p>
                    <p className="text-[10px] opacity-60">Create & manage bills</p>
                  </div>
                </div>
                <span className="material-icons-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group hover:bg-primary hover:text-white transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-card-dark rounded-xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Tax Reports</p>
                    <p className="text-[10px] opacity-60">Quarterly filings ready</p>
                  </div>
                </div>
                <span className="material-icons-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group hover:bg-primary hover:text-white transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-card-dark rounded-xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Payroll</p>
                    <p className="text-[10px] opacity-60">12 Pending payments</p>
                  </div>
                </div>
                <span className="material-icons-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
            </div>
            <div className="mt-12 bg-black dark:bg-white text-white dark:text-black p-6 rounded-2xl">
              <p className="text-xs opacity-60 mb-2">Total Managed Capital</p>
              <h4 className="text-2xl font-bold">$1.2M</h4>
              <div className="mt-4 flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-black dark:border-white bg-slate-200"></div>
                <div className="w-8 h-8 rounded-full border-2 border-black dark:border-white bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-black dark:border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold">+12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History Table */}
        <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 mb-12">
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <h3 className="text-2xl font-bold">Transaction History</h3>
            <div className="flex gap-2">
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition">Download CSV</button>
              <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-80 transition">Recent Only</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-100 dark:border-slate-800">
                  <th className="pb-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Date</th>
                  <th className="pb-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Recipient/Sender</th>
                  <th className="pb-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Category</th>
                  <th className="pb-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="pb-4 text-right text-slate-400 text-xs font-medium uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {[
                  { date: 'Dec 19, 2023', name: 'Amazon Web Services', category: 'Cloud Services', status: 'Completed', amount: '-$ 1,240.00', icon: 'store' },
                  { date: 'Dec 18, 2023', name: 'Sarah Jenkins', category: 'Dividend', status: 'Completed', amount: '+$ 4,500.00', icon: 'person', primary: true },
                  { date: 'Dec 17, 2023', name: 'Upwork Escrow', category: 'Consulting', status: 'Pending', amount: '-$ 850.00', icon: 'work', warning: true },
                  { date: 'Dec 15, 2023', name: 'Central Properties', category: 'Rent', status: 'Completed', amount: '-$ 2,800.00', icon: 'apartment' }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="py-6 text-sm font-medium">{row.date}</td>
                    <td className="py-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center ${row.primary ? 'text-primary' : ''}`}>
                          <span className="material-icons-outlined text-sm">{row.icon}</span>
                        </div>
                        <span className="text-sm font-bold">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className={`px-3 py-1 ${row.primary ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'} rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${row.warning ? 'bg-orange-400' : 'bg-green-500'}`}></div>
                        <span className="text-xs font-medium">{row.status}</span>
                      </div>
                    </td>
                    <td className={`py-6 text-right font-bold text-sm ${row.primary ? 'text-primary' : ''}`}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">
              View All Transactions <span className="material-icons-outlined text-sm">south</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-50">
        <div className="bg-black text-white dark:bg-white dark:text-black rounded-full px-8 py-4 flex gap-8 shadow-2xl">
          <span className="material-icons-outlined cursor-pointer" onClick={toggleSidebar}>menu</span>
          <span className="material-icons-outlined cursor-pointer">account_balance_wallet</span>
          <span className="material-icons-outlined cursor-pointer">bar_chart</span>
          <span className="material-icons-outlined cursor-pointer">person</span>
        </div>
      </div>

      {/* Desktop Floating Actions */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 bg-card-light dark:bg-card-dark p-3 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 z-40">
        <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition text-slate-400 hover:text-primary">
          <span className="material-icons-outlined">add</span>
        </button>
        <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition text-slate-400 hover:text-primary">
          <span className="material-icons-outlined">share</span>
        </button>
        <div className="h-px w-6 bg-slate-100 dark:bg-slate-800 mx-auto"></div>
        <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition text-slate-400 hover:text-primary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
