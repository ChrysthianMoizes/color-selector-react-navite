import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  background-color: #FFF;
  height: 28%;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${props => props.color ? props.color : '#000'};
  height: 60px;
  width: ${Dimensions.get('window').width - 30};
  margin-top: 15px;
  border-radius: 4px;
`;

export const List = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 }
})`
  flex: 1;
  padding-bottom: 10px;
`;
