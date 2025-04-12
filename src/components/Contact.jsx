import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#030B1B] via-[#041533] to-[#020810] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F5F7FE] via-[#0527EC] to-[#F5F7FE] bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-[#F5F7FE]/80 max-w-2xl mx-auto">
            Contact AM Autodesigners for custom vehicle interiors and exteriors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#F5F7FE] mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F5F7FE] focus:outline-none focus:border-[#0527EC]"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#F5F7FE] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F5F7FE] focus:outline-none focus:border-[#0527EC]"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#F5F7FE] mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F5F7FE] focus:outline-none focus:border-[#0527EC]"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#F5F7FE] mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F5F7FE] focus:outline-none focus:border-[#0527EC]"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#0527EC] text-white rounded-lg font-semibold hover:bg-[#2D91FF] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#F5F7FE] mb-6">Reach Us</h3>
              <div className="space-y-6 text-[#F5F7FE]/80">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#2D91FF] flex-shrink-0" />
                  <div>
                    <p className="font-medium">AM Auto Designers</p>
                    <p>5/339-4A, Ramakrishna Nagar,</p>
                    <p>Near Sanjeev Nagar, Pannimadai Post,</p>
                    <p>Coimbatore - 641017</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#2D91FF] flex-shrink-0" />
                  <a href="mailto:am@amautodesigners.com" className="hover:text-[#2D91FF] transition-colors">
                    am@amautodesigners.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#F5F7FE] mb-6">Business Enquiries</h3>
              <div className="space-y-6 text-[#F5F7FE]/80">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#2D91FF] flex-shrink-0" />
                  <div>
                    <p className="font-medium">Mr. A.V. Sidhik</p>
                    <p>+91 97903 84400</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#2D91FF] flex-shrink-0" />
                  <div>
                    <p className="font-medium">Mr. A.V. Abdul Samed</p>
                    <p>+91 97906 96700</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;