const getRgbFromColor = (color: string) => {
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    const [, r, g, b] =
      color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      ) || [];
    return { r: Number(r), g: Number(g), b: Number(b) };
  }
  // If hex --> Convert it to RGB: http://gist.github.com/983661
  const rgbColor = +`0x${color
    .slice(1)
    .replace(color.length < 5 ? /./g : '', '$&$&')}`;
  return {
    // eslint-disable-next-line no-bitwise
    r: rgbColor >> 16,
    // eslint-disable-next-line no-bitwise
    g: (rgbColor >> 8) & 255,
    // eslint-disable-next-line no-bitwise
    b: rgbColor & 255,
  };
};

export const getHspFromColor = (
  color: string
): { hsp: number; contrast: 'light' | 'dark' } => {
  // https://awik.io/determine-color-bright-dark-using-javascript/
  const { r, g, b } = getRgbFromColor(color.replace(/"/gi, ''));

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  const contrast = hsp > 127.5 ? 'light' : 'dark';
  return { hsp, contrast };
};
