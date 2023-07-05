import { IoSearch } from "react-icons/io5";

import { InputContainer, Input } from "./Search.styles";

export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleChange} value={search} />
    </InputContainer>
  );
};
