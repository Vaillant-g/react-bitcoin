import './App.css';
import React, { Component } from 'react';
import DatePickers from './Components/DatePickers';
import Display from './Components/Display';
import { Row, Col, Container } from 'react-bootstrap';
import CurrentBitcoinValue from './Components/CurrentBitcoinValue'
import axios from 'axios';
import moment from 'moment'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      startDate: '2020-01-01',
      endDate: '2020-12-18'
    };
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
    this.loadCurrentBitcoinPrice();


  }

  loadCurrentBitcoinPrice = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        console.log(response.data.bpi.EUR.rate);
        this.setState({ currentValue: response.data.bpi })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  setStartDate = (newStartDate) => {
    console.log(newStartDate)
    this.setState({ startDate: newStartDate });
    this.makeChartData();
  }

  setEndDate = (newEndDate) => {
    console.log(newEndDate)
    this.setState({ endDate: newEndDate });
    this.makeChartData();
  }

  makeChartData = () => {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=' + this.state.startDate + '&end=' + this.state.endDate)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
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
              <CurrentBitcoinValue currentValue={this.state.currentValue} reloadPrice={this.loadCurrentBitcoinPrice}></CurrentBitcoinValue>
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