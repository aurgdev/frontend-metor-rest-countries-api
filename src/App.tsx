// @ts-nocheck
import { useState } from "react";
import Navbar from "./components/Navbar";
import { HiOutlineSearch } from "react-icons/hi";
import useFetch from "./utils";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const COUTRIES_API = "https://restcountries.com/v2/all";

function App() {
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
    <Router>
      <div className="bg-very-light-gray-lm dark:bg-very-dark-blue-dm dark:text-white-dm">
        <Navbar />
        <Switch>
          <Route exact path="/">
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
            <Countries
              filtra={filtra}
              input={search}
              numberWithCommas={numberWithCommas}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
