// src/data/players.ts
export interface PlayerCardData {
  imageSrc: string;
  title1: string;
  title2: string;
}

export const playerCardData: PlayerCardData[] = [
  {
    imageSrc: '/src/assets/images/players/parejas.png',
    title1: 'Parejas',
    title2: 'de equipo',
  },
  {
    imageSrc: '/src/assets/images/players/amigos.png',
    title1: 'Amigos y',
    title2: 'conocidos',
  },
  {
    imageSrc: '/src/assets/images/players/abierto.png',
    title1: 'Abierto',
    title2: 'al público',
  },
  {
    imageSrc: '/src/assets/images/players/equipos.png',
    title1: 'Equipos y',
    title2: 'grupos',
  },
];
