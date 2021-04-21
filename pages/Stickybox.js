
import React, { useState } from 'react';

import styled from 'styled-components';
import Stickybox from 'react-sticky-box';


const Wrapper = styled.div`
  display: flex;
  border: 1px solid green;
  height: 1000px;
  align-items: flex-start;
`;

const Leftside = styled.div`
  border: 1px solid red;
  width: 100%;
  heigth: 500px;
`;

const Rightside = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 250px;
`;


const StickyBoxCompo = () => {
  

  
  return (
    <Wrapper>
      <Leftside>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
        <h1>leftSIde</h1>
      </Leftside>
      <Stickybox>
      <Rightside>
        <h1>right side</h1>
      </Rightside>
      </Stickybox>
    </Wrapper>
  );
};

export default StickyBoxCompo;