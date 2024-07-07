// DynamicIcon.tsx
import React from 'react';
import iconMap from '@/app/types/iconMap';

interface DynamicIconProps {
  iconName: string;
  size?: number;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, size = 26 }) => {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} />;
};

export default DynamicIcon;
