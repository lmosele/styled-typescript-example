import styled from 'styled-components';

const Element = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props: Theme) => props.theme.colors.darkGray};
`;

export default Element;
