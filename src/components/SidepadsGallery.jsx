import { motion } from 'framer-motion';
import { useState } from 'react';

// Import all sidepads images
import img1 from '../assets/sidepads/1.jpg';
import img2 from '../assets/sidepads/2.jpg';
import img3 from '../assets/sidepads/3.jpg';
import img4 from '../assets/sidepads/4.jpg';
import img5 from '../assets/sidepads/5.jpg';
import img6 from '../assets/sidepads/6.jpg';
import img7 from '../assets/sidepads/7.jpg';
import img8 from '../assets/sidepads/8.jpg';
import img9 from '../assets/sidepads/9.jpg';
import img10 from '../assets/sidepads/10.jpg';
import img11 from '../assets/sidepads/11.jpg';
import img12 from '../assets/sidepads/12.jpg';
import img13 from '../assets/sidepads/13.jpg';
import img14 from '../assets/sidepads/14.jpg';
import img15 from '../assets/sidepads/15.jpg';
import img16 from '../assets/sidepads/16.jpg';
import img17 from '../assets/sidepads/17.jpg';
import img18 from '../assets/sidepads/18.jpg';
import img19 from '../assets/sidepads/19.jpg';
import img20 from '../assets/sidepads/20.jpg';
import img21 from '../assets/sidepads/21.jpg';
import img22 from '../assets/sidepads/22.jpg';
import img23 from '../assets/sidepads/23.jpg';


const sidepadsImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23
];

const SidepadsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#000813] via-[#001538] to-[#000813] relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 mb-4">
            Sidepads Collections
          </h1>
          <p className="text-lg md:text-xl text-blue-200/80">
            Discover our premium sidepads customization masterpieces
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sidepadsImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30 backdrop-blur-sm border border-white/10 transition-all duration-300">
                <img
                  src={image}
                  alt={`Sidepads Design ${index + 1}`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Selected Design"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default SidepadsGallery;