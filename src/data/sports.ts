interface ImageAsset {
  src: string;
  width?: number;
  height?: number;
  format?: string;
}

const sportIconFiles: Record<string, ImageAsset> = import.meta.glob(
  '/src/assets/images/icons/sports/*.png',
  { eager: true, import: 'default' }
);

export const FEATURED_WIDTHS: Record<string, string> = {
  Baloncesto: 'w-[20%]',
  Futbol:    'w-[25%]',
  Padel:     'w-[15%]',
  Voleibol:  'w-[20%]',
};

const POSITIONS = [
  { top: '22%', left: '32%' },
  { top: '38%', left: '72%' },
  { top: '66%', left: '17%' },
  { top: '80%', left: '38%' },
];

function toName(path: string) {
  return path
    .split('/')
    .pop()!
    .replace(/\.png$/, '')
    .replace(/-/g, ' ');
}

function toIdKey(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export interface SportIcon {
  name: string;
  iconSrc: string;    
  idKey: string;
  isFeatured: boolean;
  featuredWidth?: string;
}

export const sportsIconData: SportIcon[] = Object.entries(sportIconFiles).map(
  ([path, imageAsset]) => {
    const name = toName(path);
    return {
      name,
      iconSrc: imageAsset.src, // Cambiado de 'url' a 'imageAsset.src'
      idKey: toIdKey(name),
      isFeatured: name in FEATURED_WIDTHS,
      featuredWidth: FEATURED_WIDTHS[name],
    };
  }
);

export const featuredSports = sportsIconData.filter((s) => s.isFeatured);
export const iconPositions = POSITIONS;
