import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function DoggoProfile({ breedDetail }) {
  const router = useRouter();
  const currentBreed = router.query.dogs;

  const capitalize = (str) => {
    const lowerCased = str.toLowerCase();
    return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center pt-3">
          <h1>{capitalize(router.query.dogs)}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="p-3">
            <Image
              width={360}
              height={360}
              objectFit="cover"
              src={breedDetail.message}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <Link href="/">
            <Button>Back</Button>
          </Link>
          <Link as={`/${currentBreed}`} href="/[dogs]">
            <Button>Show Random Image</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export async function getStaticPaths() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  console.log(response);
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
  const response = await axios.get(
    `https://dog.ceo/api/breed/${context.params.dogs}/images/random`
  );
  console.log(response);
  return { props: { breedDetail: response.data } };
}
