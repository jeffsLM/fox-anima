import React, { useState } from 'react';
import { ButtonProps } from 'react-native'
import { LinearGradientColor, Play, Flag, Button as UIButton } from './styles';

interface ButtonComponentsProps extends ButtonProps {
  margin?: string;
}

const Button: React.FC<ButtonComponentsProps> = ({ title }) => {

  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <UIButton isFocused={isFocused} onFocus={handleOnFocus} onBlur={handleBlur} >
      <LinearGradientColor>
        <Play color="#FFF" fill="#FFF" size={24} />
        <Flag>{title}</Flag>
      </LinearGradientColor>
    </UIButton>
  );
}

export { Button };
