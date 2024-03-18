import styled from 'styled-components';

type StyleProps = {
  $type?: 'success' | 'error' | 'warning';
};

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px;
  margin: 1rem;
  padding: 0.5rem;
  width: 33%;
`;

export const Title = styled.h2`
  margin: 0.5rem;
  font-weight: 400;
  text-align: left;
  text-decoration: underline;
`;

export const SavingsAmountContainer = styled.div`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: space-between;
`;

export const SavingsAmount = styled.h3`
  margin: 0.5rem;
  text-align: left;
  width: 50%;
`;

export const EditingContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const PoundSign = styled.span`
  color: dodgerblue;
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

export const ConfirmContainer = styled.span`
  align-self: center;
`;

export const ExplanationText = styled.p<StyleProps>`
  color: ${({ $type }) =>
    $type === 'success' ? '#00DFA2' : $type === 'error' ? '#EB4444' : 'black'};
  margin: 0.5rem;
  text-align: left;
`;

export const IssuesExplanation = styled.p`
  margin: 0.5rem;
  text-align: left;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
