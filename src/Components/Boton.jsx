import React from 'react';
import { Button } from 'react-bootstrap';

const Boton = (props) => {
    return (
        <Button type="submit" className='mt-5' variant="success" onClick={props.onSubmit}>
            {props.text}
        </Button>
    )
}

export default Boton;