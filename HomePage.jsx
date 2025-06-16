import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Psikolog Elif Hazal Gevrek</h1>
        <p className="text-lg mb-6">
          Kendinizi keşfetmeye, duygularınızı anlamaya ve yaşamınıza daha derinlikli bir bakış kazanmaya hazır mısınız?
        </p>
        <div className="mb-6 p-6 bg-gray-100 rounded-2xl shadow-xl">
          <p className="text-base">
            Bireysel terapi sürecinde danışanlarımla güvene dayalı, yargılamadan uzak bir ortamda çalışıyorum. 
            Her bireyin benzersiz olduğuna inanıyor, birlikte içsel yolculuğunuzu destekleyecek bir alan yaratıyorum.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow">Randevu Al</button>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-indigo-600" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}