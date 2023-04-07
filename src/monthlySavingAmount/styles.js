import { Button, Input } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
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

export const SavingsAmount = styled.p`
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

export const StyledInput = styled(Input)`
  color: dodgerblue;
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

export const ConfirmContainer = styled.span`
  align-self: center;
`;

export const SavingAmountButton = styled(Button)`
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

export const IssuesTitle = styled.h3`
  color: red;
  margin: 0.5rem;
  font-weight: 400;
  text-align: left;
  text-decoration: underline;
`;

export const IssuesExplanation = styled.p`
  margin: 0.5rem;
  text-align: left;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
