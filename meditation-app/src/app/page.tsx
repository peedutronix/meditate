import Link from "next/link";
import { Play, Wind, Moon, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden font-sans">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Wind className="w-8 h-8 text-teal-400" />
          <span className="text-xl font-bold tracking-wider text-slate-100">Breathe<span className="text-teal-400">.</span></span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-teal-300 transition-colors">Log In</Link>
          <Link href="/login" className="text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-all">Sign Up</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto mt-12 mb-24">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8">
          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">New: Sleep Stories</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-100 via-slate-300 to-teal-200 mb-6 drop-shadow-sm">
          Find your inner peace in a noisy world.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          Daily meditation, sleep sounds, and mindful practices designed to help you reduce stress, sleep better, and live happier.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2 text-lg">
            Start Your Journey
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-200 font-semibold rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-2 text-lg group">
            <Play className="w-5 h-5 group-hover:text-teal-400 transition-colors" fill="currentColor" />
            Watch Preview
          </button>
        </div>

        {/* Floating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl">
          <div className="flex flex-col items-center p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:bg-slate-800/60 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-4 text-teal-400">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Morning Focus</h3>
            <p className="text-sm text-slate-400">Start your day with clarity and intention.</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:bg-slate-800/60 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Deep Sleep</h3>
            <p className="text-sm text-slate-400">Drift off naturally with soothing sounds.</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:bg-slate-800/60 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-4 text-rose-400">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Anxiety Relief</h3>
            <p className="text-sm text-slate-400">Reset your nervous system instantly.</p>
          </div>
        </div>

      </main>
    </div>
  );
}
