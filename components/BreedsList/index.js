import Link from "next/link";

export default function BreedsList({ breeds }) {
  return (
    <ul>
      {Object.keys(breeds).map((breed) => {
        return (
          <li key={breed}>
            <Link href={`/${breed}`}>{breed}</Link>
          </li>
        );
      })}
    </ul>
  );
}
