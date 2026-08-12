import React from 'react';
import { tractionData, partners } from '../data';
import { motion } from 'motion/react';
import { TrendingUp, Users, Handshake, BarChart3, Mail, Phone } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import techHubImg from '../assets/images/tech_analytics_hub_1784880241845.jpg';
import agriImg from '../assets/images/agri_telemetry_analytics_1784880228300.jpg';
import DataScrollBackground from './DataScrollBackground';
import LazyImage from './LazyImage';

export default function TractionView() {
  return (
    <div id="traction-page" className="bg-transparent text-white min-h-screen py-16 relative overflow-hidden font-sans text-left">
      {/* Background Interactive Particle Network & Data Nodes */}
      <DataScrollBackground />

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45 overflow-hidden">
        <LazyImage 
          src={techHubImg} 
          alt="Tech Analytics Background" 
          className="w-full h-full object-cover scale-105"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/50 via-[#051329]/75 to-[#051329]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-2xl bg-[#0B2545]/80 border border-white/10 shadow-xl text-center mb-16 overflow-hidden backdrop-blur-md"
        >
          {/* Header background banner image */}
          <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
            <LazyImage 
              src={agriImg} 
              alt="Agri Telemetry Banner" 
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/60 via-[#0B2545]/75 to-[#0B2545]/60" />
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
              TRACTION & PARTNERS
            </h1>
            <p className="text-white/85 mt-3 text-xs sm:text-sm font-sans font-extralight leading-relaxed tracking-wide">
              Demonstrating strong client retention, thousands of community responses, and strategic industry alliances across Ethiopia.
            </p>
          </div>
        </motion.div>

        {/* SECTION 1: TRACTION */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">TRACTION</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-[#0B2545]/50 border border-white/10 shadow-xl mb-12"
          >
            <p className="font-sans font-extralight text-sm sm:text-base text-white/85 leading-relaxed tracking-wide">
              {tractionData.description}
            </p>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tractionData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-2xl bg-[#0B2545]/60 border border-white/10 text-center shadow-xl hover:border-white transition-colors cursor-pointer backdrop-blur-sm"
              >
                <div className="text-4xl sm:text-5xl font-sans font-extrabold text-white mb-2 tracking-tight">
                  {stat.percentage}
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-[#0B2545]/40 border border-white/10 shadow-xl mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">Market Growth & Pipeline Projection</h3>
                <p className="text-xs text-white/60 font-mono mt-1">2025 – 2029 Scalability Trajectory</p>
              </div>
              <BarChart3 className="w-5 h-5 text-white" />
            </div>

            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tractionData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.6)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.6)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0B2442', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
                  />
                  <Bar dataKey="value1" fill="#FFFFFF" radius={[4, 4, 0, 0]} name="Smart Data Analysis" />
                  <Bar dataKey="value2" fill="rgba(255,255,255,0.4)" radius={[4, 4, 0, 0]} name="Primary Data Collection" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Repeat Clients Bar */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-white" />
              <span>Returning & Repeat Clients</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {tractionData.repeatClients.map((client, cIdx) => (
                <div key={cIdx} className="p-3 rounded-lg bg-[#0B2545]/60 border border-white/10 font-sans font-extrabold text-sm text-white tracking-tight">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: PARTNERS */}
        <section id="partners" className="py-12 border-t border-white/10">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">PARTNERS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-2xl bg-[#0B2545]/40 border border-white/10 hover:border-white transition-colors duration-300 shadow-xl flex flex-col justify-between cursor-pointer backdrop-blur-sm"
              >
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-white tracking-tight mb-3">{partner.name}</h3>
                  <p className="font-sans font-extralight text-xs text-white/80 leading-relaxed tracking-wide mb-6">
                    {partner.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-xs text-white/80">
                  {partner.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-white" />
                      <a href={`mailto:${partner.email}`} className="hover:underline">{partner.email}</a>
                    </div>
                  )}
                  {partner.phone && partner.phone.map((ph, phIdx) => (
                    <div key={phIdx} className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <a href={`tel:${ph}`} className="hover:underline">{ph}</a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
