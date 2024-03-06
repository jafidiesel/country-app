import { useQuery } from "@apollo/client/index.js";
import { GET_COUNTRY_BY_NAME } from "~/graphql/queries";
import { Country } from "~/graphql/__generated__/graphql";


interface CountriesListProps {
    searchValue: string
}

export default function CountriesList(props: CountriesListProps) {
    const { loading, error, data } = useQuery(GET_COUNTRY_BY_NAME(props.searchValue));
    if (!props.searchValue) return <p>Enter a country name and search!</p>
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (!data.countries.length) return <p>No country matching data</p>

    return (<div>
        {data?.countries?.map((country: Country) => (
        <div key={country.code}>
          <h2>{country.name}</h2>
          <p>Currency: {country.currency}</p>
          <p>Country code: {country.code}</p>
        </div>
      ))}
    </div>)
}