import React from "react";
import { Container } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container id="contacts" className="my-5">
      <h2>Carla Milhano</h2>
      <p className="text-muted mb-4">
        Psicóloga reconhecida pela Ordem dos Psicólogos Portugueses,<br />
        com cédula n.º 7845
      </p>

      <ul className="list-unstyled">
        <li className="mb-2"><strong>Tlm:</strong> 962 935 461</li>
        <li className="mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@carlamilhano.com">info@carlamilhano.com</a>
        </li>
        <li>
          <strong>Morada:</strong><br />
          Avenida Professor Egas Moniz, n.º 30, r/c esq.<br />
          2800-065 Almada
        </li>
      </ul>
    </Container>
  );
};

export default Contacts;
