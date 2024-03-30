import React, { useEffect, useState } from "react";
import { GetModal } from "./Modal";
import { Button } from "react-bootstrap";
import { uid } from "uid";

export const PassengerForm = ({ submitPassenger, label, variant, defaultPassenger }) => {
  const [show, setShow] = useState(false);
  const [passenger, setPassenger] = useState({});
  const [resetCounter, setResetCounter] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => reset(), [defaultPassenger]);

  const reset = () => {
    setPassenger(
      defaultPassenger
        ? defaultPassenger
        : {
            id: uid(),
            name: "",
            phone: "",
            seat: "",
            dest: "Natore",
          }
    );
    setResetCounter(resetCounter + 1);
  };
  // console.log(defaultPassenger);
  // console.log(passenger)

  const onChangeHandler = (e) => {
    switch (e.target.id) {
      case "name":
        setPassenger({ ...passenger, name: e.target.value });
        break;
      case "phone":
        setPassenger({ ...passenger, phone: e.target.value });
        break;
      case "seat":
        setPassenger({ ...passenger, seat: e.target.value });
        break;
      case "dest":
        setPassenger({ ...passenger, dest: e.target.value });
        break;
      default:
        break;
    }
    // console.log(`name: ${e.target.id} | value: ${e.target.value}`);
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(passenger)
    // setPassenger(passenger)
    submitPassenger(passenger);
    // console.log(defaultPassenger);
    // if (defaultPassenger) {
    //   defaultPassenger = passenger;
    // }
    reset();
    // console.log(passenger);
    // console.log(defaultPassenger);
    setShow(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <>
      <Button variant={variant} onClick={handleShow} className="mt-1">
        {label}
      </Button>
      <GetModal
        show={show}
        handleClose={handleClose}
        onChangeHandler={onChangeHandler}
        handleSubmit={submit}
        defaultPassenger={passenger}
        resetCounter={resetCounter}
        handleClear={handleClear}
        title={label}
      />
    </>
  );
};
