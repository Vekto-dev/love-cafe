"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const HOSTEL = { lat: -32.9468, lng: -60.6393 };

const NEARBY_POIS = [
  { name: "Monumento a la Bandera", lat: -32.9440, lng: -60.6310 },
  { name: "Costanera del Paraná", lat: -32.9420, lng: -60.6350 },
  { name: "Barrio Pichincha", lat: -32.9380, lng: -60.6500 },
  { name: "Terminal de Ómnibus", lat: -32.9460, lng: -60.6520 },
  { name: "Peatonal Córdoba", lat: -32.9470, lng: -60.6360 },
];

export function MiniMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    import("leaflet").then((L) => {
      if (!mapRef.current || mapInstance.current) return;

      const map = L.map(mapRef.current, {
        center: [HOSTEL.lat, HOSTEL.lng],
        zoom: 15,
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

      // Main hostel marker
      const hostelIcon = L.divIcon({
        className: "",
        html: `<div style="width:20px;height:20px;background:#7C3AED;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.5);"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      L.marker([HOSTEL.lat, HOSTEL.lng], { icon: hostelIcon })
        .addTo(map)
        .bindTooltip("Cool Raúl Rock'n Hostel", {
          permanent: false,
          direction: "top",
          offset: [0, -12],
          className: "leaflet-tooltip-coolraul",
        });

      // POI markers
      const poiIcon = L.divIcon({
        className: "",
        html: `<div style="width:10px;height:10px;background:#F59E0B;border:2px solid white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      NEARBY_POIS.forEach((poi) => {
        L.marker([poi.lat, poi.lng], { icon: poiIcon })
          .addTo(map)
          .bindTooltip(poi.name, {
            permanent: false,
            direction: "top",
            offset: [0, -8],
          });
      });

      mapInstance.current = map;
    });

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="minimap-container w-full h-full"
      aria-hidden="true"
    />
  );
}
