import React, {useEffect, useRef} from 'react'
import Form from 'react-bootstrap/Form'

export const ModalForm = ({ label, pHolder, type = "text", fieldName, onChangeHandler, resetCounter, defaultValue }) => {
    const input = useRef(null)
    useEffect(() => {
        if (input && input.current) {
            // console.log(input.current.value)
            input.current.value = defaultValue ? defaultValue : ""
        }
    }, [resetCounter])
    return (
        <>
            <Form>
                <Form.Group controlId={fieldName}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                        type={type}
                        placeholder={pHolder}
                        onChange={onChangeHandler}
                        ref={input}
                    />
                </Form.Group>
            </Form>
        </>
    )
}
