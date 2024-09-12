'use client';

import React from 'react';
import Image from 'next/image';
import Container from './Container';

const Landing = () => {
  return (
    <Container>
    <div className="relative w-full h-[800px]">
      <Image
        src="/images/bg-lg.jpg"
        alt="Background Image"
        style={{ objectFit: 'contain' }}      
        fill
      />
    </div>
    </Container>
  );
};

export default Landing;
