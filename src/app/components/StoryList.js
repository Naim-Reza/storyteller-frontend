import React from "react";
import { Col } from "reactstrap";
import StoryCard from "./StoryCard";

export default function StoryList() {
  return (
    <>
      <Col md={6} className="my-2">
        <StoryCard />
      </Col>
      <Col md={6} className="my-2">
        <StoryCard />
      </Col>
      <Col md={6} className="my-2">
        <StoryCard />
      </Col>
    </>
  );
}
