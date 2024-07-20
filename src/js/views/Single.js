import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import { Context } from "../store/AppContext";
import axios from "axios";

const Single = () => {
  const { id, type } = useParams();
  const { state, dispatch } = useContext(Context);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.swapi.tech/api/${type}/${id}`
      );
      setItem(response.data.result.properties);
    };
    fetchData();
  }, [id, type]);

  const addToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: { id, type, item } });
  };

  return (
    item && (
      <Container>
        <Card className="my-4">
          <Card.Img
            variant="top"
            src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {Object.keys(item).map((key) => (
                <div key={key}>
                  <strong>{key.replace("_", " ")}:</strong> {item[key]}
                </div>
              ))}
            </Card.Text>
            <Button variant="primary" onClick={addToFavorites}>
              Add to Favorites
            </Button>
            <Link to="/">
              <Button variant="secondary" className="ml-2">
                Back to Home
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    )
  );
};

export default Single;
