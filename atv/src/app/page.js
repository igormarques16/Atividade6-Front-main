"use client";

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

export default function CambistaPage() {
  const [moeda, setMoeda] = useState("");
  const [taxaConversao, setTaxaConversao] = useState("");
  const [real, setReal] = useState(1);
  const [equacao, setEquacao] = useState(0);

  function handleMoeda(moedaSelecionada) {
    let taxa = "";
    if (moedaSelecionada === "dolar") {
      taxa = "Taxa de conversão de dólar: 1 real = 0,20 dólares";
    } else if (moedaSelecionada === "euro") {
      taxa = "Taxa de conversão de euro: 1 real = 0,18 euros";
    } else if (moedaSelecionada === "bitcoin") {
      taxa = "Taxa de conversão de bitcoin: 1 real = 0,000003 bitcoins";
    } else {
      taxa = "";
    }
    setTaxaConversao(taxa);
  }

  function handleConvertion(value) {
    let valor = 0;
    if (moeda === "dolar") {
      valor = real * 0.2;
    } else if (moeda === "euro") {
      valor = real * 0.18;
    } else if (moeda === "bitcoin") {
      valor = real * 0.000003;
    }
    setEquacao(valor);
    setReal(value);
  }

  return (
    <Pagina titulo="Conversor de Moedas">
      <Form>
        <Row md={7}>
          <Col md={5} className="py-3">
            <Form.Group>
              <Form.Label>{taxaConversao}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Real</Form.Label>
              <Form.Control
                type="number"
                name="real"
                value={real}
                onChange={(e) => {
                  handleConvertion(e.target.value);
                }}
                step={0.01}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{moeda}</Form.Label>
              <Form.Control
                type="number"
                name="moeda"
                value={equacao}
                readOnly
              />
            </Form.Group>
          </Col>
          <Col md={6} className="py-2">
            <Form.Group className="mb-3">
              <Form.Label>Escolha a moeda aqui:</Form.Label>
              <Form.Select
                name="moeda"
                value={moeda}
                onChange={(e) => {
                  setMoeda(e.target.value);
                  handleMoeda(e.target.value);
                  handleConvertion();
                }}
              >
                <option value="">Selecione</option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
                <option value="bitcoin">Bitcoin</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Pagina>
  );
}
