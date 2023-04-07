import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 500;
`;

const Header = () => (
  <header className="App-header">
    <Title>Savings Planner</Title>
  </header>
);

export default Header;
