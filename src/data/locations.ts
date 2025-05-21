// src/data/locations.ts
export interface LocationCardData {
  id: string;
  type?: 'detail';
  position: { top: string; left: string };
  widthClass: string;
  // para tarjetas genéricas
  backgroundImageSrc?: string;
  aspectRatioClass?: string;
  subtitle?: string;
  subtitleBgColor?: string;
  // para tarjeta detail
  cardBgColor?: string;
  topLeftSubtitleText?: string;
  circularImageSrc?: string;
  titleText?: string;
  mainSubtitleText?: string;
  buttonText?: string;
}

export const locationCardsData: LocationCardData[] = [
  {
    id: 'pub',
    backgroundImageSrc: '/src/assets/images/locations/pub.png',
    subtitle: 'Pub/Recreativos',
    position: { top: '30%', left: '10%' },
    widthClass: 'w-[20%]',
    aspectRatioClass: 'aspect-[231/151]',
    subtitleBgColor: 'bg-primary',
  },
  {
    id: 'urb',
    backgroundImageSrc: '/src/assets/images/locations/urbanizaciones.png',
    subtitle: 'Urbanizaciones',
    position: { top: '0%', left: '50%' },
    widthClass: 'w-[20%]',
    aspectRatioClass: 'aspect-[205/160]',
    subtitleBgColor: 'bg-secondary',
  },
  {
    id: 'public',
    backgroundImageSrc: '/src/assets/images/locations/zonasPublicas.png',
    subtitle: 'Zonas Públicas',
    position: { top: '70%', left: '45%' },
    widthClass: 'w-[20%]',
    aspectRatioClass: 'aspect-[244/197]',
    subtitleBgColor: 'bg-secondary',
  },
  // Tarjeta de detalle
  {
    id: 'club',
    type: 'detail',
    position: { top: '25%', left: '40%' },
    widthClass: 'w-[32%]',
    cardBgColor: 'bg-white',
    topLeftSubtitleText: 'Club/Centro Deportivo',
    circularImageSrc: '/src/assets/images/locations/zonasPublicas.png',
    titleText: 'Club deportivo Masfutbol y acción',
    mainSubtitleText:
      'Ofrecemos espacios para partidos, potenciando el rendimiento de cada jugador.',
    buttonText: 'Perfil del espacio',
  },
];

export const mapPinPositions = [
  { top: '42%', left: '47%' },
  { top: '42%', left: '50%' },
  { top: '48%', left: '47%' },
];
