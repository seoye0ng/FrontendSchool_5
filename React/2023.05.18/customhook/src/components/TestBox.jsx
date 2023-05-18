import React from 'react';
import { UseMouseLocation } from '../hooks/UseMouseLocation';

export default function TestBox() {
  const location = UseMouseLocation();

  return (
    <div style={{ backgroundColor: location.y > 200 ? 'royalblue' : 'hotpink', width: '100px', height: '100px' }}>TestBox</div>
  );
}
