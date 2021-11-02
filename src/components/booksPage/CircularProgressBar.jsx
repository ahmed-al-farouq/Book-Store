import React from 'react';
import {
  Circular,
  Inner,
  Bar,
  Progress,
} from './styles/circularProgressStyle';

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
