import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  TextField,
} from "@mui/material";

interface HeaderProps {
  setCountries: React.Dispatch<React.SetStateAction<any[] | string>>
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  data: any[]
}

function Header({ setCountries, setFilterText, data }: HeaderProps) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFilterText(inputValue);
    const filteredCountries = data.filter((countries: any) =>
      countries.code.toLowerCase().includes(inputValue.toLowerCase()) ||
      countries.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      countries.native.toLowerCase().includes(inputValue.toLowerCase()) ||
      countries.continent.code.toLowerCase().includes(inputValue.toLowerCase()) ||
      countries.continent.name.toLowerCase().includes(inputValue.toLowerCase())

    )
    if (e.target.value.length) setCountries(filteredCountries.length > 0 ? filteredCountries : "Aradığınız kriterlerle Eşleşen Kayıt Bulunamadı.");
    else setCountries(data)
  }

  return (
    <Box sx={{ flexGrow: 1, minWidth: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <TextField label="Search Country" variant="outlined" onChange={handleInputChange} />
        </Toolbar>
      </AppBar>

    </Box>
  );
}

export default Header;
