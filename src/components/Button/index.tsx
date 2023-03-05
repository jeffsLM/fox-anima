import React, { useState } from 'react';
import { ButtonProps } from 'react-native'
import { LinearGradientColor, Play, Flag, Button as UIButton, Content } from './styles';

interface ButtonComponentsProps extends ButtonProps {
  title: string;
  width: string;
  mb?: string;
  active?: boolean;
}

const Button: React.FC<ButtonComponentsProps> = ({ title, active, width, mb = false, ...props }) => {

  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <UIButton isFocused={isFocused} active={active} width={width} mb={mb} onFocus={handleOnFocus} onBlur={handleBlur} {...props}>
      {active ? (<LinearGradientColor>
        <Play color="#FFF" fill="#FFF" size={24} />
        <Flag>{title}</Flag>
      </LinearGradientColor>) : <Content>
        <Play color="#FFF" fill="#FFF" size={24} />
        <Flag>{title}</Flag>
      </Content>}
    </UIButton>
  );
}

export { Button };
