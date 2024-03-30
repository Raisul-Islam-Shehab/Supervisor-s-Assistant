import React, { useEffect, useRef } from 'react'
import Form from 'react-bootstrap/Form'

export const ModalSelect = ({ onChangeHandler, options, defaultValue, fieldName, label, resetCounter }) => {
    const select = useRef(null)
    useEffect(() => {
        if (select && select.current) {
            // console.log(select.current.value)
            select.current.value = defaultValue
        }
    }, [resetCounter])
    return (
        <>
            <Form>
                <Form.Group className="select" controlId={fieldName}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Select ref={select} aria-label="select" 
                    defaultValue={defaultValue} onChange={onChangeHandler} >
                        {options.map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
        </>
    )
}
