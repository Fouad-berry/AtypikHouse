'use client';

import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative w-screen h-[800px]">
      <Image
        src="/images/customer.jpg"
        alt="Background Image"
        style={{ objectFit: 'cover' }}      
        fill
      />
    </div>
  );
};

export default Landing;
