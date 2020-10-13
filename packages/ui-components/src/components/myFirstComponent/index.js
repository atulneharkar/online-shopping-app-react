import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  color: blue;
`;

export const MyFirstComponent = ({text}) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  );
}

export default MyFirstComponent;