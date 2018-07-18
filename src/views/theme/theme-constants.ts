/* tslint:disable object-literal-sort-keys */
import { css } from 'styled-components';
import { IthemeInterface } from '../../types/theme-types';

const theme: IthemeInterface = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 3, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 42, // rem
      md: 61, // rem
      lg: 76,  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75,  // em
    },
  },
  colors: {
    gray: '#787878',
    lightGray: `#D3D3D3`,
    lighterGray: '#F5F5F5',
    darkGray: '#696969',
    darkerGray: '#202020',
  },
};

export default theme;
