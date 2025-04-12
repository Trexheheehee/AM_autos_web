import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import exterior from '../assets/exterior/Travellar_exterior.jpg';
import Roof from '../assets/Roof/roof.jpg';
import Dashboard from '../assets/Dashboards/Dashboard.jpg';
import Seat from '../assets/Seat/Traveller_seat.jpg';
import TV from '../assets/TV/Traveller_tv.jpg';
import sidepads from '../assets/Sidepads/sidepads.jpg';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Interior and Exterior Transformation",
      description: "Complete vehicle makeover with premium materials, custom lighting, and modern design elements for both interior and exterior",
      image: exterior,
      category: "Complete"
    },
    {
      id: 2,
      title: "Seat Customization",
      description: "Premium leather seating with ergonomic design, power recline functionality, and custom stitching patterns",
      image: Seat,
      category: "Interior"
    },
    {
      id: 3,
      title: "Traveller TV Customization",
      description: "High-end entertainment systems with smart TV integration, premium sound setup, and custom mounting solutions",
      image: TV,
      category: "Entertainment"
    },
    {
      id: 4,
      title: "Roof Customization",
      description: "Innovative roof modifications including high-roof conversions, sunroofs, and custom lighting installations",
      image: Roof,
      category: "Exterior"
    },
    {
      id: 5,
      title: "Sidepads Customization",
      description: "Custom-designed side panels with premium upholstery, integrated ambient lighting, and storage solutions",
      image: sidepads,
      category: "Interior"
    },
    {
      id: 6,
      title: "Dashboard Customization",
      description: "Modern dashboard redesigns with custom panels, integrated displays, and premium material finishing",
      image: Dashboard,
      category: "Interior"
    }
  ];

  return (
    <section id="gallery" className="min-h-screen bg-gradient-to-br from-[#030B1B] via-[#041533] to-[#020810] py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0527EC]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D91FF]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Gallery Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F5F7FE] via-[#0527EC] to-[#F5F7FE] bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-lg text-[#F5F7FE]/80 max-w-2xl mx-auto">
            Explore our collection of premium vehicle transformations, showcasing the finest in automotive customization
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-[#0527EC]/50 transition-all duration-300"
              onClick={() => {
                if (item.id === 1) {
                  navigate('/exterior');
                } else if (item.id === 2) {
                  navigate('/seat');
                } else if (item.id === 3) {
                  navigate('/tv');
                } else if (item.id === 4) {
                  navigate('/roof');
                } else if (item.id === 5) {
                  navigate('/sidepads');
                } else if (item.id === 6) {
                  navigate('/dashboard');
                }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-[#2D91FF] font-medium">{item.category}</span>
                <h3 className="text-xl font-semibold text-[#F5F7FE] mt-2">{item.title}</h3>
                <p className="text-[#F5F7FE]/70 mt-2">{item.description}</p>
                {item.id === 1 && (
                  <div className="mt-4 flex items-center text-[#2D91FF] text-sm">
                    <span className="animate-pulse">Tap to view all collections →</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full bg-[#030B1B]/90 rounded-2xl overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#F5F7FE]">{selectedImage.title}</h3>
              <p className="text-[#F5F7FE]/80 mt-2">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;