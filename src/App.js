import "./App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Video, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Brain,
  Target,
  TrendingUp,
  ChevronDown
} from "lucide-react";

// Constants
const LOGO_URL = "https://customer-assets.emergentagent.com/job_aa7dffcc-fc52-4c43-afea-901d385287ec/artifacts/42v3g42d_482520383_1357196815302530_9035079255084560302_n.jpg";
const PHOTO_URL = "https://customer-assets.emergentagent.com/job_aa7dffcc-fc52-4c43-afea-901d385287ec/artifacts/6yvioi6d_18127681-44be-47f0-9a3c-4a01dd326eb2.jpg";
const WHATSAPP_LINK = "https://wa.me/5491169829416?text=Hola%20Gabriel%2C%20me%20gustar%C3%ADa%20consultar%20por%20la%20disponibilidad%20de%20turnos%20para%20pedir%20una%20sesion%20.%20Gracias!";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#especialidad", label: "Especialidad" },
    { href: "#horarios", label: "Horarios" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#F5F0E1]/95 backdrop-blur-xl shadow-lg shadow-[#5EAD90]/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3" data-testid="navbar-logo">
            <img 
              src={LOGO_URL} 
              alt="Logo Gabriel Miriani" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1C2A24] leading-tight">
                Gabriel Miriani
              </span>
              <span className="text-sm text-[#5EAD90] font-medium">
                Psicólogo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#3A4F44] hover:text-[#5EAD90] transition-colors duration-300 font-medium"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5EAD90] text-[#F5F0E1] hover:bg-[#4A9278] rounded-full px-6 py-2.5 transition-all duration-300 font-medium shadow-lg shadow-[#5EAD90]/20 hover:shadow-xl hover:-translate-y-0.5"
              data-testid="nav-cta-button"
            >
              Reservá tu sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1C2A24]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#F5F0E1]/95 backdrop-blur-xl rounded-2xl mb-4 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#3A4F44] hover:text-[#5EAD90] transition-colors duration-300 font-medium text-lg"
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#5EAD90] text-[#F5F0E1] text-center rounded-full px-6 py-3 font-medium mt-4"
                  data-testid="mobile-cta-button"
                >
                  Reservá tu sesión
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Slider data for Hero (texts + images)
const sliderData = [
  {
    text: "Desarrollo & superación personal",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80"
  },
  {
    text: "Conexión con otros",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
  },
  {
    text: "Gestión de la ansiedad y procesos de cambio",
    image: "https://images.unsplash.com/photo-1623358184637-2ec651a9ea51?w=800&q=80"
  },
  {
    text: "Superación de la depresión",
    image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=800&q=80"
  },
  {
    text: "Autoestima e inseguridades",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
  },
  {
    text: "Estrés y cansancio",
    image: "https://images.unsplash.com/photo-1587319949907-3399db45fafe?w=800&q=80"
  },
  {
    text: "Miedos",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&q=80"
  }
];

