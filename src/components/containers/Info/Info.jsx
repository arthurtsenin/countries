import axios from "axios";
import { useState, useEffect } from "react";

import { filterByCode } from "../../../config";

import {
  Wrapper,
  InfoImage,
  InfoTitle,
  ListGroup,
  ListItem,
  List,
  Meta,
  TagGroup,
  Tag,
} from "./Info.styles";

export const Info = ({
  name,
  flags,
  capital,
  population,
  region,
  subregion,
  borders = [],
}) => {
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name.common)));
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name.common} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Population:</b>
              {population.toLocaleString()}
            </ListItem>
            <ListItem>
              <b>Region:</b>
              {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b>
              {capital}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((neighbor) => (
                <Tag key={neighbor} to={`/country/${neighbor}`}>
                  {neighbor}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
