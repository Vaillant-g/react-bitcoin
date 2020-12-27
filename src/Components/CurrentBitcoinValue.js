import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEuroSign,
  faDollarSign,
  faPoundSign,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import CurrentDate from "./CurrentDate";
import moment from "moment";

export default function CurrentBitcoinValue(props) {
  const UsdValue = props.currentValue ? props.currentValue.USD.rate : "";
  const EurValue = props.currentValue ? props.currentValue.EUR.rate : "";
  const GbpValue = props.currentValue ? props.currentValue.GBP.rate : "";
  var currentDate = moment().format("LLL");

  const reload = () => {
    props.reloadPrice();

    const event = new Date();
    console.log(event.toLocaleTimeString("en-US"));
    currentDate = moment().format("LLL");
  };

  return (
    <div className="CurrentBitcoinValue ">
      <h2>Current Bitcoin price</h2>
      <div className="shadow-lg p-3 mb-5 bg-white rounded contentdiv">
        <Row>
          <Col className="alignLeft" xs={12}>
            <FontAwesomeIcon icon={faEuroSign} />
            <span> {EurValue}</span>
          </Col>
          <Col className="alignCenter" xs={12}>
            <FontAwesomeIcon icon={faDollarSign} />
            <span> {UsdValue}</span>
          </Col>
          <Col className="alignRight" xs={12}>
            <FontAwesomeIcon icon={faPoundSign} />
            <span> {GbpValue}</span>
          </Col>
        </Row>
        <hr className="separator" />
        <Row>
          <Col>
            <CurrentDate currentDate={currentDate.toString()}></CurrentDate>
          </Col>
          <Col className="alignRight">
            <span className="reloadButton" onClick={reload}>
              <FontAwesomeIcon icon={faRedoAlt} /> <span> Reload</span>
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}
