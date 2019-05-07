import styled from 'styled-components/native';

export const Container = styled.View`
  height: 72%;
  background-color: ${props => props.color ? props.color : '#333'};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: #FFF;
`;
