import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const CardCurrency = ({ currency, data, tipoMoneda }) => {
  return (
    <>
      <Row>
        <Container>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Info : {currency}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Precio venta:</Card.Subtitle>
              <Card.Text>{`${data.ask} ${tipoMoneda}`}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Precio compra:</Card.Subtitle>
              <Card.Text>{`${data.bid} ${tipoMoneda}`}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Precio promedio:
              </Card.Subtitle>
              <Card.Text> {`${data.average} ${tipoMoneda}`}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Precio maximo:
              </Card.Subtitle>
              <Card.Text> {`${data.max} ${tipoMoneda}`}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Precio minimo:
              </Card.Subtitle>
              <Card.Text> {`${data.min} ${tipoMoneda}`}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Volumen:
              </Card.Subtitle>
              <Card.Text> {`${data.volume}`}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Row>
    </>
  );
};

export default CardCurrency;
