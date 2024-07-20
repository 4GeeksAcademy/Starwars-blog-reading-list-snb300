import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";

const Favorites = () => {
  const { state, dispatch } = useContext(Context);

  const removeFromFavorites = (item) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: item });
  };

  return (
    <Container>
      <h1 className="my-4">Favorites</h1>
      <Row>
        {state.favorites.map((fav) => (
          <Col key={fav.id} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/${fav.type}/${fav.id}.jpg`}
              />
              <Card.Body>
                <Card.Title>{fav.item.name}</Card.Title>
                <Button
                  variant="danger"
                  onClick={() => removeFromFavorites(fav)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {state.favorites.length === 0 && <p>No favorites added yet.</p>}
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default Favorites;
