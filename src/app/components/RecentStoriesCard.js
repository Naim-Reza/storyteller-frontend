import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

export default function RecentStoriesCard() {
  return (
    <Card className="shadow">
      <CardHeader>
        <h4>Recent Stories</h4>
      </CardHeader>
      <CardBody>
        <ListGroup>
          <ListGroupItem style={{ cursor: "pointer" }}>
            <ListGroupItemHeading>Story title</ListGroupItemHeading>
            <ListGroupItemText className="text-muted" tag="small">
              Posted 3 days ago
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}
