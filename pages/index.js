import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function BreedsList({ breeds }) {
	console.log(Object.values(breeds));
  return (
    <ol>
      {Object.keys(breeds).map((breed) => {
        return <li key={breed}>{breed}</li>;
      })}
    </ol>
  );
}

function DoggoHomepage({ breeds }) {
  const [showList, setshowList] = useState();
  // console.log(breeds);

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
      {showList ? (
        <Row>
          <BreedsList breeds={breeds} />
        </Row>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default DoggoHomepage;

export async function getStaticProps() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  console.log(response.data);

  return { props: { breeds: response.data.message } };
}
