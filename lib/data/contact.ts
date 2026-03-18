export const CONTACT = {
  whatsapp: "5493416771443",
  whatsappDisplay: "+54 9 341 677-1443",
  address: "San Lorenzo 1670",
  city: "Rosario, Santa Fe, Argentina",
  postalCode: "S2000ART",
  phone: "+5493416771443",
  instagram: "https://www.instagram.com/coolraulrockandhostel/",
  facebook: "https://www.facebook.com/CoolRaulHostelRock/",
  tripadvisor: "https://www.tripadvisor.com.ar/Hotel_Review-g312809-d1062947-Reviews-Cool_Raul_Hostel-Rosario_Province_of_Santa_Fe_Litoral.html",
  googleMaps: "https://www.google.com/maps/place/COOL+RAúL+ROCK'N+HOSTEL/",
  booking: "https://www.booking.com/hotel/ar/cool-raul-rock-hostel.es.html",
  hostelworld: "https://www.hostelworld.com/es/albergues/p/93936/cool-raul-rock-n-hostel/",
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
