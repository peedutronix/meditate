import Link from "next/link";
import { Wind, ArrowRight } from "lucide-react";
import { login } from "@/app/auth/actions";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden font-sans">
            {/* Dynamic Background Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-start px-8 py-6 w-full max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Wind className="w-8 h-8 text-teal-400" />
                    <span className="text-xl font-bold tracking-wider text-slate-100">Breathe<span className="text-teal-400">.</span></span>
                </Link>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 w-full max-w-md mx-auto">

                <div className="w-full bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-slate-100 mb-3">Welcome back</h1>
                        <p className="text-sm text-slate-400">Enter your details to sign in to your account.</p>
                    </div>

                    <form className="space-y-6" action={login}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@email.com"
                                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 text-slate-100 placeholder:text-slate-600 transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-slate-300">Password</label>
                                <Link href="#" className="text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors">Forgot password?</Link>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 text-slate-100 placeholder:text-slate-600 transition-all"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)] flex items-center justify-center gap-2 group mt-8"
                        >
                            Sign In
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 relative flex items-center justify-center">
                        <div className="absolute border-t border-slate-800 w-full"></div>
                        <span className="relative bg-slate-900 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Or continue with
                        </span>
                    </div>

                    <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-slate-800/80 rounded-xl text-sm font-medium text-slate-200 transition-all flex items-center justify-center gap-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>

                    <p className="mt-8 text-center text-sm text-slate-400">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
