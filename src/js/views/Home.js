import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import flux from "../store/Flux";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    flux.loadPeople(dispatch);
    flux.loadVehicles(dispatch);
    flux.loadPlanets(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <h1 className="my-4">Star Wars Databank</h1>
      <Row>
        {state.people.map((person) => (
          <Col key={person.uid} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Link to={`/details/people/${person.uid}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {state.vehicles.map((vehicle) => (
          <Col key={vehicle.uid} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              />
              <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Link to={`/details/vehicles/${vehicle.uid}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {state.planets.map((planet) => (
          <Col key={planet.uid} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              />
              <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <Link to={`/details/planets/${planet.uid}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
