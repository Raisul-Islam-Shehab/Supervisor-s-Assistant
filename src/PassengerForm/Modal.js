import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalForm } from "./Form";
import { ModalSelect } from "./Select";

export const GetModal = ({
  show,
  handleClose,
  onChangeHandler,
  handleSubmit,
  handleClear,
  defaultPassenger,
  resetCounter,
  title
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm
            label={"Name"}
            pHolder={"what's the passenger name?"}
            onChangeHandler={onChangeHandler}
            fieldName={"name"}
            defaultValue={defaultPassenger.name}
            resetCounter={resetCounter}
          />
          <ModalForm
            label={"Phone"}
            pHolder={"what's the passenger phone number?"}
            onChangeHandler={onChangeHandler}
            fieldName={"phone"}
            defaultValue={defaultPassenger.phone}
            resetCounter={resetCounter}
          />
          <ModalForm
            label={"Seat"}
            pHolder={"what's the passenger seat number?"}
            onChangeHandler={onChangeHandler}
            fieldName={"seat"}
            defaultValue={defaultPassenger.seat}
            resetCounter={resetCounter}
          />
          <ModalSelect
            label={"Destination"}
            onChangeHandler={onChangeHandler}
            fieldName={"dest"}
            defaultValue={defaultPassenger.dest}
            options={["Natore", "Bogra", "Dhaka"]}
            resetCounter={resetCounter}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
