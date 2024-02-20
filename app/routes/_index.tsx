import type { MetaFunction } from "@remix-run/node";
//import { useQuery } from "@apollo/client";
import { useQuery } from "@apollo/client/index.js";
import { GET_ALL_COUNTRIES } from "~/graphql/queries";
import { Country } from "~/graphql/__generated__/graphql";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.countries.map((country: Country) => (
        <div key={country.code}>
          <h2>{country.emoji} {country.name}</h2>
        </div>
      ))}
    </div>
  );
}
