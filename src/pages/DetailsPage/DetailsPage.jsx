import axios from "axios";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { searchByCountry } from "../../config";
import { Info } from "../../components/containers/Info/Info";

import { Button } from "./DetailsPage.styles";

export const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const goBack = () => navigate(-1);

  return (
    <>
      <Button onClick={goBack}>
        <IoArrowBack />
        Back
      </Button>
      {country && <Info {...country} />}
    </>
  );
};
