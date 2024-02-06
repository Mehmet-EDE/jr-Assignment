import React from "react";
import {
  TextField,
} from "@mui/material";
import { StyledBox, StyledHeader, StyledToolbar } from "../styledComponents/style";
import { Colors } from '../constants/colorPalette';
import { HeaderProps } from "../Assets/interfaces";

function Header({ setCountries, setFilterText, filterText, data, setSelectedCard }: HeaderProps) {

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
    if (filteredCountries.length <= 10 && filteredCountries.length) {
      setSelectedCard(filteredCountries[filteredCountries.length - 1].code)
    } else if (filteredCountries.length) {
      setSelectedCard(filteredCountries[9].code)
    }
  }

  return (
    <StyledBox>
      <StyledHeader >
        <StyledToolbar>
          <TextField label="Search Country" variant="filled" value={filterText} sx={{ background: Colors.headerInputColor, borderRadius: 3 }} onChange={handleInputChange} />
        </StyledToolbar>
      </StyledHeader>

    </StyledBox>
  );
}

export default Header;
