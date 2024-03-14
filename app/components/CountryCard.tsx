import { useState } from "react";
import { Country } from "~/graphql/__generated__/graphql";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard(props: CountryCardProps) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      key={props.country.code}
      className="w-1/5 h-full rounded-md border-white border-2 bg-white p-4 m-4 shadow-lg shadow-cyan-500/50 min-w-64"
    >
      <h1 className="text-center capitalize hover:uppercase text-cyan-500 text-xl pb-2">
        {props.country.name} {props.country.emoji}
      </h1>
      <p className="break-words"><span className="font-bold">Currency:</span> {props.country.currency}</p>
      <p><span className="font-bold" >Country code:</span> {props.country.code}</p>
      <p className="break-words"><span className="font-bold" >Capital:</span> {props.country.capital}</p>
      <p className="break-words"><span className="font-bold" >Languages:</span> {props.country.languages.map(lang => lang.name).join(", ")}</p>
      
      <p className="text-right text-sky-700 underline cursor-pointer italic" onClick={() => setShowMore(!showMore)}>{showMore ? "Hide" : "Show more"}</p>
      {showMore && (
        <>
          <p className="font-bold">States:</p>
          <ul className="text-xs text-right">
            {props.country.states.map((state, index) => (
              <li key={`state-${index}`}>{state.name}</li>
            ))}
          </ul>
          <p className="text-left tracking-widest font-extrabold">Total states: {props.country.states?.length}</p>
          <hr></hr>
          <p className="font-bold">Subdivisions:</p>
          <ul className="text-xs text-right">
            {props.country.subdivisions.map((state, index) => (
              <li key={`subd-${index}`}>{state.name}</li>
            ))}
          </ul>
          <p className="text-left tracking-widest font-extrabold">Total Subdivisions: {props.country.subdivisions?.length}</p>
        </>
      )}
    </div>
  );
}
