import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
} from "reactstrap";

export default function StoryCard() {
  return (
    <Card className="shadow">
      <CardHeader>
        <h5 className="mb-0">Story title goes here</h5>
        <small className="text-muted">Posted: 22nd March, 2021</small>
      </CardHeader>
      <CardBody>
        <CardText tag="p" className="text-justify">
          Dolore velit in occaecat tempor non ipsum velit officia ut. Velit
          laboris anim velit magna quis adipisicing aliquip nulla fugiat mollit
          culpa. Aliqua nostrud Lorem cupidatat sint non cillum non fugiat do
          id. Reprehenderit ex deserunt ut do magna culpa excepteur excepteur
          pariatur labore. Est pariatur ea aute amet non. Proident dolor aute
          esse et ullamco ut ut ut voluptate. Magna elit aliquip voluptate sint
          mollit pariatur laboris fugiat nostrud laboris eu incididunt laborum.
          Et est reprehenderit ullamco tempor sit adipisicing in reprehenderit
          ut excepteur dolore reprehenderit culpa proident. Irure adipisicing
          irure ullamco aute fugiat consequat commodo ad pariatur consectetur
          non. Elit ut ut ad ipsum consequat reprehenderit velit cupidatat
          adipisicing dolore esse ea elit. Quis pariatur officia officia nulla
          qui. Eu ea consectetur ea quis nostrud in et commodo fugiat irure eu
          cupidatat minim tempor. Commodo consectetur fugiat officia culpa ad
          deserunt aute magna irure sit ea adipisicing.
        </CardText>
      </CardBody>
      <CardFooter>
        <Button color="primary" className="text-uppercase mr-2" outline>
          Edit
        </Button>
        <Button color="danger" className="text-uppercase" outline>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
