import React from 'react'
import { Button, Form } from 'react-bootstrap'
import useSelect from '../hooks/useSelect';

const Formulario = ({setCurrency}) => {
    const opciones = [
        {value:"BTC",label:"Bitcoin"},
        {value:"BCC",label:"Bitcoin Cash"},
        {value:"LTC",label:"Litecoin"},
        {value:"ETH",label:"Ethereum"},
        {value:"LSK",label:"Lisk"},
        {value:"GAME",label:"Game credits"},
        {value:"DASH",label:"Dash"},
        {value:"BTG",label:"Bitcoin Gold"},
        {value:"XIN",label:"Infinity economics"},
        {value:"XRP",label:"Ripple"},
        {value:"TRX",label:"Tron"},
        {value:"OMG",label:"OmiseGO"},
        {value:"USDC",label:"USD Coin"},
    ];

    const [tipoMoneda,SelectMoneda] = useSelect("BTC",opciones,"Tipo de Cripto");

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        setCurrency(tipoMoneda);
    }

    return (
        <Form onSubmit={handlerOnSubmit}>
            <Form.Group>
                <SelectMoneda></SelectMoneda>
            </Form.Group>
            <Button type="submit" variant="primary">Buscar</Button>
        </Form>
    )
}

export default Formulario
