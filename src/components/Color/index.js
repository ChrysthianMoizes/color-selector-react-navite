import React from 'react';
import { connect } from 'react-redux';
import { Container, Title } from './styles';

const Color = ({ color }) => (
  <Container color={color.color}>
    <Title>{color.name ? color.name : 'Selecione uma cor'}</Title>
  </Container>
);

export default connect(state => ({ color: state.color.selectedColor }))(Color);

