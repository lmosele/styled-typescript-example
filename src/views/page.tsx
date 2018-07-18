import * as React from 'react';

import { Grid, Row, Col } from './components/layout';

export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={7} lg={8}>
            I'm an 8 column grid
          </Col>
          <Col xs={12} sm={12} md={5} lg={4}>
            I'm a 4 column grid
          </Col>
        </Row>
      </Grid>
    );
  }
}
