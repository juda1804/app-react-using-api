import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const useSelect = (stateInitial,options,label) => {
    const [state, setState] = useState(stateInitial);
    const selectCustomer = () => (
        <>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                as="select" 
                onChange={e => setState(e.target.value)}
                value={state}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Form.Control>
        </>
    );
    return [state, selectCustomer];
}

export default useSelect;