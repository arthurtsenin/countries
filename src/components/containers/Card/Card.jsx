import { useMemo } from "react";

import {
  Wrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardList,
  CardListItem,
} from "./Card.styles";

export const Card = ({ country }) => {
  const info = useMemo(
    () => [
      {
        title: "Population",
        description: country.population.toLocaleString(),
      },
      {
        title: "Region",
        description: country.region,
      },
      {
        title: "Capital",
        description: country.capital,
      },
    ],
    []
  );

  return (
    <Wrapper to={`/country/${country.name.common}`}>
      <CardImage src={country.flags.png} alt={country.name.common} />
      <CardBody>
        <CardTitle>{country.name.common}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
