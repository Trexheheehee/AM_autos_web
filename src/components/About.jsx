import { motion } from 'framer-motion';
import { Timer, Users, Trophy, Wrench, Palette, Car, Gauge, Shield, Star, Truck, Cpu, Sofa, Zap, Hammer } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '14+', label: 'Years of Excellence', icon: <Timer className="w-8 h-8 text-white/90" /> },
    { number: '100k+', label: 'Satisfied Customers', icon: <Users className="w-8 h-8 text-white/90" /> },
    { number: '50+', label: 'Expert Craftsmen', icon: <Trophy className="w-8 h-8 text-white/90" /> }
  ];

  const services = [
    { name: 'Custom Interior Design', icon: <Palette className="w-5 h-5 text-white/90" /> },
    { name: 'Exterior Modifications', icon: <Car className="w-5 h-5 text-white/90" /> },
    { name: 'Luxury Upgrades', icon: <Wrench className="w-5 h-5 text-white/90" /> },
    { name: 'Performance Enhancements', icon: <Gauge className="w-5 h-5 text-white/90" /> }
  ];

  const specializedServices = [
    {
      title: "Customized Designing",
      icon: <Palette className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />,
      description: "Expert customization of vehicle exteriors and interiors including curtains, roof modifications, lighting alterations, premium flooring, custom cabins, and professional upholstery work.",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent"
    },
    {
      title: "Chassis & Body",
      icon: <Truck className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />,
      description: "Specialized in chassis construction, comprehensive body building, and extensive interior/exterior modifications for all four-wheelers, including innovative stepney designs.",
      gradient: "from-indigo-500/20 via-blue-500/10 to-transparent"
    },
    {
      title: "Advanced Concepts",
      icon: <Cpu className="w-6 h-6" />,
      description: "Leading-edge expertise in predicting and implementing future design guidelines for upcoming vehicle ranges across target brands.",
      gradient: "from-blue-600/20 via-indigo-600/10 to-transparent"
    },
    {
      title: "Seating Systems",
      icon: <Sofa className="w-6 h-6" />,
      description: "Luxury double-stitched leather upholstery with adjustable front & back tilt mechanisms, offering extensive color and texture options.",
      gradient: "from-indigo-600/20 via-blue-600/10 to-transparent"
    },
    {
      title: "Electrical Systems",
      icon: <Zap className="w-6 h-6" />,
      description: "Custom electrical cabin design and installation for TV, audio-video systems, and AC units, tailored to customer specifications.",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent"
    },
    {
      title: "Projects",
      icon: <Hammer className="w-6 h-6" />,
      description: "Showcase of unique, innovative designs successfully realized by AM AUTO DESIGNERS, demonstrating our problem-solving expertise.",
      gradient: "from-indigo-500/20 via-blue-500/10 to-transparent"
    }
  ];

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-[#030B1B] via-[#041533] to-[#020810] text-[#F5F7FE] px-4 py-16 md:py-24 overflow-hidden relative"
      id="about"
    >
      {/* Add white accent shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Update stats cards with white accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: '#0527EC' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/10 via-[#0527EC]/5 to-transparent backdrop-blur-sm rounded-xl p-8 border border-white/20 group hover:shadow-lg hover:shadow-white/10 transition-all relative overflow-hidden"
            >
              {/* Add white shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="mb-4 relative"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#0527EC] to-[#2D91FF] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </h3>
              <p className="text-[#F5F7FE]/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Update services section with white accents */}
        <motion.div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white/10 via-[#0527EC]/10 to-transparent border border-white/20">
            <div className="absolute inset-0 blur-3xl bg-[#0527EC]/5 rounded-2xl -z-10" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#0527EC] relative">
              Our Commitment
              <div className="absolute -inset-1 blur-sm bg-[#0527EC]/20 -z-10"></div>
            </h3>
            <p className="text-[#F5F7FE]/90 relative z-10">
              We specialize in premium vehicle modifications, focusing on both aesthetics and functionality. 
              Our team of expert craftsmen brings years of experience in tempo traveller customization 
              and luxury vehicle enhancements.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 group bg-white/10 p-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/15"
                >
                  <motion.span 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.span>
                  <span className="group-hover:text-[#0527EC] transition-colors">{service.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0527EC]/10 via-[#0527EC]/5 to-transparent p-8 rounded-2xl border border-[#0527EC]/20 hover:border-[#0527EC]/50 transition-all relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-white/90" />
              Why Choose Us?
            </h3>
            <div className="space-y-4">
              {[
                'Industry-leading expertise in vehicle customization',
                'Premium quality materials and craftsmanship',
                'Innovative designs and solutions',
                'Dedicated customer support'
              ].map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-[#F5F7FE]/80 flex items-center gap-2"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="text-[#0527EC]"
                  >
                    ✓
                  </motion.span>
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* New Specialized Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 mt-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#F5F7FE] via-[#0527EC] to-[#F5F7FE] bg-clip-text text-transparent">
          Our Specialized Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 via-[#0527EC]/5 to-transparent p-6 rounded-xl border border-white/20 hover:border-white/40 group relative overflow-hidden"
            >
              {/* Add white shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10 text-white group-hover:bg-white/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#2D91FF] transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;