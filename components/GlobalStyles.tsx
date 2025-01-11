import React from 'react';
import { View } from 'react-native';

export const GlobalStyles = ({ children }: { children: React.ReactNode }) => {
  return <View className="flex-1 font-sans">{children}</View>;
};
