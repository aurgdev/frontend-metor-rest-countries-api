import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import useFetch from "../utils";

const people = [
  { name: "Filter by Region" },
  { name: "Africa" },
  { name: "America" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

type Props = {};
type CountryProps = {
  flags: { svg: string };
  name: any;
  population: string;
  region: string;
  capital: string;
};
const COUTRIES_API = "https://restcountries.com/v3.1/all";
const Countries = (props: Props) => {
  const [inputField, setInputField] = useState(undefined || "");
  const [search, setSearch] = useState(undefined || "");
  const [filtra, setFilter] = useState("All");
  const { data, loading } = useFetch(COUTRIES_API);

  const handleSelect = (e: any) => {
    setFilter(e.target.value);
    setSearch(undefined || "");
    setInputField("");
  };

  const getCountryName = (code: any) => {
    let countryName;
    const country = data.filter((element) => {
      return element.alpha3Code === code;
    });
    countryName = country[0].name;
    return countryName;
  };

  const numberWithCommas = (number: any) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container mx-auto my-6 bg-white-dm  dark:bg-very-dark-blue-dm">
        <form action="">
          <div className="flex mx-6 md:mx-0 h-full flex-wrap justify-between items-center gap-8">
            <div className="relative w-[550px] dark:bg-dark-blue-dm dark:text-white-dm text-dark-gray-lm flex items-center space-x-10 shadow px-8 py-2 rounded-md">
              <HiOutlineSearch className="absolute" size={20} />
              <input
                value={inputField}
                onChange={(e) => {
                  setInputField(e.target.value);
                  setSearch(e.target.value);
                }}
                type="search"
                placeholder="Search for country..."
                className="h-10 w-full focus:outline-none dark:bg-dark-blue-dm"
              />
            </div>
            <div className="w-72 dark:bg-dark-blue-dm rounded-md shadow-lg overflow-hidden">
              <select
                className="text-very-dark-blue-lm dark:text-white-dm dark:bg-dark-blue-dm font-semibold relative w-full cursor-default bg-white py-4 pl-8 text-left focus:outline-none sm:text-sm"
                id="region"
                name="region"
                onChange={handleSelect}
              >
                <option className="h-10" value="All" defaultValue={"all"}>
                  All
                </option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-20 xl:grid-cols-4 container mx-auto">
        {data.map((country: CountryProps) => (
          <a
            href={`/${country.name.common}`}
            key={country.name.common}
            className="mx-16 md:mx-0 shadow-lg overflow-hidden rounded-md bg-white-dm dark:bg-dark-blue-dm"
          >
            <div>
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className=" min-h-[220px] w-full max-h-[220px] object-cover "
              />
              <h1 className="my-6 text-xl font-extrabold px-10">
                {country.name.common}
              </h1>
              <div className="space-y-2 px-10 font-semibold mb-8 text-lg">
                <p>
                  Population:{" "}
                  <span className="font-light">{country.population}</span>
                </p>
                <p>
                  Region: <span className="font-light">{country.region}</span>
                </p>
                <p>
                  Capital: <span className="font-light">{country.capital}</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Countries;
