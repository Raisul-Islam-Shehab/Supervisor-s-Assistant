import React, { useState } from "react";
import { PassengerForm } from "./PassengerForm/PassengerForm";
import { Button, Container, Row, Col, Card, Modal } from "react-bootstrap";

export const PassengerTable = ({
  passengers,
  updatePassenger,
  deletePassenger,
  searchItem,
  sortItem,
}) => {
  const [showDelete, setshowDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleCloseDelete = () => setshowDelete(false);

  const handleShowDelete = (passenger) => {
    setSelectedItem(passenger);
    setshowDelete(true);
  };
  // console.log(isSearch)
  //   console.log(searchItem);

  let filteredPassengers = passengers;
  if (searchItem.trim().length !== 0) {
    filteredPassengers = passengers.filter((passenger) =>
      passenger.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  }
  //   console.log(filteredPassengers)

  console.log(sortItem);

  if (sortItem === "seat") {
    filteredPassengers.sort((a, b) => a.seat.localeCompare(b.seat));
  }
  if (sortItem === "dest") {
    filteredPassengers.sort((a, b) => a.dest.localeCompare(b.dest));
  }
  //   if (!sortItem) {
  //     // console.log(sortItem);
  //     filteredPassengers = passengers;
  //   }

  return (
    <div>
      <Container>
        <Row xs={1} xl={3} md={2}>
          {filteredPassengers.map((passenger, index) => {
            return (
              <Col key={index}>
                <Card key={index} className="card-item mb-3">
                  <Card.Header as="h3">{passenger.name}</Card.Header>
                  <Card.Body>
                  <Card.Text>
                      <h5>Phone: {passenger.phone}</h5>
                    </Card.Text>
                    <Card.Text>
                      <h5>Seat: {passenger.seat}</h5>
                    </Card.Text>
                    <Card.Text>
                      <h5>Destination: {passenger.dest}</h5>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <Button className='mt-1'>Details</Button>{' '} */}
                    <PassengerForm
                      submitPassenger={updatePassenger}
                      label={"Update"}
                      variant={"secondary"}
                      defaultPassenger={passenger}
                    />{" "}
                    <Button
                      className="mt-1"
                      variant="danger"
                      onClick={() => handleShowDelete(passenger)}
                    >
                      Delete
                    </Button>
                    {showDelete && (
                      <Modal
                        show={showDelete}
                        onHide={handleCloseDelete}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure you want to delete?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => {
                              deletePassenger(selectedItem.id);
                              handleCloseDelete();
                            }}
                          >
                            {" "}
                            yes
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={handleCloseDelete}
                          >
                            no
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
