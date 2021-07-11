import Theme from '../Elements/Themes';

interface AllCustomThemes {
  colors: typeof Theme.colors;
  fonts: typeof Theme.fonts;
  fontStyles: typeof Theme.fontStyles;
  styles: typeof Theme.styles;
}

declare module 'styled-components' {
  export interface DefaultTheme extends AllCustomThemes {}
}
