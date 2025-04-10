import { motion } from 'framer-motion';
import { Timer, Users, Trophy, Wrench, Palette, Car, Gauge, Shield } from 'lucide-react';

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

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-[#050A14] via-[#061529] to-[#030912] text-[#F5F7FE] px-4 py-16 md:py-24 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About AM Autodesigners
          </motion.h2>
          <p className="text-lg md:text-xl text-[#F5F7FE]/80 max-w-3xl mx-auto">
            Since 2009, we've been revolutionizing vehicle customization in India, 
            turning ordinary vehicles into extraordinary masterpieces through innovative design 
            and meticulous craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: '#0527EC' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-xl p-8 border border-white/20 group hover:shadow-lg hover:shadow-[#0527EC]/20 transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="mb-4"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-4xl font-bold text-[#0527EC] mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </h3>
              <p className="text-[#F5F7FE]/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative space-y-6 p-8 rounded-2xl bg-gradient-to-br from-[#0527EC]/10 via-[#0527EC]/5 to-transparent border border-[#0527EC]/20">
            <div className="absolute inset-0 blur-3xl bg-[#0527EC]/10 rounded-2xl -z-10"></div>
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
                  className="flex items-center space-x-3 group bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#0527EC]/30"
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
            className="bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 rounded-2xl border border-white/20 hover:border-[#0527EC]/50 transition-all"
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
    </section>
  );
};

export default About;