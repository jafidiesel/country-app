import { useQuery } from "@apollo/client/index.js";
import { GET_COUNTRY_BY_NAME } from "~/graphql/queries";
import { Country } from "~/graphql/__generated__/graphql";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

interface CountriesListProps {
  searchValue: string;
}

export default function CountriesList(props: CountriesListProps) {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const newValue = props.searchValue
      .split(" ")
      .map(
        (word) =>
          word !== "" && word[0].toUpperCase() + word.slice(1, word.length)
      )
      .join(" ");
    setSearchValue(newValue);
  }, [props.searchValue]);
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_NAME(searchValue));
  if (!props.searchValue)
    return (
      <p className="text-white text-center">Enter a country name and search!</p>
    );
  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error)
    return <p className="text-white text-center">Error : {error.message}</p>;
  if (!data.countries.length)
    return <p className="text-white text-center">No country matching data</p>;

  return (
    <div className="flex justify-center w-full flex-wrap">
      {data?.countries?.map((country: Country, index: number) => (
        <CountryCard key={`country-${index}`} country={country} />
      ))}
    </div>
  );
}
