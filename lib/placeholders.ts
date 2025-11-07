const COLORS = [
  'orange',
  'teal',
  'brown',
  'purple',
  'sky',
  'aqua',
  'bisque',
  'green',
  'blue',
  'indigo',
  'amber',
  'lime',
  'crimson',
  'coral',
  'fuchsia',
  'gold',
  'hotpink',
  'orchid',
  'sienna',
  'slateblue',
  'slategray',
  'salmon',
  'chocolate',
  'peru',
  'seagreen',
  'darkcyan',
  'mediumseagreen',
  'navy',
  'maroon',
  'olive',
  'turquoise',
  'lavender',
  'plum',
  'khaki',
  'tan',
];

export function placeholderImage(size: string, text: string, color?: string) {
  const bg = color ?? COLORS[Math.floor(Math.random() * COLORS.length)];
  const fg = 'white';
  return `https://placehold.co/${size}/${bg}/${fg}?text=${encodeURIComponent(text)}`;
}

export default placeholderImage;
