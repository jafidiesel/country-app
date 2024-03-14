var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client/index.js";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev/index.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XK3YGVWE.css";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
loadDevMessages(), loadErrorMessages();
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
], graphQLClient = new ApolloClient({
  ssrMode: !0,
  // Indicates that we want to use server side rendering
  link: createHttpLink({
    // Use createHttpLink instead of uri
    uri: "https://countries.trevorblades.com/graphql",
    //Path to GraphQL schema
    headers: {
      "Access-Control-Allow-Origin": "*"
      //Cors management
    }
  }),
  cache: new InMemoryCache()
  // Cache management
});
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsx2("body", { children: /* @__PURE__ */ jsxs(ApolloProvider, { client: graphQLClient, children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] }) })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { useEffect as useEffect2, useState as useState3 } from "react";

// app/components/CountriesList.tsx
import { useQuery } from "@apollo/client/index.js";

// app/graphql/queries.ts
import { gql } from "@apollo/client/index.js";
var GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      code
      name
      emoji
    }
  }
`, GET_COUNTRY_BY_NAME = (name) => gql`
    query {
        countries(filter: { name: { regex: "^${name}" } }) {
        code
        name
        currency
        capital
        states {
          name
        }
        subdivisions {
          name
        }
        languages {
          code
          name
        }
      }
    }
`, GET_COUNTRY_ARGENTINA = gql`
  query {
    countries(filter: { name: { regex: "^Argentina" } }) {
      code
      name
      currency
    }
  }
