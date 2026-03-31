import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Lightbulb, 
  Rocket,
  Quote,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  User,
  Mail,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Innovators', href: '#innovators' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="/images/explicit-logo.png" 
            alt="Explicit Logo" 
            className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="font-serif text-2xl font-bold tracking-tight">
            Explicitly<span className="text-her-gradient ml-1 pr-2">Her</span>
          </span>
        </a>
 
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-purple-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenModal}
            className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
          >
            Join Community
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              Join Community
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MosaicSection = () => {
  const images = [
    "/images/anna-mae-dote.jpg",
    "/images/anna-mae-dote-2.jpg",
    "/images/crisanchai-crisostomo.jpg",
    "/images/erica-daguplo.jpg",
    "/images/mikaela-madrid.jpg",
    "/images/shiela-mae-paigan.png",
    "/images/shiraine-marianne-bituin.jpg",
    "/images/shiraine-marianne-bituin-2.jpg",
    "/images/stephanie-de-villa.jpg",
    "/images/anna-mae-dote.jpg",
  ];

  return (
    <section className="relative py-16 filmstrip-section overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-iridescent opacity-5 pointer-events-none" />
      
      {/* Smoother transitions */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#f5f3ff] via-[#f5f3ff]/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#fdfcf8] via-[#fdfcf8]/80 to-transparent z-10" />
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 -rotate-12 scale-125 origin-center opacity-30">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="aspect-[2/3] overflow-hidden rounded-lg shadow-2xl border border-white/5"
          >
            <img 
              src={img} 
              alt="Woman in Tech" 
              className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="max-w-4xl px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          >
            "Explicitly Her: Building the Future, Redefining the Standard."
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

const FoundationSection = () => {
  return (
    <section className="py-16 foundation-section relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro Text Columns */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-4">Our Foundation</p>
            <p className="text-base leading-relaxed text-zinc-600">
              Explicitly Her was founded to achieve one mission—to empower women like you to live and thrive boldly and with purpose through a strategic combination of both technology and community.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-24 bg-purple-100 hidden md:block" />
            <div className="px-8 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-[0_0_20px_rgba(139,92,246,0.2)] border-2 border-purple-100 flex items-center justify-center p-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="/images/explicit-logo.png" 
                  alt="Explicitly Her" 
                  className="w-full h-full object-contain relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-px h-24 bg-purple-100 hidden md:block" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-4">Your Potential</p>
            <p className="text-base leading-relaxed text-zinc-600">
              You have unique, layered and rich life experience, and equally unique and layered dreams and passions. We seek to champion you as you marry your experience with your dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PowderSplash = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large soft glows */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{
            top: `${10 + i * 20}%`,
            left: `${-10 + i * 30}%`,
            background: i % 2 === 0 ? 'var(--color-iridescent-purple)' : 'var(--color-iridescent-pink)',
          }}
        />
      ))}

      {/* Splash particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          whileInView={{ 
            opacity: [0, 0.8, 0], 
            scale: [0, 1.5 + Math.random(), 0],
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 800,
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full blur-[2px]"
          style={{
            background: i % 3 === 0 ? '#fff' : i % 3 === 1 ? 'var(--color-iridescent-purple)' : 'var(--color-iridescent-pink)',
            boxShadow: '0 0 15px rgba(255,255,255,0.4)'
          }}
        />
      ))}
      
      {/* Wet powder clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{
            top: `${30 + (i * 15)}%`,
            left: `${20 + (i * 10)}%`,
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
          }}
        />
      ))}
    </div>
  );
};

const InnovatorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const risingInnovators = [
    {
      name: "Anna Mae Dote",
      photo: "/images/anna-mae-dote.jpg",
      question: "How have you navigated challenges or ‘broken the glass’ in your technical projects?",
      answer: "As of now that I am focusing in UI/UX Design for our Capstone, it is hard for me to meet the standard design or the output design that our client wants, because I have to consider also the capability of our programmer so that we can be able to present or develop a functional system for them."
    },
    {
      name: "Stephanie De Villa",
      photo: "/images/stephanie-de-villa.jpg",
      question: "What was the exact moment you realized you wanted to pursue technology?",
      answer: "My journey truly began when I joined the EXPLICIT organization as representative. It opened my eyes to the vast opportunities within the industry and provided hands-on experience that changed my perspective. I remember the immense satisfaction I felt when I started understanding how coding works in the real world. Although I initially worried it would be too difficult to master, that challenge actually transformed my mindset. That was the precise moment I knew I wanted to pursue a career in the field of technology."
    },
    {
      name: "Mikaela Madrid",
      photo: "/images/mikaela-madrid.jpg",
      question: "How have you navigated challenges or 'broken the glass' in your technical projects?",
      answer: "I navigate challenges in my technical projects by breaking them down into smaller, manageable tasks and researching possible solutions. This approach helps me continuously learn and improve"
    },
    {
      name: "Shiraine Marianne Bituin",
      photo: "/images/shiraine-marianne-bituin.jpg",
      question: "What is one 'explicit' change you hope to see in the tech world by the time you graduate?",
      answer: "One explicit change I hope to see in the tech world is the greater accessibility to learning and opportunities, especially for students who doesn’t have their full access or control of their time or resources. Due to the fact that not everyone has the privilege of a perfect schedule or environment, but that doesn’t mean they lack potential. I hope that the tech industry continues to create more flexible, and inclusive paths for people to learn, grow, and contribute. Because talents and skills exists everywhere, it just needs the right opportunity to be seen."
    },
    {
      name: "Shiela Mae Paigan",
      photo: "/images/shiela-mae-paigan.png",
      question: "What was the exact moment you realized you wanted to pursue technology?",
      answer: "My journey into technology began with a simple childhood frustration: I loved computer games, but I didn't know how to fix them when they broke. I used to watch my cousin, a BSIT graduate from PUP San Pedro, work her magic on my machine. I was so impressed by her skills that she became my first inspiration; I wanted to do exactly what she could do.\n\nBy the time I reached high school at SPRCNHS, I dove straight into the ICT specialization. While I loved creating animations, I’ll admit that learning the basics of HTML and CSS was a challenge. However, facing those hurdles was the exact moment I realized I wanted to pursue this field. I discovered that technology isn't just about machines—it’s about creating solutions that make life easier. That realization pushed me to take on leadership roles, serving as president of the ICT, Techno, and English clubs. Moving from a child who was inspired by others to a leader who inspires students today has been one of my proudest transitions."
    },
    {
      name: "Erica Daguplo",
      photo: "/images/erica-daguplo.jpg",
      question: "What was the exact moment you realized you wanted to pursue technology?",
      answer: "To be honest, tech wasn’t really part of my original plans — like, not at all. Ever since Grade 10, I was set on pursuing psychology. But life happens, and somehow, I ended up here.\n\nAt first, it felt unexpected, but over time, it became a growing realization that maybe this path is meant for me. Being in this course and in the EXPLICIT Organization made me see that it wasn’t a wrong turn after all — I found a space where I could grow, learn, and lead. I'm loving it here.\n\nSo, I think that was my ‘spark’ — not a single moment, but the realization that I’m exactly where I’m supposed to be :)"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % risingInnovators.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + risingInnovators.length) % risingInnovators.length);
  };

  return (
    <section id="innovators" className="py-16 women-innovators-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="soft-blob w-96 h-96 bg-purple-200/50 top-[-10%] left-[-10%]" />
      <div className="soft-blob w-80 h-80 bg-pink-200/50 bottom-[-5%] right-[-5%]" />
      <div className="floating-square w-12 h-12 top-[15%] right-[20%] animate-bounce opacity-20" style={{ animationDuration: '4s' }} />
      <div className="floating-square w-8 h-8 bottom-[20%] left-[15%] animate-pulse opacity-20" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Alumni Spotlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="innovator-card rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[500px] shadow-2xl border border-white/40 mb-12"
        >
          <div className="md:w-2/5 relative overflow-hidden">
            <img 
              src="/images/crisanchai-crisostomo.jpg" 
              alt="Crisanchai Crisostomo" 
              className="w-full h-full object-cover object-[center_15%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:to-transparent" />
          </div>
          <div className="md:w-3/5 p-8 md:p-14 flex flex-col relative bg-white/95 backdrop-blur-sm">
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                ★ Alumni Spotlight
              </span>
              <h3 className="text-4xl md:text-6xl font-serif text-purple-dark mb-3 leading-tight">Crisanchai Crisostomo</h3>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-8 mb-8">
                <p className="font-serif italic text-xl md:text-2xl text-purple-900 leading-relaxed">
                  "What advice would you give to your 1st-year self?"
                </p>
              </div>
              
              <div className="flex-grow overflow-y-auto custom-scrollbar pr-4 mb-8">
                <p className="text-zinc-900 font-body leading-relaxed text-lg md:text-xl">
                  "Step out of your comfort zone, even when the world is digital. Don’t let a screen limit your potential—participating in organizations and competitions is where the real growth happens. These aren't just activities; they are the foundation of the skills and connections that will define your career. Start before you feel ready."
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-purple-100">
                <div className="flex gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-purple-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-pink-500 shadow-sm" />
                </div>
                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold text-base shadow-xl hover:shadow-purple-300/50 transition-all hover:scale-105 active:scale-95">
                  See more
                </button>
              </div>
            </div>
          </motion.div>

        {/* Rising Innovators Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-serif text-purple-dark drop-shadow-sm">Rising Innovators</h2>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-purple-200 flex items-center justify-center text-purple-dark hover:bg-white transition-all shadow-md hover:shadow-lg active:scale-90"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-purple-200 flex items-center justify-center text-purple-dark hover:bg-white transition-all shadow-md hover:shadow-lg active:scale-90"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-2xl border border-white/30">
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {risingInnovators.map((innovator, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="innovator-card rounded-[32px] overflow-hidden flex flex-col md:flex-row h-full md:h-[400px] bg-white/95 backdrop-blur-sm">
                    <div className="md:w-1/3 relative overflow-hidden h-72 md:h-full">
                      <img 
                        src={innovator.photo} 
                        alt={innovator.name} 
                        className="w-full h-full object-cover object-[center_15%]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 md:p-10 flex flex-col">
                      <h3 className="text-3xl md:text-4xl font-serif text-purple-dark mb-6">{innovator.name}</h3>
                      
                      <div className="border-l-4 border-pink-500 pl-6 mb-6">
                        <p className="font-serif italic text-base md:text-lg text-purple-800 font-medium leading-relaxed">
                          "{innovator.question}"
                        </p>
                      </div>
                      
                      <div className="flex-grow overflow-y-auto custom-scrollbar pr-4 mb-6">
                        <p className="text-zinc-900 font-body text-lg leading-relaxed">
                          {innovator.answer}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-purple-50">
                        <div className="flex gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                        </div>
                        <button className="px-7 py-2.5 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold text-sm shadow-lg hover:shadow-purple-200/50 transition-all hover:scale-105 active:scale-95">
                          See more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {risingInnovators.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-10 bg-purple-700' : 'w-2.5 bg-purple-700/20 hover:bg-purple-700/40'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const Hero = () => {
  const cubes = [
    { size: 52, top: '15%', left: '10%', grad: 'linear-gradient(135deg, #c9b3ee, #a08ad4)', rotate: '-15deg', anim: 'floatA', dur: '4.5s', delay: '0s' },
    { size: 64, top: '10%', left: '85%', grad: 'linear-gradient(135deg, #b8a0e8, #8f72c8)', rotate: '22deg', anim: 'floatB', dur: '5.2s', delay: '0.5s' },
    { size: 38, top: '45%', left: '5%', grad: 'linear-gradient(135deg, #d4c0f5, #b09ce0)', rotate: '-22deg', anim: 'floatC', dur: '3.8s', delay: '1.2s' },
    { size: 72, top: '40%', left: '90%', grad: 'linear-gradient(135deg, #c9b3ee, #a08ad4)', rotate: '34deg', anim: 'floatA', dur: '6s', delay: '0.2s' },
    { size: 44, top: '75%', left: '15%', grad: 'linear-gradient(135deg, #b8a0e8, #8f72c8)', rotate: '12deg', anim: 'floatB', dur: '4.8s', delay: '1.5s' },
    { size: 58, top: '80%', left: '80%', grad: 'linear-gradient(135deg, #d4c0f5, #b09ce0)', rotate: '-10deg', anim: 'floatC', dur: '5.5s', delay: '0.8s' },
    { size: 28, top: '60%', left: '45%', grad: 'linear-gradient(135deg, #c9b3ee, #a08ad4)', rotate: '18deg', anim: 'floatA', dur: '4s', delay: '0.3s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-section pt-20">
      {/* Floating Cubes Background */}
      {cubes.map((cube, i) => (
        <div 
          key={i}
          className="floating-cube"
          style={{
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            top: cube.top,
            left: cube.left,
            background: cube.grad,
            animation: `${cube.anim} ${cube.dur} ease-in-out infinite`,
            animationDelay: cube.delay,
            '--base-rotate': cube.rotate,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center hero-content-fade">
        <div className="hero-pill mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6b3fa0]">Celebrating Innovation</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl lg:text-[8rem] font-serif font-black leading-[0.9] mb-8 tracking-[-0.03em] text-[#1a0a2e]">
          Explicitly <br />
          <span className="text-her-gradient italic block mt-2 pb-4 pr-10">Her</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#4a3060] max-w-[500px] mx-auto mb-10 font-normal leading-relaxed">
          Shining a spotlight on the women redefining the future of technology through passion, resilience, and unyielding innovation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[14px]">
          <a href="#story" className="hero-btn-primary">
            Explore Our Story
          </a>
          <a href="#innovators" className="hero-btn-secondary">
            Meet the Innovators
          </a>
        </div>
      </div>
    </section>
  );
};
const HeartOfExplicit = () => {
  return (
    <section id="story" className="relative py-16 overflow-hidden">
      {/* Background with floating cubes */}
      <div className="absolute inset-0 bg-[#f3e8ff]/30 -z-10" />
      
      {/* Floating Cubes (matching Figma) */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0], 
          rotate: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[5%] w-32 h-32 bg-purple-400/20 rounded-3xl blur-sm -z-0"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0], 
          rotate: [0, -20, 0],
          x: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[10%] w-48 h-48 bg-purple-500/15 rounded-[3rem] blur-md -z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 left-[20%] w-20 h-20 bg-purple-300/25 rounded-2xl blur-[2px] -z-0"
      />
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-10 right-[25%] w-24 h-24 bg-purple-200/30 rounded-2xl blur-sm -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/40">
              <img 
                src="/images/explicit-pic.jpeg" 
                alt="EXPLICIT Community" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/90 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-white/60 relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-zinc-900 leading-tight flex items-center gap-4">
                <span>The Heart of <span className="text-[#2563eb] font-bold">EXPLICIT</span></span>
                <img 
                  src="/images/explicit-logo.png" 
                  alt="Logo" 
                  className="w-20 h-20 md:w-28 md:h-28 object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </h2>
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed mb-10 font-light">
                The <span className="font-bold">EXPLICIT</span> organization was founded on a simple, yet powerful premise: that technology is most transformative when it is inclusive. What began as a community of innovators has evolved into a sanctuary for brilliance, resilience, and advocacy. We didn't just want to create a space for IT professionals; we wanted to create a platform where women could explicitly lead, explicitly innovate, and explicitly belong.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10 border-t border-zinc-100 pt-10">
                <div>
                  <p className="text-4xl font-serif text-[#2563eb]">500+</p>
                  <p className="text-sm uppercase tracking-widest text-zinc-400 font-bold mt-2">IT Students</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-[#2563eb]">20+</p>
                  <p className="text-sm uppercase tracking-widest text-zinc-400 font-bold mt-2">IT Leaders</p>
                </div>
              </div>

              <button className="bg-black text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl active:scale-95 hover:shadow-purple-200/50">
                See more
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




const WordsOfWisdom = () => {
  const row1Quotes = [
    {
      name: "Crisanchai Crisostomo",
      image: "/images/crisanchai-crisostomo.jpg",
      quote: "Your unique perspective is your greatest strength. Never be afraid to speak your truth in a room full of silence."
    },
    {
      name: "Anna Mae Dote",
      image: "/images/anna-mae-dote.jpg",
      quote: "Technology is not just a collection of tools, but a canvas for human ingenuity; your passion shouldn’t just be about mastering the code, but about the lives you can improve and the problems you can solve with it."
    },
    {
      name: "Stephanie De Villa",
      image: "/images/stephanie-de-villa.jpg",
      quote: "The ‘spark’ isn't just about finding the right code, it'a about finding the courage to keep trying until it works."
    },
    {
      name: "Mikaela Madrid",
      image: "/images/mikaela-madrid.jpg",
      quote: "Start small, think big"
    }
  ];

  const row2Quotes = [
    {
      name: "Shiraine Marianne Bituin",
      image: "/images/shiraine-marianne-bituin.jpg",
      quote: "In life, you won’t always understand the system you’re placed in, but trust that God is writing a greater program for you. So Keep learning, keep building, and never forget that your greatest upgrade will always come from within."
    },
    {
      name: "Shiela Mae Paigan",
      image: "/images/shiela-mae-paigan.png",
      quote: "Nobody starts as an expert; everyone begins as a beginner."
    },
    {
      name: "Erica Daguplo",
      image: "/images/erica-daguplo.jpg",
      quote: "I didn’t start because I was certain — I stayed because I found where I belong."
    }
  ];

  return (
    <section className="words-of-wisdom-section py-16 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="wisdom-blob top-10 left-10 w-48 h-48" />
      <div className="wisdom-blob top-1/2 right-0 w-64 h-64 -translate-y-1/2" />
      <div className="wisdom-blob bottom-10 left-1/4 w-40 h-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="wisdom-title text-center mb-16">
          Words of Wisdom: The Heartbeat of Our Tech Community.
        </h2>

        <div className="wisdom-rows space-y-8">
          {/* Row 1 */}
          <div className="wisdom-row-outer">
            <div className="wisdom-row-container row-1" role="region" aria-label="Scrolling quotes">
              <div className="wisdom-track">
                {[...row1Quotes, ...row1Quotes].map((quote, i) => (
                  <div key={i} className="quote-card">
                    <div className="quote-card-inner">
                      <div className="quote-dots">
                        <div className="dot bg-[#c084fc]" />
                        <div className="dot bg-[#a855f7]" />
                        <div className="dot bg-[#7c3aed]" />
                      </div>
                      <div className="quote-mark">“</div>
                      <p className="quote-text">{quote.quote}</p>
                      <div className="quote-footer">
                        <div className="quote-avatar-wrapper">
                          <img 
                            src={quote.image} 
                            alt={quote.name} 
                            className="quote-avatar"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="quote-info">
                          <p className="quote-name">{quote.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="wisdom-row-outer">
            <div className="wisdom-row-container row-2" role="region" aria-label="Scrolling quotes">
              <div className="wisdom-track">
                {[...row2Quotes, ...row2Quotes].map((quote, i) => (
                  <div key={i} className="quote-card">
                    <div className="quote-card-inner">
                      <div className="quote-dots">
                        <div className="dot bg-[#c084fc]" />
                        <div className="dot bg-[#a855f7]" />
                        <div className="dot bg-[#7c3aed]" />
                      </div>
                      <div className="quote-mark">“</div>
                      <p className="quote-text">{quote.quote}</p>
                      <div className="quote-footer">
                        <div className="quote-avatar-wrapper">
                          <img 
                            src={quote.image} 
                            alt={quote.name} 
                            className="quote-avatar"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="quote-info">
                          <p className="quote-name">{quote.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="community-form" className="bg-[#0F0F0F] text-white py-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-0">
          
          {/* Left Column: Brand, Logo, Nav, Connect */}
          <div className="lg:w-1/2 flex flex-col justify-start pr-0 lg:pr-12 gap-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">
                  Explicitly <span className="italic text-[#D946EF]">Her</span>
                </h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium max-w-md">
                  A global initiative dedicated to celebrating and empowering women in the technology sector through storytelling and community.
                </p>
              </div>
              
              {/* Medal Logo Concept */}
              <div className="relative flex-shrink-0 self-center md:self-start mt-8 md:mt-0">
                <div className="w-28 h-28 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.15)] flex items-center justify-center p-4 relative z-10">
                  <img 
                    src="/images/explicit-logo.png" 
                    alt="Explicitly Her" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Subtle outer ring for "medal" feel */}
                <div className="absolute inset-[-6px] rounded-full border border-white/10 z-0" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-20">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-6">Navigation</h4>
                <ul className="space-y-4">
                  {['Home', 'Our Story', 'Innovators'].map(item => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-zinc-200 hover:text-white transition-colors text-xs font-medium">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-6">Connect</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors group">
                      <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors group">
                      <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors group">
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Proper Vertical Divider */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent self-stretch mx-4" />

          {/* Right Column: Form Card */}
          <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[360px] relative group">
              {/* Figma-style offset shadow */}
              <div className="absolute inset-0 bg-black/40 rounded-[2.5rem] translate-x-3 translate-y-3 -z-10 blur-sm group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
              
              <div className="bg-[#F3F4F6] rounded-[2.5rem] p-8 text-zinc-900 relative z-10 border border-white/10">
                <h3 className="text-xl font-serif text-center mb-6 tracking-tight">Join to our Community!</h3>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Enter your Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-[#E5E7EB] border-none rounded-xl px-6 py-3 focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-zinc-400 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Contact no.</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#E5E7EB] border-none rounded-xl px-6 py-3 focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-zinc-400 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Share your story</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about your journey..."
                      className="w-full bg-[#E5E7EB] border-none rounded-xl px-6 py-3 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none placeholder:text-zinc-400 text-sm"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <button 
                      type="submit"
                      className="bg-[#0F0F1B] text-white px-12 py-3 rounded-xl font-bold hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl w-full text-base tracking-wide"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-zinc-900/50 text-center">
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.6em] font-bold">
            © 2026 EXPLICITly Her. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const scrollToCommunity = () => {
    const element = document.getElementById('community-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="selection:bg-purple-200 selection:text-purple-900">
      <Navbar onOpenModal={scrollToCommunity} />
      <main>
        <Hero />
        <HeartOfExplicit />
        <MosaicSection />
        <FoundationSection />
        <InnovatorsSection />
        <WordsOfWisdom />
      </main>
      <Footer />
      
      {/* SVG Filter for Glass Distortion */}
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>
    </div>
  );
}
