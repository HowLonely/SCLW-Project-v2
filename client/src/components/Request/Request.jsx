import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export const Request = ({ req }) => {
  return (
    <Accordion defaultActiveKey="0" className="">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="">
          <div className="me-2">
            <Badge bg="secondary" pill>
              {req.status == 'p' ? 'Pendiente': req.stats == 'a'}
            </Badge>
          </div>
          <div className="mt-2 me-2">
            <h5>{req.title}</h5>
          </div>
          <div className="me-2">
            <Badge bg="info">
              {`${req.date.getDay()}-${req.date.getMonth()}-${req.date.getFullYear()}`}
            </Badge>
          </div>
        </Accordion.Header>
        <Accordion.Body className="">
          <div className="d-flex align-items-center flex-wrap">
            <h6 className="p-2">
              <b>{req.employee}</b>
            </h6>
            <Badge bg="primary" className="mb-2">
              {req.faena}
            </Badge>
          </div>
          <ListGroup as="ol">
            <ListGroup.Item as="li">
              <div className="d-flex gap-3 align-items-center">
                <Badge bg="warning">Motivo</Badge>
                <span>{req.reason}</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div className="d-flex gap-2 mt-3">
            <Button variant="success">Aprobar</Button>{" "}
            <Button variant="danger">Rechazar</Button>{" "}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
