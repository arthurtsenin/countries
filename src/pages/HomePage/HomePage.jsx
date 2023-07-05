import axios from "axios";
import { useState, useEffect } from "react";

import { Controls } from "../../components/containers/Controls/Controls";
import { Card } from "../../components/containers/Card/Card";
import { ALL_COUNTRIES } from "../../config";

import { List } from "./HomePage.styles";

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </List>
    </>
  );
};
