import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Darkmode } from "../../components/Darkmode/Darkmode";

export const LoggedNavbar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">SCLW</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Darkmode />

                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ellian Troncoso T
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">👤 Tu Perfil</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">⚙️ Configuración</Nav.Link>
                  <hr />
                  <Nav.Link href="" className="link-danger">
                    Cambiar contraseña
                  </Nav.Link>
                  <Nav.Link href="" className="link-danger">
                    Cerrar sesión
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
