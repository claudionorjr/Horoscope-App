import { css } from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

const white = '#fff';
const title = '#2D2E2E';
const text = '#454747';

const regular = 'Roboto_400Regular';
const medium = 'Roboto_500Medium';
const bold = 'Roboto_700Bold';

export default {
  colors: {
    primary: '#9666D9',
    secondary: '#506AD4',

    success: '#12A454',
    warning: '#FF871C',
    attention: '#E83F58',

    white,
    title,
    text,
    background: '#222222',
  },
  fonts: {
    regular,
    medium,
    bold,
  },
  fontStyles: {
    white500: (size: number, lineHeight: number) => css`
      font-size: ${normalizePixel(size)}px;
      line-height: ${normalizePixel(lineHeight)}px;
      color: ${white};
      font-family: ${medium};
    `,
    white700: (size: number, lineHeight: number) => css`
      font-size: ${normalizePixel(size)}px;
      line-height: ${normalizePixel(lineHeight)}px;
      color: ${white};
      font-family: ${bold};
    `,
  },
  styles: {
    paddingHorizontal: (n: number) => css`
      padding-left: ${normalizePixel(n)}px;
      padding-right: ${normalizePixel(n)}px;
    `,
  },
};
