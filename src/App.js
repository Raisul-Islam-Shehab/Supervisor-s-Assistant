import React, { useState } from "react";
import { PassengerForm } from "./PassengerForm/PassengerForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PassengerTable } from "./PassengerTable";
import { uid } from "uid";
import { Container, Nav, Navbar, Form, NavDropdown } from "react-bootstrap";

function App() {
  const mockPassengers = [
    {
      id: uid(),
      name: "Passenger 1",
      phone: "12345",
      seat: "A1",
      dest: "Bogra",
    },
    {
      id: uid(),
      name: "Passenger 2",
      phone: "76545",
      seat: "D2",
      dest: "Natore",
    },
    {
      id: uid(),
      name: "Passenger 3",
      phone: "98745",
      seat: "C2",
      dest: "Bogra",
    },
    {
      id: uid(),
      name: "Passenger 4",
      phone: "2243255",
      seat: "B2",
      dest: "Dhaka",
    },
  ];
  const [passengers, setPassengers] = useState(mockPassengers);
  const [searchItem, setSearchItem] = useState("");
  // const [isSearch, setIsSearch] = useState(false)
  const [sortItem, setSortItem] = useState("");

  const addPassenger = (newPassenger) => {
    setPassengers([...passengers, newPassenger]);
  };

  const deletePassenger = (passengerID) => {
    setPassengers(
      passengers.filter((passenger) => {
        return passenger.id !== passengerID;
      })
    );
  };

  const updatePassenger = (updatedPassenger) => {
    // console.log(updatedPassenger)
    const newPassengers = passengers.map((x) => {
      if (x.id === updatedPassenger.id) {
        x = updatedPassenger;
      }
      return x;
    });
    // console.log(newPassengers)
    setPassengers(newPassengers);
    // console.log(passengers)
  };

  const searchHandle = (e) => {
    // console.log(`Name: ${e.target.id} | Value: ${e.target.value}`)
    setSearchItem(e.target.value);
    // console.log(searchItem)
    // setIsSearch(true)
  };

  const handleSort = (key) => {
    setSortItem(key);
    // console.log(sortItem)
  };

  return (
    <div className="App">
      <Navbar expand="md" bg="light" data-bs-theme="light">
        <Container lg="1" md="1" s="1">
          <Navbar.Brand>
            <PassengerForm
              submitPassenger={addPassenger}
              label={"Add Passenger"}
              variant={"primary"}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Button>Sort</Button> */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-auto"
                aria-label="Search"
                id="search"
                onChange={searchHandle}
              />
            </Form>
          </Nav>
          <NavDropdown
            title="Sort By"
            id="sort"
            className="me-auto"
            onSelect={handleSort}
          >
            <NavDropdown.Item eventKey="dest">Destination</NavDropdown.Item>

            <NavDropdown.Item eventKey="seat">Seat</NavDropdown.Item>
          </NavDropdown>

          {/* {sortItem && (
            <Button className="me-auto"
              onClick={(e) => {
                e.preventDefault();
                setSortItem("");
              }}
            >
              Clear
            </Button>
          )} */}
          {/* {console.log(sortItem)} */}
        </Container>
      </Navbar>
      {/* <PassengerForm submitPassenger={addPassenger} label={"Add Passenger"} variant={"primary"} /> */}
      <br />
      <PassengerTable
        passengers={passengers}
        deletePassenger={deletePassenger}
        updatePassenger={updatePassenger}
        searchItem={searchItem}
        sortItem={sortItem}
      />
    </div>
  );
}

export default App;
