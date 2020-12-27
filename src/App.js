import "./App.css";
import React, { Component } from "react";
import DatePickers from "./Components/DatePickers";
import Display from "./Components/Display";
import DisplayBetween from "./Components/DisplayBetween";
import { Row, Col, Container } from "react-bootstrap";
import CurrentBitcoinValue from "./Components/CurrentBitcoinValue";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthData: null,
      betweenData: null,
      currentValue: 0,
      startDate: "2020-09-10",
      endDate: "2020-12-18",
    };
  }

  componentDidMount() {
    this.loadMonthData();
    this.loadCurrentBitcoinPrice();
    this.loadBetweenData();
  }

  loadMonthData = () => {
    axios
      .get("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then((response) => {
        this.setState({ monthData: response.data.bpi });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  loadCurrentBitcoinPrice = () => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.setState({ currentValue: response.data.bpi });
      })
      .catch(function (error) {
      });
  };

  setStartDate = (newStartDate) => {
    this.setState({ startDate: newStartDate });
    this.loadBetweenData();
  };

  setEndDate = (newEndDate) => {
    this.setState({ endDate: newEndDate });
    this.loadBetweenData();
  };

  loadBetweenData = () => {
    axios
      .get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=" +
          this.state.startDate +
          "&end=" +
          this.state.endDate
      )
      .then((response) => {
        this.setState({ betweenData: response.data.bpi });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Container className="App">
          <Row>
            <Col>
              <h1>React-Bitcoin</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <CurrentBitcoinValue
                currentValue={this.state.currentValue}
                reloadPrice={this.loadCurrentBitcoinPrice}
              ></CurrentBitcoinValue>
            </Col>
          </Row>
          <Row>
            <Col>
              <Display data={this.state.monthData}></Display>
            </Col>
          </Row>
          <Row>
            <Col>
              <DatePickers
                changeDateStart={this.setStartDate}
                changeDateEnd={this.setEndDate}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
              ></DatePickers>
            </Col>
          </Row>
          <Row>
            <Col>
              <DisplayBetween
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                data={this.state.betweenData}
              ></DisplayBetween>
            </Col>
          </Row>
        </Container>
        <footer className="bg-light text-center text-lg-start fixed-bottom">
          <div className="text-center p-3">
            Gautier Vaillant 2020{" "}
            <a href="https://github.com/Vaillant-g">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>
              {" | "}
              {/* https://www.coindesk.com/coindesk-api */}
              Powered by
              <a href="https://www.coindesk.com/price/bitcoin"> CoinDesk</a>'s
              API
            </span>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
