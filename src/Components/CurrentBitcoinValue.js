import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEuroSign,
  faDollarSign,
  faPoundSign,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";

export default function CurrentBitcoinValue(props) {
  const UsdValue = props.currentValue ? props.currentValue.USD.rate : "";
  const EurValue = props.currentValue ? props.currentValue.EUR.rate : "";
  const GbpValue = props.currentValue ? props.currentValue.GBP.rate : "";

  return (
    <div className="CurrentBitcoinValue ">
      <h2>Current Bitcoin price</h2>
      <div className="shadow-lg p-3 mb-5 bg-white rounded contentdiv">
        <Row>
          <Col className="alignLeft">
            <FontAwesomeIcon icon={faEuroSign} />
            <span> {EurValue}</span>
          </Col>
          <Col className="alignCenter">
            <FontAwesomeIcon icon={faDollarSign} />
            <span> {UsdValue}</span>
          </Col>
          <Col className="alignRight">
            <FontAwesomeIcon icon={faPoundSign} />
            <span> {GbpValue}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="separator" />
            {/* <Button
              variant=""
              className="reloadButton"
              onClick={props.reloadPrice}
            >
              <FontAwesomeIcon icon={faRedoAlt} /> <span> Reload</span>
            </Button> */}
            <div className="reloadDiv">
              <Button
                variant=""
                className="reloadButton"
                onClick={props.reloadPrice}
              >
                <FontAwesomeIcon icon={faRedoAlt} /> <span> Reload</span>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
