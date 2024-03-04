import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const sortValue = {
  abv_asc: "abv_asc",
  abv_desc: "abv_desc",
  name_asc: "name_asc",
  name_desc: "name_desc",
} as const;

type Props = {
  searchSelect: keyof typeof sortValue;
  setSearchSelect: (value: keyof typeof sortValue) => void;
};

function SelectSort({ searchSelect, setSearchSelect }: Props) {
  return (
    <div className="block">
      <FormControl className="select">
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchSelect}
          label="Age"
          onChange={(e) =>
            setSearchSelect(e.target.value as keyof typeof sortValue)
          }
        >
          <MenuItem value={sortValue.abv_asc}>Name</MenuItem>
          <MenuItem value={sortValue.abv_desc}>Name</MenuItem>
          <MenuItem value={sortValue.name_asc}>Abv</MenuItem>
          <MenuItem value={sortValue.name_desc}>Abv</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectSort;
