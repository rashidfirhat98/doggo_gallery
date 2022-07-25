import Link from "next/link";

export default function BreedsList({ breeds }) {
  return (
    <div className="d-flex justify-content-center p-5 flex-wrap">
      {Object.keys(breeds).map((breed) => {
        return (
          <li key={breed} className="p-1">
            <Link href={`/${breed}`}>{breed}</Link>
          </li>
        );
      })}
    </div>
  );
}
