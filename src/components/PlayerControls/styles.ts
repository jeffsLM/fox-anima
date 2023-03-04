import styled from 'styled-components';
import { View, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  background: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
`;

type ContainerProps = {
  isFocused?: boolean;
};
export const Toach = styled(TouchableOpacity)<ContainerProps>`
  padding: 3px;
  ${(props) =>
    props.isFocused &&
    `
    border: 3px solid #fff;
    border-radius: 5px;
    padding: 0px;
    `};
`;

// onFocus={() => { setIsFocused({ ...isFocused, skipForwards: true }) }}
// onBlur={() => { setIsFocused({ ...isFocused, skipForwards: false }) }}
