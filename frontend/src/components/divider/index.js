import React from 'react';

const BLUE_GRADIENT = 'linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%)';

export const Divider = ({ height = '150px' }) => {
  return (
    <div style={{ 
      width: '100%',
      height: height,
      background: BLUE_GRADIENT,
      clipPath: 'path("M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z")',
      margin: 0,
      padding: 0
    }} />
  );
};