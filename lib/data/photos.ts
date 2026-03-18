export interface Photo {
  id: string;
  label: string;
}

export const HOSTEL_PHOTOS: Photo[] = [
  { id: "501",  label: "Bar del hostel" },
  { id: "502",  label: "Escalera con murales de rock" },
  { id: "503",  label: "Habitación privada" },
  { id: "504",  label: "Sala de música y esparcimiento" },
  { id: "507",  label: "Terraza con ping pong" },
  { id: "508",  label: "Dormitorio compartido" },
  { id: "509",  label: "Dormitorio compartido" },
  { id: "5010", label: "Dormitorio compartido" },
  { id: "5013", label: "Huéspedes en el hostel" },
  { id: "5015", label: "Recepción con murales" },
  { id: "5017", label: "Recepción y entrada" },
  { id: "5018", label: "Decoración vintage" },
  { id: "5020", label: "Baño" },
  { id: "5021", label: "Bar del hostel" },
];

export const ROSARIO_PHOTOS: Photo[] = [
  { id: "506",  label: "Costanera de Rosario" },
  { id: "5011", label: "Arquitectura histórica de Rosario" },
  { id: "5012", label: "Plazas de Rosario" },
  { id: "5014", label: "Monumento a la Bandera al atardecer" },
  { id: "5016", label: "Monumento a la Bandera de noche" },
];

export const GALLERY_PHOTOS: Photo[] = [...HOSTEL_PHOTOS, ...ROSARIO_PHOTOS];
