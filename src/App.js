import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardCurrency from "./components/CardCurrency";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { BASE_URL } from "./utils/api";

function App() {
  const [cripto, setCripto] = useState("BTC");
  const [data, setData] = useState({});
  const tipoMoneda = "USD";

  useEffect(() => {
    const searchData = async () => {
      const url = `${BASE_URL}${cripto}${tipoMoneda}/ticker.json`;
      const response = await fetch(url);
      const ticker = await response.json();
      setData(ticker);
      console.log(ticker);
    };
    searchData();
  }, [cripto]);
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <Formulario setCurrency={setCripto}></Formulario>
          </Col>
        </Row>
        <Row>
          <br/>
        </Row>
        <Row>
          <CardCurrency
            currency={cripto}
            data={data}
            tipoMoneda={tipoMoneda}
          ></CardCurrency>
        </Row>
      </Container>
    </>
  );
}

export default App;
