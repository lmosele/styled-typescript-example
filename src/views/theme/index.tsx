import { css } from 'styled-components';
import normalize from './normalize';
import theme from './theme-constants';

// I pass through my js-ified normalize file with my theme object here
// I also create some basic styles to append during the app bootstrapping process
const baseStyles = css`
 * {
    box-sizing: border-box;
    font-family: 'Lato', 'Verdana', 'sans-serif';
    color: black;
    &:before, &:after {
      box-sizing: border-box;
    }
  }
`;

export default theme;
export { normalize, baseStyles };
