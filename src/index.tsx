import * as React from 'react';
import * as ReactDOM from 'react-dom';

import configureStore from './state/store';

import Page from './views/Page';

import { injectGlobal, ThemeProvider } from 'styled-components';
import theme, { baseStyles, normalize } from './views/theme';

// Initializes global styles
export const mergeGlobalStyles = injectGlobal`
  ${normalize}
  ${baseStyles}
`;

export default class Root extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Page/>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