// Hero Section with Slider (Images + Text)
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="min-h-screen gradient-bg flex items-center pt-20 relative" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Slider with Text overlaid on Image */}
          <div className="flex flex-col items-center mb-12">
            {/* Image with Text Overlay */}
            <div className="relative w-full max-w-4xl h-[350px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-[#5EAD90]/10 mb-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${currentSlide}`}
                  src={sliderData[currentSlide].image}
                  alt={sliderData[currentSlide].text}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A24]/70 via-[#1C2A24]/30 to-[#1C2A24]/10" />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white font-['Cormorant_Garamond'] text-center drop-shadow-lg"
                    data-testid="hero-slider-text"
                  >
                    {sliderData[currentSlide].text}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "w-8 bg-[#5EAD90]" 
                      : "w-2 bg-[#5EAD90]/30 hover:bg-[#5EAD90]/50"
                  }`}
                  data-testid={`slider-indicator-${index}`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed text-[#3A4F44] mb-8 max-w-2xl text-center">
              Sesiones 100% virtuales: tu bienestar donde estés. Un espacio seguro 
              para trabajar en tu salud mental con herramientas prácticas y efectivas.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5EAD90] text-[#F5F0E1] hover:bg-[#4A9278] rounded-full px-8 py-4 transition-all duration-300 font-medium text-lg shadow-lg shadow-[#5EAD90]/20 hover:shadow-xl hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                data-testid="hero-cta-button"
              >
                <MessageCircle size={20} />
                Contactar por WhatsApp
              </a>
              <a
                href="#especialidad"
                className="border-2 border-[#5EAD90] text-[#5EAD90] hover:bg-[#5EAD90] hover:text-[#F5F0E1] rounded-full px-8 py-4 transition-all duration-300 font-medium text-lg text-center"
                data-testid="hero-secondary-button"
              >
                Conocé más
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Scroll indicator - clickable */}
        <motion.a 
          href="#especialidad"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#5EAD90] cursor-pointer hover:text-[#4A9278] transition-colors"
          data-testid="scroll-indicator"
        >
          <span className="text-sm font-medium">Descubrí más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

// Especialidad Section
const EspecialidadSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Enfoque Práctico",
      description: "Técnicas y herramientas concretas que podés aplicar en tu día a día para manejar pensamientos y emociones."
    },
    {
      icon: Target,
      title: "Centrado en el Presente",
      description: "Trabajamos con situaciones actuales, identificando patrones de pensamiento que afectan tu bienestar hoy."
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      description: "Objetivos claros y seguimiento del progreso para que puedas ver tu evolución a lo largo del proceso."
    }
  ];

  return (
    <section id="especialidad" className="py-24 md:py-32 px-6 md:px-12" data-testid="especialidad-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest text-[#5EAD90] font-bold mb-4"
          >
            Mi Especialidad
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl tracking-tight leading-snug text-[#1C2A24] font-['Cormorant_Garamond'] max-w-3xl mx-auto"
          >
            ¿Qué es la Terapia Cognitivo Conductual?
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#FFFFFF]/60 backdrop-blur-md border border-[#5EAD90]/20 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5EAD90]/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#5EAD90]" />
              </div>
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#1C2A24] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#3A4F44] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-[#5EAD90]/5 rounded-3xl p-8 md:p-12"
        >
          <p className="text-lg leading-relaxed text-[#3A4F44] text-center max-w-3xl mx-auto">
            La TCC es un enfoque terapéutico basado en evidencia científica que trabaja 
            la relación entre pensamientos, emociones y conductas. A través de técnicas 
            específicas, te ayudo a identificar y modificar patrones de pensamiento 
            que generan malestar, desarrollando habilidades para afrontar mejor las 
            situaciones de tu vida cotidiana.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Sobre Mi Section
const SobreMiSection = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFFFF]/30" data-testid="sobre-mi-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Photo */}
          <motion.div 
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="aspect-[4/5] w-[85%] max-w-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-[#5EAD90]/10">
              <img 
                src={PHOTO_URL} 
                alt="Gabriel Miriani - Psicólogo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-5 -right-5 lg:-right-6 w-28 h-28 bg-[#D9745F]/10 rounded-full -z-10" />
            <div className="absolute -top-5 -left-5 lg:-left-6 w-22 h-22 bg-[#5EAD90]/10 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp}>
            <p className="text-sm uppercase tracking-widest text-[#5EAD90] font-bold mb-4">
              Sobre Mí
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-tight leading-snug text-[#1C2A24] font-['Cormorant_Garamond'] mb-2">
              Gabriel Miriani
            </h2>
            <p className="text-[#D9745F] font-medium mb-6">
              Psicólogo
            </p>
            
            <div className="space-y-4 text-[#3A4F44] leading-relaxed">
              <p>
                Soy psicólogo clínico especializado en Terapia Cognitivo Conductual, 
                con años de experiencia acompañando a personas en su proceso de 
                bienestar emocional.
              </p>
              <p>
                Mi enfoque se centra en crear un espacio de confianza y calidez donde 
                puedas sentirte escuchado/a y comprendido/a. Creo firmemente en el 
                trabajo colaborativo: juntos identificamos objetivos claros y 
                desarrollamos estrategias prácticas para alcanzarlos.
              </p>
              <p>
                La modalidad virtual me permite llegar a más personas, brindando 
                flexibilidad horaria y la comodidad de realizar las sesiones desde 
                donde te encuentres.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5EAD90] text-[#F5F0E1] hover:bg-[#4A9278] rounded-full px-8 py-4 transition-all duration-300 font-medium text-lg shadow-lg shadow-[#5EAD90]/20 hover:shadow-xl hover:-translate-y-1 mt-8"
              data-testid="sobre-mi-cta-button"
            >
              <MessageCircle size={20} />
              Iniciá tu proceso
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Horarios Section
const HorariosSection = () => {
  return (
    <section id="horarios" className="py-24 md:py-32 px-6 md:px-12" data-testid="horarios-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest text-[#5EAD90] font-bold mb-4"
          >
            Información de Sesiones
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl tracking-tight leading-snug text-[#1C2A24] font-['Cormorant_Garamond']"
          >
            Modalidad y Horarios
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {/* Modalidad Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#FFFFFF]/60 backdrop-blur-md border border-[#5EAD90]/20 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center"
            data-testid="modalidad-card"
          >
            <div className="w-20 h-20 rounded-full bg-[#5EAD90]/10 flex items-center justify-center mx-auto mb-6">
              <Video className="w-10 h-10 text-[#5EAD90]" />
            </div>
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#1C2A24] mb-4">
              Modalidad 100% Virtual
            </h3>
            <p className="text-[#3A4F44] leading-relaxed">
              Sesiones por videollamada desde la comodidad de tu hogar. 
              Solo necesitás una conexión a internet estable y un espacio 
              privado donde sentirte cómodo/a.
            </p>
          </motion.div>

          {/* Horarios Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#FFFFFF]/60 backdrop-blur-md border border-[#5EAD90]/20 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center"
            data-testid="horarios-card"
          >
            <div className="w-20 h-20 rounded-full bg-[#D9745F]/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-[#D9745F]" />
            </div>
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#1C2A24] mb-4">
              Horarios de Atención
            </h3>
            <div className="text-[#3A4F44] space-y-2">
              <p className="font-medium text-[#1C2A24]">Lunes a Viernes</p>
              <p>9:00 a 20:00 hs</p>
              <div className="w-12 h-px bg-[#E5DECE] mx-auto my-3" />
              <p className="font-medium text-[#1C2A24]">Sábados</p>
              <p>10:00 a 13:00 hs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "centropsitrascender@gmail.com",
      href: "mailto:centropsitrascender@gmail.com",
      color: "bg-[#5EAD90]/10 text-[#5EAD90]"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Centropsitrascender",
      href: "https://instagram.com/centropsitrascender",
      color: "bg-[#D9745F]/10 text-[#D9745F]"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Transcender",
      href: "https://www.facebook.com/CentroPsicoterapeuticoTrascender",
      color: "bg-[#5EAD90]/10 text-[#5EAD90]"
    }
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 md:px-12 bg-[#5EAD90]/5" data-testid="contacto-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest text-[#5EAD90] font-bold mb-4"
          >
            Contacto
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl tracking-tight leading-snug text-[#1C2A24] font-['Cormorant_Garamond'] mb-6"
          >
            ¿Listo/a para dar el primer paso?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-[#3A4F44] mb-12 max-w-2xl mx-auto"
          >
            Escribime por WhatsApp para coordinar una primera consulta. 
            Estoy acá para acompañarte.
          </motion.p>

          {/* WhatsApp CTA */}
          <motion.div variants={fadeInUp} className="mb-16">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D9745F] text-[#F5F0E1] hover:bg-[#C26551] rounded-full px-10 py-5 transition-all duration-300 font-medium text-xl shadow-lg shadow-[#D9745F]/20 hover:shadow-xl hover:-translate-y-1 whatsapp-pulse"
              data-testid="contact-whatsapp-button"
            >
              <MessageCircle size={28} />
              Contactar por WhatsApp
            </a>
          </motion.div>

          {/* Other Contact Methods */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF]/60 backdrop-blur-md border border-[#5EAD90]/20 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                data-testid={`contact-${contact.label.toLowerCase()}`}
              >
                <div className={`w-12 h-12 rounded-xl ${contact.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-6 h-6" />
                </div>
                <p className="font-medium text-[#1C2A24] mb-1">{contact.label}</p>
                <p className="text-sm text-[#3A4F44]">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-[#E5DECE]" data-testid="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Logo Gabriel Miriani" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-['Cormorant_Garamond'] text-lg text-[#1C2A24]">
            Gabriel Miriani
          </span>
        </div>
        <p className="text-sm text-[#3A4F44]">
          © {new Date().getFullYear()} Gabriel Miriani. Todos los derechos reservados. Desarrollado por Luis Castro.
        </p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <EspecialidadSection />
        <SobreMiSection />
        <HorariosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
