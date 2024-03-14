import type { MetaFunction } from "@remix-run/node";
import { FormEvent, useEffect, useState } from "react";
import CountriesList from "~/components/CountriesList";
import Footer from "~/components/Footer";
import Search from "~/components/SearchForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Country App" },
    { name: "description", content: "Country App" },
  ];
};

export default function Index() {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const search = (e: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    setSearchValue(value);
  };
  const clear = () => {
    setSearchValue("");
    setValue("");
  }

  useEffect(() => {
    setValue("");
  },[])

  return (
    <div className="bg-gray-900">
      <div className="h-auto min-h-screen flex flex-col justify-between">
        <div>
          <h1 className="text-white text-5xl text-center antialiased tracking-widest underline decoration-wavy decoration-cyan-400 decoration-2 mb-4">Country explorer</h1>
          <div id="presentation" className="flex flex-col text-white items-center">
            <div className="w-9/12">
              <p className="text-center">A simple country explorer that provide small amount of data, courtesy of <a href="https://trevorblades.com" target="_blank" rel="noreferrer" className="underline">trevorblades.com</a></p>
            </div>
          </div>

          <Search search={search} setValue={setValue} value={value} clear={clear} />
          {!!searchValue && <CountriesList searchValue={searchValue} />}
        </div>
        <Footer />
      </div>
    </div>
  );
}
