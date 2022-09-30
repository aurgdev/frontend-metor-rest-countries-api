//@ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../utils";

type Props = {
  filtra?: any;
  input: any;
  numberWithCommas: any;
};
let url;
const Countries = ({ input, numberWithCommas, filtra }: Props) => {
  url = input
    ? `https://restcountries.com/v2/name/${input}`
    : "https://restcountries.com/v2/all";

  const { data, loading } = useFetch(url);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (input) {
      setCountries(data);
    } else {
      if (filtra === "All") setCountries(data);
      else {
        setCountries(
          data.filter((country) => {
            return country.region === filtra;
          })
        );
      }
    }
  }, [input, data, filtra]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-20 xl:grid-cols-4 container mx-auto">
      {loading && <h1 className="loading">Loading ...</h1>}
      {countries.length ? (
        countries.map((country) => {
          const { flag, name, population, region, capital } = country;
          return (
            <Link
              to={`/${name}`}
              key={name}
              className="mx-16 md:mx-0 shadow-lg overflow-hidden rounded-md bg-white-dm dark:bg-dark-blue-dm"
            >
              <div>
                <img
                  src={flag}
                  alt={name}
                  className=" min-h-[220px] w-full max-h-[220px] object-cover "
                />
                <h1 className="my-6 text-xl font-extrabold px-10">{name}</h1>
                <div className="space-y-2 px-10 font-semibold mb-8 text-lg">
                  <p>
                    Population: <span className="font-light">{population}</span>
                  </p>
                  <p>
                    Region: <span className="font-light">{region}</span>
                  </p>
                  <p>
                    Capital: <span className="font-light">{capital}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <h1 className={loading ? "x" : "loading"} style={{ left: "35%" }}>
          There is no result for your search
        </h1>
      )}
    </div>
  );
};

export default Countries;
