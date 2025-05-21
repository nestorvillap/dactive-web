// src/data/players.ts
export interface PlayerCardData {
  imageSrc: string;
  title1: string;
  title2: string;
}

// Usamos import.meta.glob para obtener las rutas procesadas por Astro/Vite
// La opción { eager: true } carga los módulos inmediatamente.
// La opción { import: 'default' } nos da la URL de la imagen directamente.
const playerImageModules = import.meta.glob<string>('/src/assets/images/players/*.png', { eager: true, import: 'default' });

export const playerCardData: PlayerCardData[] = [
  {
    imageSrc: playerImageModules['/src/assets/images/players/parejas.png'],
    title1: 'Parejas',
    title2: 'de equipo',
  },
  {
    imageSrc: playerImageModules['/src/assets/images/players/amigos.png'],
    title1: 'Amigos y',
    title2: 'conocidos',
  },
  {
    imageSrc: playerImageModules['/src/assets/images/players/abierto.png'],
    title1: 'Abierto',
    title2: 'al público',
  },
  {
    imageSrc: playerImageModules['/src/assets/images/players/equipos.png'],
    title1: 'Equipos y',
    title2: 'grupos',
  },
];
