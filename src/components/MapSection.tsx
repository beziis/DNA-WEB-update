import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { companyProfile } from '../data';
import { MapPin, Navigation, ExternalLink, Building2, Phone, Compass, Info } from 'lucide-react';
import { motion } from 'motion/react';

// DNA TECH Office Coordinates (Eyobed Apartment, Kazanchis / Bambis, Addis Ababa, Ethiopia)
const OFFICE_LOCATION = {
  lat: 9.0178,
  lng: 38.7668,
};

export default function MapSection() {
  const [infoOpen, setInfoOpen] = useState(true);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');

  const apiKey =
    process.env.GOOGLE_MAPS_PLATFORM_KEY ||
    (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
    (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
    '';

  const hasValidKey = Boolean(apiKey) && apiKey !== 'YOUR_API_KEY';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 sm:p-8 rounded-2xl bg-[#0B2545]/60 border border-white/10 shadow-2xl relative overflow-hidden"
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
        <div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Find Us in Addis Ababa
          </h2>
          <p className="font-sans font-extralight text-xs sm:text-sm text-white/80 mt-1 tracking-wide">
            Visit our head office for in-person consultations, research briefings, and project kickoff meetings.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={companyProfile.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white text-[#0B2442] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all shadow-md cursor-pointer"
          >
            <span>Get Directions</span>
            <Navigation className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-inner h-[420px] bg-[#051329] group">
        {hasValidKey ? (
          <APIProvider apiKey={apiKey} version="weekly">
            <Map
              defaultCenter={OFFICE_LOCATION}
              defaultZoom={15}
              mapId="DNA_TECH_OFFICE_MAP"
              mapTypeId={mapType}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
              gestureHandling="greedy"
              disableDefaultUI={false}
            >
              <AdvancedMarker
                position={OFFICE_LOCATION}
                onClick={() => setInfoOpen(!infoOpen)}
                title={companyProfile.fullName}
              >
                <Pin background="#0B2442" glyphColor="#FFFFFF" borderColor="#FFFFFF" />
              </AdvancedMarker>

              {infoOpen && (
                <InfoWindow
                  position={OFFICE_LOCATION}
                  onCloseClick={() => setInfoOpen(false)}
                >
                  <div className="p-2 max-w-xs text-slate-900 font-sans">
                    <div className="font-bold text-sm text-[#0B2442] flex items-center space-x-1.5 mb-1">
                      <Building2 className="w-4 h-4 text-[#0B2442] flex-shrink-0" />
                      <span>{companyProfile.shortName}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-tight mb-2">
                      {companyProfile.address}
                    </p>
                    <div className="text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-200 flex items-center justify-between">
                      <span>{companyProfile.phone}</span>
                      <a
                        href={companyProfile.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#0B2442] hover:underline font-bold inline-flex items-center space-x-0.5"
                      >
                        <span>Open Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Google Maps Interactive Iframe Fallback with High Precision */
          <div className="relative w-full h-full">
            <iframe
              title="DNA TECH Office Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=9.0178,38.7668&z=16&output=embed"
            />

            {/* Overlaid Location Badge */}
            <div className="absolute top-4 left-4 z-10 p-3.5 rounded-xl bg-[#0B2545]/90 border border-white/20 text-white shadow-xl backdrop-blur-md max-w-xs">
              <div className="flex items-center space-x-2 text-xs font-bold text-white mb-1">
                <MapPin className="w-4 h-4 text-white" />
                <span>{companyProfile.shortName} Headquarters</span>
              </div>
              <p className="text-[11px] text-white/80 leading-tight">
                {companyProfile.address}
              </p>
            </div>
          </div>
        )}

        {/* Map Type Toggle Overlay */}
        {hasValidKey && (
          <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-1 bg-[#051329]/90 backdrop-blur-md p-1 rounded-lg border border-white/20 text-xs font-mono">
            <button
              onClick={() => setMapType('roadmap')}
              className={`px-2.5 py-1 rounded transition-colors ${
                mapType === 'roadmap' ? 'bg-white text-[#0B2442] font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              Map
            </button>
            <button
              onClick={() => setMapType('satellite')}
              className={`px-2.5 py-1 rounded transition-colors ${
                mapType === 'satellite' ? 'bg-white text-[#0B2442] font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              Satellite
            </button>
          </div>
        )}
      </div>

      {/* Address Quick Stats Bar Below Map */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-[#051329]/80 border border-white/10 flex items-start space-x-3">
          <Building2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-mono text-white/50 uppercase font-bold">Office Address</div>
            <div className="text-xs text-white/90 font-medium mt-0.5">{companyProfile.address}</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#051329]/80 border border-white/10 flex items-start space-x-3">
          <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-mono text-white/50 uppercase font-bold">Direct Line</div>
            <div className="text-xs text-white/90 font-mono font-bold mt-0.5">{companyProfile.phone}</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#051329]/80 border border-white/10 flex items-start space-x-3">
          <Navigation className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-mono text-white/50 uppercase font-bold">City & Region</div>
            <div className="text-xs text-white/90 font-medium mt-0.5">Bambis - Kazanchis Corridor, Addis Ababa</div>
          </div>
        </div>
      </div>

      {/* Secret Key Note for Developers / Admins */}
      {!hasValidKey && (
        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/60 flex items-center space-x-2">
          <Info className="w-4 h-4 text-white flex-shrink-0" />
          <span>
            Tip: Add your <code>GOOGLE_MAPS_PLATFORM_KEY</code> in Settings &rarr; Secrets to enable custom Google Maps JavaScript SDK rendering.
          </span>
        </div>
      )}
    </motion.div>
  );
}
