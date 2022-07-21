import axios from "axios";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";

export default function DoggoProfile({ breedDetail }) {
  console.log(breedDetail);
  return (
    <Container>
      <Row><img src={breedDetail.message} /></Row>
      <Link href="/">Back</Link>
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
