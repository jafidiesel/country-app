import { FormEvent } from "react";

interface SearchProps {
  value: string;
  search(e: FormEvent<HTMLFormElement>): void;
  setValue(a: string): void;
  clear(): void;
}

export default function SearchForm(props: SearchProps) {
  return (
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => props.search(e)}>
        <div className="flex justify-center mb-4">
              <div className="mt-6 flex flex-wrap justify-center max-w-md gap-x-4 mx-4 gap-y-4">
                <div>
                  <label htmlFor="country-input" className="sr-only">
                    Enter your country
                  </label>
                  <input
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    placeholder="Enter country name"
                    id="country-input"
                    name="text"
                    type="text"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 shadow-lg shadow-cyan-500/50"
                  />
                </div>
                <div className="w-100 flex justify-evenly gap-4">
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse"
                  >
                    search
                  </button>
                  <button
                    type="button"
                    className="flex-none rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                    onClick={props.clear}
                  >
                    clear
                  </button>
                </div>
              </div>
            
          </div>
      </form>
  );
}
