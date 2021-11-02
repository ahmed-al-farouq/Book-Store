import React from 'react';
import styled from 'styled-components';

const Circular = styled.div`
  height:100px;
  width: 100px;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  height: 80px;
  width: 80px;
  margin: -40px 0 0 -40px;
  background: #fff;
  border-radius: 100%;
`;

const Bar = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #379cf6;
  border-radius: 100%;
`;

const Progress = styled.div`
  position: absolute;
  z-index: ${(props) => props.right || 1};
  height: 100%;
  width: 100%;
  border-radius: 100%;
  clip: rect(0px, 100px, 100px, 50px);
  background: ${(props) => props.rightColor || '#4158d0'};
  transform: ${(props) => props.rightRotate || 'none'};
`;

function CirclularProgressBar() {
  return (
    <Circular>
      <Inner />
      <div className="circle">
        <Bar>
          <Progress />
        </Bar>
        <Bar>
          <Progress right="3" rightRotate="rotate(180deg)" rightColor="#f5f6fa" />
        </Bar>
      </div>
    </Circular>
  );
}

export default CirclularProgressBar;
