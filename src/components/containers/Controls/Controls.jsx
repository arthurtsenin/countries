import { useState, useEffect } from "react";

import { Search } from "../Search/Search";
import { CustomSelect } from "../../views/CustomSelect";
import { OPTIONS } from "../../../constatnts/selectOptions";

import { Wrapper } from "./Controls.styles";

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        isClearable
        value={region}
        options={OPTIONS}
        isSearchable={false}
        onChange={setRegion}
        placeholder="Filter by Region"
      />
    </Wrapper>
  );
};
