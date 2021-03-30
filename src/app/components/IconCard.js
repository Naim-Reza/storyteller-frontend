import React from "react";
import { Card, CardBody } from "reactstrap";

export default function IconCard({ icon, text, color }) {
  return (
    <Card>
      <CardBody style={{ borderBottom: "5px solid", borderBottomColor: color }}>
        <div className="d-flex align-items-center">
          <div style={{ flex: 1 }}>
            <img src={icon} alt="icon" style={{ width: "100%" }} />
          </div>
          <div style={{ flex: 3 }}>
            <h5
              className=" text-uppercase text-center px-2"
              style={{ color: color }}
            >
              {text}
            </h5>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
