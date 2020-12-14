import './App.css';
import React, { Component } from 'react';
import DatePickers from './Components/DatePickers';
import Display from './Components/Display';
import { Row, Col, Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '2020-01-01',
      endDate: '2020-12-18'
    };
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  setStartDate = (newStartDate) => {
    console.log(newStartDate)
    this.setState({ startDate: newStartDate });
  }

  setEndDate = (newEndDate) => {
    this.setState({ endDate: newEndDate });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>React-Bitcoin</h1>
              <p>Powered by <a href="https://www.coindesk.com/coindesk-api">CoinDesk</a></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <DatePickers changeDateStart={this.setStartDate} changeDateEnd={this.setEndDate} startDate={this.state.startDate} endDate={this.state.endDate} ></DatePickers>
            </Col>
          </Row>
          <Row>
            <Col>
              <Display
                startDate={this.state.startDate}
                endDate={this.state.endDate}>
              </Display>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default App;

