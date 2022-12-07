import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import calculate from './logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: 0, operation: '' });

  const onClickHandler = (elem) => {
    const value = elem.getAttribute('value');
    setState(calculate(state, value));
  };

  const { total, next } = state;

  return (
    <CalculatorContainer className="calculator-container">
      <Display>
        {next || total || 0}
      </Display>
      <Clear onClick={(e) => onClickHandler(e.target)} value="AC">AC</Clear>
      <PlusMinus onClick={(e) => onClickHandler(e.target)} value="+/-">+/-</PlusMinus>
      <Percentage onClick={(e) => onClickHandler(e.target)} value="%">%</Percentage>
      <Divide onClick={(e) => onClickHandler(e.target)} value="÷">÷</Divide>
      <Multiple onClick={(e) => onClickHandler(e.target)} value="x">*</Multiple>
      <Minus onClick={(e) => onClickHandler(e.target)} value="-">-</Minus>
      <Add onClick={(e) => onClickHandler(e.target)} value="+">+</Add>
      <Equal onClick={(e) => onClickHandler(e.target)} value="=">=</Equal>
      <Zero onClick={(e) => onClickHandler(e.target)} value="0">0</Zero>
      <Number onClick={(e) => onClickHandler(e.target)} value="7">7</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="8">8</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="9">9</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="4">4</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="5">5</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="6">6</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="1">1</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="2">2</Number>
      <Number onClick={(e) => onClickHandler(e.target)} value="3">3</Number>
      <Dot onClick={(e) => onClickHandler(e.target)} value=".">.</Dot>
    </CalculatorContainer>
  );
}

export default Calculator;

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-template-rows: repeat(6, 4rem);
  border: 1px solid ${colors.gray};
  width: fit-content;
  height: fit-content;

`;

const Display = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 0.8rem;
  align-items: center;
  border: 1px solid ${colors.gray};
  color: ${colors.white};
  grid-column: 1 / span 4;
  background: ${colors.chrome};
`;

const Clear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color: ${colors.black};
  grid-column: 1 / 1;
  background: ${colors.ash};
`;

const PlusMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-column: 2 / 2;
  background: ${colors.ash};
`;

const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-column: 3 / 3;
  background: ${colors.ash};
`;

const Divide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Multiple = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 3 / 3;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Minus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 4 / 4;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 5 / 5;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Equal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 6 / span 1;
  grid-column: 4 / 4;
  background: ${colors.lightgreen};
`;

const Zero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 6 / span 1;
  grid-column: 1 / span 2;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
`;

const Dot = styled.div`
display: flex;
justify-content: center;
border: 1px solid ${colors.gray};
align-items: center;
color:  ${colors.black} ;
`;