`;

// app/components/CountryCard.tsx
import { useState } from "react";
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function CountryCard(props) {
  let [showMore, setShowMore] = useState(!1);
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: "w-1/5 h-full rounded-md border-white border-2 bg-white p-4 m-4 shadow-lg shadow-cyan-500/50 min-w-64",
      children: [
        /* @__PURE__ */ jsxs2("h1", { className: "text-center capitalize hover:uppercase text-cyan-500 text-xl pb-2", children: [
          props.country.name,
          " ",
          props.country.emoji
        ] }),
        /* @__PURE__ */ jsxs2("p", { className: "break-words", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-bold", children: "Currency:" }),
          " ",
          props.country.currency
        ] }),
        /* @__PURE__ */ jsxs2("p", { children: [
          /* @__PURE__ */ jsx3("span", { className: "font-bold", children: "Country code:" }),
          " ",
          props.country.code
        ] }),
        /* @__PURE__ */ jsxs2("p", { className: "break-words", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-bold", children: "Capital:" }),
          " ",
          props.country.capital
        ] }),
        /* @__PURE__ */ jsxs2("p", { className: "break-words", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-bold", children: "Languages:" }),
          " ",
          props.country.languages.map((lang) => lang.name).join(", ")
        ] }),
        /* @__PURE__ */ jsx3("p", { className: "text-right text-sky-700 underline cursor-pointer italic", onClick: () => setShowMore(!showMore), children: showMore ? "Hide" : "Show more" }),
        showMore && /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx3("p", { className: "font-bold", children: "States:" }),
          /* @__PURE__ */ jsx3("ul", { className: "text-xs text-right", children: props.country.states.map((state, index) => /* @__PURE__ */ jsx3("li", { children: state.name }, `state-${index}`)) }),
          /* @__PURE__ */ jsxs2("p", { className: "text-left tracking-widest font-extrabold", children: [
            "Total states: ",
            props.country.states?.length
          ] }),
          /* @__PURE__ */ jsx3("hr", {}),
          /* @__PURE__ */ jsx3("p", { className: "font-bold", children: "Subdivisions:" }),
          /* @__PURE__ */ jsx3("ul", { className: "text-xs text-right", children: props.country.subdivisions.map((state, index) => /* @__PURE__ */ jsx3("li", { children: state.name }, `subd-${index}`)) }),
          /* @__PURE__ */ jsxs2("p", { className: "text-left tracking-widest font-extrabold", children: [
            "Total Subdivisions: ",
            props.country.subdivisions?.length
          ] })
        ] })
      ]
    },
    props.country.code
  );
}

// app/components/CountriesList.tsx
import { useEffect, useState as useState2 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function CountriesList(props) {
  let [searchValue, setSearchValue] = useState2("");
  useEffect(() => {
    let newValue = props.searchValue.split(" ").map(
      (word) => word !== "" && word[0].toUpperCase() + word.slice(1, word.length)
    ).join(" ");
    setSearchValue(newValue);
  }, [props.searchValue]);
  let { loading, error, data } = useQuery(GET_COUNTRY_BY_NAME(searchValue));
  return props.searchValue ? loading ? /* @__PURE__ */ jsx4("p", { className: "text-white text-center", children: "Loading..." }) : error ? /* @__PURE__ */ jsxs3("p", { className: "text-white text-center", children: [
    "Error : ",
    error.message
  ] }) : data.countries.length ? /* @__PURE__ */ jsx4("div", { className: "flex justify-center w-full flex-wrap", children: data?.countries?.map((country, index) => /* @__PURE__ */ jsx4(CountryCard, { country }, `country-${index}`)) }) : /* @__PURE__ */ jsx4("p", { className: "text-white text-center", children: "No country matching data" }) : /* @__PURE__ */ jsx4("p", { className: "text-white text-center", children: "Enter a country name and search!" });
}

// app/components/Footer.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsx5("div", { className: "text-slate-300 bg-cyan-700 object-bottom p-4", children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-row justify-evenly", children: [
    /* @__PURE__ */ jsxs4("div", { children: [
      /* @__PURE__ */ jsx5("p", { children: "This app it's build with:" }),
      /* @__PURE__ */ jsxs4("ul", { className: "ml-4", children: [
        /* @__PURE__ */ jsx5("li", { children: "React v18+" }),
        /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(
          "a",
          {
            className: "underline",
            href: "https://tailwindcss.com",
            target: "_blank",
            rel: "noreferrer",
            children: "tailwindcss"
          }
        ) }),
        /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(
          "a",
          {
            className: "underline",
            href: "https://remix.run/",
            target: "_blank",
            rel: "noreferrer",
            children: "Remix"
          }
        ) }),
        /* @__PURE__ */ jsx5("li", { children: "graphql + apollo" }),
        /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5("a", { href: "https://github.com/trevorblades/countries", target: "_blank", rel: "noreferrer", className: "underline", children: "trevorblades API" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { children: [
      /* @__PURE__ */ jsx5("p", { children: "About:" }),
      /* @__PURE__ */ jsxs4("ul", { className: "ml-4", children: [
        /* @__PURE__ */ jsx5("li", { children: "Hi! I'm Jafi" }),
        /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5("a", { href: "https://jafibravin.com", target: "_blank", rel: "noreferrer", className: "underline", children: "jafibravin.com" }) }),
        /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5("a", { href: "https://github.com/jafidiesel/country-app", target: "_blank", rel: "noreferrer", className: "underline", children: "This code" }) })
      ] })
    ] })
  ] }) });
}

// app/components/SearchForm.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function SearchForm(props) {
  return /* @__PURE__ */ jsx6("form", { onSubmit: (e) => props.search(e), children: /* @__PURE__ */ jsx6("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxs5("div", { className: "mt-6 flex flex-wrap justify-center max-w-md gap-x-4 mx-4 gap-y-4", children: [
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx6("label", { htmlFor: "country-input", className: "sr-only", children: "Enter your country" }),
      /* @__PURE__ */ jsx6(
        "input",
        {
          value: props.value,
          onChange: (e) => props.setValue(e.target.value),
          placeholder: "Enter country name",
          id: "country-input",
          name: "text",
          type: "text",
          required: !0,
          className: "min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 shadow-lg shadow-cyan-500/50"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "w-100 flex justify-evenly gap-4", children: [
      /* @__PURE__ */ jsx6(
        "button",
        {
          type: "submit",
          className: "flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse",
          children: "search"
        }
      ),
      /* @__PURE__ */ jsx6(
        "button",
        {
          type: "button",
          className: "flex-none rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
          onClick: props.clear,
          children: "clear"
        }
      )
    ] })
  ] }) }) });
}

// app/routes/_index.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var meta = () => [
  { title: "Country App" },
  { name: "description", content: "Country App" }
];
function Index() {
  let [value, setValue] = useState3(""), [searchValue, setSearchValue] = useState3(""), search = (e) => {
    e && e.preventDefault(), setSearchValue(value);
  }, clear = () => {
    setSearchValue(""), setValue("");
  };
  return useEffect2(() => {
    setValue("");
  }, []), /* @__PURE__ */ jsx7("div", { className: "bg-gray-900", children: /* @__PURE__ */ jsxs6("div", { className: "h-auto min-h-screen flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx7("h1", { className: "text-white text-5xl text-center antialiased tracking-widest underline decoration-wavy decoration-cyan-400 decoration-2 mb-4", children: "Country explorer" }),
      /* @__PURE__ */ jsx7("div", { id: "presentation", className: "flex flex-col text-white items-center", children: /* @__PURE__ */ jsx7("div", { className: "w-9/12", children: /* @__PURE__ */ jsxs6("p", { className: "text-center", children: [
        "A simple country explorer that provide small amount of data, courtesy of ",
        /* @__PURE__ */ jsx7("a", { href: "https://trevorblades.com", target: "_blank", rel: "noreferrer", className: "underline", children: "trevorblades.com" })
      ] }) }) }),
      /* @__PURE__ */ jsx7(SearchForm, { search, setValue, value, clear }),
      !!searchValue && /* @__PURE__ */ jsx7(CountriesList, { searchValue })
    ] }),
    /* @__PURE__ */ jsx7(Footer, {})
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-TJR7IU37.js", imports: ["/build/_shared/chunk-CETZ4FU3.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-N6LRNDSU.js", imports: ["/build/_shared/chunk-GMR6CM35.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DEGJJRUN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "a8738945", hmr: void 0, url: "/build/manifest-A8738945.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
