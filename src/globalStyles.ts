import styled from 'styled-components';

type StyleProps = {
  $margin: string;
  $width: string;
};

export const Container = styled.div<StyleProps>`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px;
  margin: ${({ $margin }) => $margin};
  padding: 0.5rem;
  width: ${({ $width }) => $width};
`;
