export interface PlayerCardData {
  imageSrc: string;
  title1: string;
  title2: string;
}

interface PlayerImageAsset { src: string }

const playerImageModules = import.meta.glob<PlayerImageAsset>('/src/assets/images/players/*.png', { eager: true, import: 'default' });

export const playerCardData: PlayerCardData[] = [
  {
    imageSrc: playerImageModules['/src/assets/images/players/parejas.png'].src,
    title1: 'Parejas',
    title2: 'de equipo',
  },
  {
    imageSrc: playerImageModules['/src/assets/images/players/amigos.png'].src,
    title1: 'Amigos y',
    title2: 'conocidos',
  },
  {
    imageSrc: playerImageModules['/src/assets/images/players/abierto.png'].src,
    title1: 'Abierto',
    title2: 'al público',
  },
  {
    imageSrc: playerImageModules['/src/assets/images/players/equipos.png'].src,
    title1: 'Equipos y',
    title2: 'grupos',
  },
];
