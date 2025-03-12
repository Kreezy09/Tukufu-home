import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Heart, Users, Mountain, HandshakeIcon, Eye, Scale, BookOpen, GraduationCap, Users2, Rocket, Lightbulb, DollarSign, Handshake, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock, Send, Menu, X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'get-involved', label: 'Donations' },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Considers element in view when it's in the middle 50% of viewport
        threshold: 0
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! We\'ll keep you updated.');
    setEmail('');
  };

  const coreValues = [
    { icon: Heart, name: 'Compassion', description: 'Showing empathy and care in everything we do' },
    { icon: Users, name: 'Diversity', description: 'Embracing and celebrating our differences' },
    { icon: Mountain, name: 'Perseverance', description: 'Never giving up on our youth and their dreams' },
    { icon: HandshakeIcon, name: 'Collaboration', description: 'Working together to create lasting change' },
    { icon: Eye, name: 'Transparency', description: 'Being open and honest in our operations' },
    { icon: Scale, name: 'Accountability', description: 'Taking responsibility for our actions and impact' },
    { icon: BookOpen, name: 'Learning & Improving', description: 'Continuously growing and evolving' }
  ];

  const services = [
    {
      icon: GraduationCap,
      name: 'Training Programs',
      description: 'Comprehensive educational programs focused on practical skills, digital literacy, and personal development. Our curriculum is designed to prepare youth for future opportunities in an ever-evolving world.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
    },
    {
      icon: Users2,
      name: 'Mentorship Opportunities',
      description: 'One-on-one guidance from experienced mentors who provide support, share knowledge, and help youth navigate their personal and professional journeys with confidence.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80'
    },
    {
      icon: Rocket,
      name: 'Empowerment Initiatives',
      description: 'Leadership development programs that build confidence, foster decision-making skills, and encourage youth to become active contributors to their communities.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80'
    },
    {
      icon: Lightbulb,
      name: 'Exposure to Innovations',
      description: 'Access to cutting-edge technologies and innovative solutions, providing hands-on experience with tools that are shaping the future of work and society.',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
      alt: 'Youth coding workshop',
      caption: 'Digital Skills Training',
      span: 'col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80',
      alt: 'Mentorship session',
      caption: 'One-on-One Mentoring'
    },
    {
      src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80',
      alt: 'Group discussion',
      caption: 'Leadership Workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
      alt: 'STEM activity',
      caption: 'Innovation Lab',
      span: 'col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
      alt: 'Youth presentation',
      caption: 'Public Speaking Training'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      alt: 'Team building activity',
      caption: 'Team Building'
    }
  ];

  const involvementOptions = [
    {
      icon: DollarSign,
      title: 'Make a Donation',
      description: 'Your financial support helps us expand our programs and reach more youth in need.',
      buttonText: 'Donate Now',
      buttonLink: '#donate',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      icon: Users,
      title: 'Volunteer With Us',
      description: 'Share your skills and experience to make a direct impact on young lives.',
      buttonText: 'Join as Volunteer',
      buttonLink: '#volunteer',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Collaborate with us to create meaningful opportunities for youth.',
      buttonText: 'Become a Partner',
      buttonLink: '#partner',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-emerald-600">Tukufu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    activeSection === item.id
                      ? 'text-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform origin-left transition-transform duration-200" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative h-screen">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Uplifting Children and Youth through Training, Mentorship, and Empowerment
            </h1>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-emerald-600 border border-transparent rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building on the strengths of children and youth to help them find hope, self-worth, and success in life.
            </p>
          </div>

          {/* Description */}
          <div className="mb-20">
            <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Tukufu, we believe in a holistic approach that nurtures the complete development of young minds. 
                Through our innovative programs, we combine hands-on training with personalized mentorship to create 
                transformative experiences. We expose youth to cutting-edge innovations and technologies, while 
                building essential life skills that empower them to become confident, capable leaders of tomorrow.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <value.icon className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.name}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to nurture potential and create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Impact in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the transformative moments that shape tomorrow's leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-xl ${image.span || ''}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div id="get-involved" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in making a difference in the lives of children and youth
            </p>
          </div>

          {/* Involvement Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {involvementOptions.map((option, index) => (
              <div
                key={index}
                className={`${option.bgColor} rounded-xl p-8 text-center`}
              >
                <option.icon className={`w-12 h-12 ${option.iconColor} mx-auto mb-6`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <a
                  href={option.buttonLink}
                  className={`inline-block px-6 py-3 text-white ${option.buttonColor} rounded-full font-medium transition-colors duration-200`}
                >
                  {option.buttonText}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-emerald-600 mr-3" />
                    <a href="mailto:contact@tukufu.org" className="text-gray-600 hover:text-emerald-600">
                      contact@tukufu.org
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-emerald-600 mr-3" />
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-emerald-600">
                      (123) 456-7890
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                    <span className="text-gray-600">
                      123 Impact Street, Changemaker City, 12345
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">
                  Stay connected with us on social media for updates and stories of impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Full Website Coming Soon!</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              We're working hard to bring you a full-featured website that will showcase more of what we do. Stay tuned!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">{value}</div>
                <div className="text-emerald-100 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          {/* Email Subscription Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-emerald-200 border border-emerald-200/30 focus:outline-none focus:border-white transition-colors duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-emerald-600 rounded-full font-medium hover:bg-emerald-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Notify Me
              </button>
            </form>
            <p className="text-emerald-100 text-sm mt-4 text-center">
              Be the first to know when we launch our full website!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;