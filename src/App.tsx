import { useState, useEffect } from "react";
import {
  Search,
  Download,
  Github,
  Zap,
  Layout,
  Smartphone,
  Menu,
  X,
  Music,
  ShieldCheck,
  Layers,
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import appMockup from "./assets/image.png";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Global Search",
      desc: "Instant access to millions of tracks worldwide. No accounts, no boundaries.",
      icon: <Search size={22} />,
    },
    {
      title: "Smart Discovery",
      desc: "Find your next obsession with intelligent artist tagging and album navigation.",
      icon: <Music size={22} />,
    },
    {
      title: "Zero Interruptions",
      desc: "Pure audio focus. No ads, no tracking, just you and your favorite playlist.",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Premium Aesthetics",
      desc: "A minimalist cherry-themed UI designed for focus and modern music lovers.",
      icon: <Layout size={22} />,
    },
  ];

  const stats = [
    { label: "Latency", val: "<0.4s" },
    { label: "Artist Library", val: "10M+" },
    { label: "Audio Quality", val: "High-Fi" },
  ];

  return (
    <div className="landing-container" style={{ background: '#0A0A0A', color: '#fff', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/40 py-4 shadow-lg' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tighter">GROOVLI</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-medium hover:text-[#E8315B] transition-colors">Features</a>
            <a href="#experience" className="text-sm font-medium hover:text-[#E8315B] transition-colors">Experience</a>
            <a href="https://github.com/Shyamkano/groovli-app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#E8315B] transition-colors">GitHub</a>
            <a href="#download" className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">Get Started</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#E8315B] rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">Now Available</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 italic">
              MUSIC <br /> <span className="text-[#E8315B]">REIMAGINED.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-12 leading-relaxed font-medium">
              A high-performance music player built with React Native. Experience seamless streaming, dynamic lyrics, and beautiful minimalist UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Groovli%20app.apk" 
                download="Groovli app.apk" 
                className="group relative bg-[#E8315B] h-14 px-8 rounded-full flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(232,49,91,0.4)] hover:scale-105 transition-all"
              >
                <Download size={20} className="relative z-10" />
                <span className="font-bold relative z-10">Download APK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8315B] to-[#C0284C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/Shyamkano/groovli-app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-14 px-8 rounded-full border border-white/20 flex items-center justify-center gap-3 font-bold hover:bg-white/5 transition-all"
              >
                <Github size={20} />
                <span>View Source</span>
              </a>
            </div>

            <div className="flex items-center gap-8 mt-16">
              {stats.map((s, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-black">{s.val}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-[300px] md:w-[350px] aspect-[9/19.5] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[8px] border-zinc-900 bg-[#0A0A0A] group">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src={appMockup}
                  alt="Groovli App Interface"
                  className="w-full h-full rounded-[2rem] object-cover"
                />
              </div>

              {/* Floating Active Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 -right-6 md:-right-12 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Engine</span>
                </div>
                <div className="flex gap-6">
                  <div>
                    <div className="text-lg font-black text-white">60fps</div>
                    <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Performance</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <div className="text-lg font-black text-[#E8315B]">10M+</div>
                    <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Tracks</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E8315B]/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6">WHY <span className="text-[#E8315B]">GROOVLI?</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto font-medium">Simple yet powerful. We stripped away all the clutter of modern music apps to focus on what matters: the listening experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-14 h-14 bg-[#E8315B]/10 rounded-2xl flex items-center justify-center text-[#E8315B] mb-8 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">PERFORMANCE <br />IS THE PRIORITY.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E8315B]/20 flex items-center justify-center shrink-0">
                      <Zap size={20} className="text-[#E8315B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Instant Interaction</h4>
                      <p className="text-gray-500 text-sm">Optimized React Native state management ensure zero lag during navigation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E8315B]/20 flex items-center justify-center shrink-0">
                      <Smartphone size={20} className="text-[#E8315B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Cross-Device Focus</h4>
                      <p className="text-gray-500 text-sm">Adaptive layout that looks stunning on every Android handset.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "React Native", icon: <Smartphone size={24} /> },
                  { name: "Expo Core", icon: <Zap size={24} /> },
                  { name: "TypeScript", icon: <Code size={24} /> },
                  { name: "Lucide Icons", icon: <Layers size={24} /> }
                ].map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-video bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-2 group hover:bg-white/10 transition-colors"
                  >
                    <div className="text-white/40 group-hover:text-[#E8315B] transition-colors">{tech.icon}</div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8315B]/10 -rotate-12 blur-[100px] -z-0" />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer id="download" className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter italic">READY TO <span className="text-[#E8315B]">GROOVE?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
            <a 
              href="/Groovli%20app.apk"
              download="Groovli app.apk"
              className="h-16 px-12 rounded-full bg-[#E8315B] text-white font-black flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(232,49,91,0.3)]"
            >
              <Download size={22} />
              Grab the APK
            </a>
            <a 
              href="https://github.com/Shyamkano/groovli-app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-16 px-12 rounded-full border border-white/20 font-black flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
            >
              <Github size={22} />
              Contribute
            </a>
          </div>

          <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-xs font-bold tracking-widest uppercase">
            <div>© 2026 GROOVLI MUSIC PROJECT</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-[#E8315B]">Twitter</a>
              <a href="https://www.linkedin.com/in/shyamkano/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8315B]">LinkedIn</a>
              <a href="https://shyamkano-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8315B]">Portfolio</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-black p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-3">
                <span className="text-xl font-black italic">GROOVLI</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-10 text-4xl font-black">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="https://github.com/Shyamkano/groovli-app" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>GitHub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;
