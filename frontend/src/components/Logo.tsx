import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src="/logo.png"
      alt="Tutobox"
      className={['object-contain', className].filter(Boolean).join(' ')}
    />
  );
};
