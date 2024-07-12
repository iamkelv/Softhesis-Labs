export const colors = {
  pink100: '#b51749',
  pink_T1: '#B2255F1A',
  pink_T2: '#F4E3E9',
  pink_T3: '#F9EFF3',
  pink200: '#e32662',
  pink_T4: '#e84a7c',
  white: '#ffffff',
  black: '#000000',
  grey100: '#323232',
  grey200: '#575757',
  grey300: '#7D7D7D',
  grey330: '#7d7d7d73',
  grey400: '#2B0310',
  lightBg: '#FAF3F5',
  yellow: '#ECB22E',
  blue: '#074183',
};

export const generateCSSVariables = () => {
  return `
    :root {
      ${Object.entries(colors)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('\n')}
    }
  `;
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = generateCSSVariables();
  document.head.appendChild(style);
}
