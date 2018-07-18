import * as React from 'react';

import { Grid, Row, Col } from './components/layout';
import Element from './components/elements/element';

export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={7} lg={8}>
            <Element>I'm an 8 column div!</Element>
          </Col>
          <Col xs={12} sm={12} md={5} lg={4}>
            <Element>I'm a 4 column div!</Element>
          </Col>
        </Row>
      </Grid>
    );
  }
}
