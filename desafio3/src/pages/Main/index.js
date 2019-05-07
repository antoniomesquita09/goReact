import React from 'react';

import SideBar from '../components/SideBar';
import Map from '../Map';

import { Container } from './styles';

const Main = () => (
  <Container>
    <SideBar />
    <Map />
  </Container>
);

export default Main;
