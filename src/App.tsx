import { useEffect, useState } from "react";
import './App.css'
import Header from "./Components/Header";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./Queries/Country";
import { client } from "./lib/apollo";
import Loading from "./Components/Loading";
import CustomCards from "./Components/CustomCards";
import { Box, Grid } from "@mui/material";
import CustomRadioGroup from "./Components/CustomRadioGroup";


interface Country {
  code: string;
  name: string;
  native: string;
}
function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client });
  const [filterText, setFilterText] = useState<string>('')
  const [countries, setCountries] = useState<Country[] | string>("")
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [selectedCard, setSelectedCard] = useState<string>("")
  useEffect(() => {
    if (loading) return;
    else {
      setCountries(data.countries)
      debugger
      setSelectedCard(data.countries[9].code)
    }
  }, [data])
  useEffect(() => {
    if (selectedContinent === "All" && data) {
      setCountries(data.countries)
    } else if (data && selectedContinent !== "All") {
      let selectedCountries = data.countries.filter((country: any) => country.continent.code === selectedContinent)
      setCountries(selectedCountries)
      if(selectedCountries.length<=10){
        setSelectedCard(selectedCountries[selectedCountries.length-1].code)
      }else{
        setSelectedCard(selectedCountries[9].code)
      }
    }
    setFilterText("")
  }, [selectedContinent])
  if (loading) {
    return <Loading open={loading} />
  }
  return (
    <div className="App">
      <div>
        <Header data={data.countries} setFilterText={setFilterText} filterText={filterText} setCountries={setCountries} setSelectedCard={setSelectedCard} />
      </div>
      <div className="RadioGroupStyle" >
        <CustomRadioGroup data={data.countries} selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent} />
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: "100%" }}>
        {
          typeof (countries) !== 'string' ?
            countries?.map((country: any, index: number) => (
              <Grid item xs={3} key={index}>
                <CustomCards country={country} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
              </Grid>
            )
            ) : <Grid item xs={6}>
              <Box justifyContent="center" alignItems='center' sx={{ height: "100%", width: '100%', display: 'flex', flexDirection: 'column' }} >
                <p>{countries}</p>
              </Box>
            </Grid>
        }
      </Grid>
    </div>
  );
}

export default App;
