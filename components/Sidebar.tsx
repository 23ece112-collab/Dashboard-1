
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { isSidebarOpen, toggleSidebar, logout } = useAppContext();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex" id="sidebar-overlay">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleSidebar}></div>
      <aside className="w-80 h-full bg-white dark:bg-card-dark shadow-2xl flex flex-col p-8 transition-transform transform translate-x-0 relative">
        <button 
          className="absolute right-6 top-8 p-2 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-slate-100 transition-colors" 
          onClick={toggleSidebar}
        >
          <span className="material-icons-outlined text-slate-500 text-xl">close</span>
        </button>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-lg">№</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Financial</h1>
            <p className="text-slate-400 text-sm">Dashboard</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Menu</p>
          <Link to="/dashboard" className="flex items-center gap-4 px-4 py-3 bg-primary/10 text-primary rounded-2xl group font-semibold" onClick={toggleSidebar}>
            <span className="material-symbols-outlined">grid_view</span>
            <span>Dashboard</span>
          </Link>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">account_balance</span>
            <span>Accounts</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">swap_horiz</span>
            <span>Transactions</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">analytics</span>
            <span>Analytics</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">description</span>
            <span>Reports</span>
          </a>
          <div className="h-px bg-slate-100 dark:bg-slate-800 my-8 mx-4"></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Support</p>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">settings</span>
            <span>Settings</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">help</span>
            <span>Help Center</span>
          </a>
        </nav>
        <div className="mt-auto pt-8">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-2xl transition-all group"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
