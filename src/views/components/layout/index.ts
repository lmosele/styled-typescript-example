const Layout = require('react-styled-flexboxgrid');
import styled from 'styled-components';

export const Grid: any = Layout.Grid;
export const Row: any = Layout.Row;
export const Col: any = Layout.Col;

export const FullWidth: any = styled(Grid)`
  width: 100%;
  padding: 0;
`;
