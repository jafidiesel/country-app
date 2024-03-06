import type { MetaFunction } from "@remix-run/node";
import { FormEvent, useState } from "react";
import CountriesList from "~/components/CountriesList";

export const meta: MetaFunction = () => {
  return [
    { title: "Country App" },
    { name: "description", content: "Country App" },
  ];
};

export default function Index() {
  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const search = (e: FormEvent<HTMLFormElement>) => {
    if(e) e.preventDefault();
    setSearchValue(value);
  }

  return (
    <div>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => search(e)}>
        <input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter country name"/>
        <button type="submit">Search</button>
      </form>
      {!!searchValue && <CountriesList searchValue={searchValue} />}
    </div>
  );
}
