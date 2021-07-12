import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from 'styled-components/native';
import normalizePixel from './normalizePixel';
import theme from '../Elements/Themes';

interface Props {
  name: string;
}

const Manager = ({ name }: Props) => {
  const { colors } = useTheme();
  switch (name) {
    case 'Áries':
      return (
        <MaterialCommunityIcons
          name="zodiac-aries"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Touro':
      return (
        <MaterialCommunityIcons
          name="zodiac-taurus"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Gêmeos':
      return (
        <MaterialCommunityIcons
          name="zodiac-gemini"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Câncer':
      return (
        <MaterialCommunityIcons
          name="zodiac-cancer"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Leão':
      return (
        <MaterialCommunityIcons
          name="zodiac-leo"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Virgem':
      return (
        <MaterialCommunityIcons
          name="zodiac-virgo"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Libra':
      return (
        <MaterialCommunityIcons
          name="zodiac-libra"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Escorpião':
      return (
        <MaterialCommunityIcons
          name="zodiac-scorpio"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Capricórnio':
      return (
        <MaterialCommunityIcons
          name="zodiac-capricorn"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Aquário':
      return (
        <MaterialCommunityIcons
          name="zodiac-aquarius"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Peixes':
      return (
        <MaterialCommunityIcons
          name="zodiac-pisces"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case 'Sagitário':
      return (
        <MaterialCommunityIcons
          name="zodiac-sagittarius"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    case '':
      return (
        <MaterialCommunityIcons
          name="zodiac-sagittarius"
          size={normalizePixel(24)}
          color={colors.white}
        />
      );
    default:
      return <></>;
  }
};

const getIconByName = (name: string) => {
  return (
    <ThemeProvider theme={theme}>
      <Manager name={name} />
    </ThemeProvider>
  );
};

export default getIconByName;
