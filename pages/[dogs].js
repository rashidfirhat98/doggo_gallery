import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function DoggoProfile({ breedDetail }) {
  const router = useRouter();

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>{router.query.dogs}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image width={240} height={240} className="img-thumbnail" src={breedDetail.message} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-left">
          <Link href="/">
            <Button>Back</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export async function getStaticPaths() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");

  const paths = Object.keys(response.data.message).map((breed) => {
    return {
      params: { dogs: breed.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const response = await axios.get(
    `https://dog.ceo/api/breed/${context.params.dogs}/images/random`
  );

  return { props: { breedDetail: response.data } };
}
