import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./graphQL/Country";
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
  useEffect(() => {
    if (loading || !data) return;
    else {
      setCountries(data.countries)
    }
  }, [data])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <div>
        <Header data={data.countries} setFilterText={setFilterText} setCountries={setCountries} />
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: "100%" }}>
        <Grid item xs={6}>
          <CustomRadioGroup data={data.countries} />
        </Grid>
        <Grid container xs={5} rowSpacing={1} columnSpacing={3} sx={{ width: "100%" }}>
          {
            typeof (countries) !== 'string' ?
              countries?.map((country: any, index: number) => (
                <Grid item xs={6} key={index}>
                  <CustomCards />
                </Grid>
              )
              ) : <Grid item xs={6}>
                <Box justifyContent="center" alignItems='center' sx={{ height: "100%", width: '100%', display: 'flex', flexDirection: 'column' }} >
                  <p>{countries}</p>
                </Box>
              </Grid>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
