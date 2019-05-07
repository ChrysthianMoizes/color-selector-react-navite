import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, List } from './styles';

import * as ColorActions from '../../store/actions/color';

const Selector = ({ colors, dispatch }) => (
  <Container>
    <List>
      {colors.map(color => (
        <Card
          key={color.id}
          color={color.color}
          onPress={() => dispatch(ColorActions.selectColor(color))}
        />
      ))}
    </List>
  </Container>
);

export default connect(state => {
  return {
    colors: state.color.colors
  }
})(Selector);

