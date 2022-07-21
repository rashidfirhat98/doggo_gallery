import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BreedsList from "../components/BreedsList";

function DoggoHomepage({ breeds }) {
  const [showList, setshowList] = useState();

  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello There</h1>
          <h2>Welcome to the Doggo Gallery</h2>
          <Button
            onClick={() => {
              setshowList(true);
            }}
          >
            Get Started
          </Button>
        </Col>
      </Row>
      {showList && (
        <Row>
          <BreedsList breeds={breeds} />
        </Row>
      )}
    </Container>
  );
}

export default DoggoHomepage;

export async function getStaticProps() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");

  return { props: { breeds: response.data.message } };
}
