import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Continent, Country, GroupedCountries, Props } from '../Assets/interfaces';


function CustomRadioGroup({ data, selectedContinent, setSelectedContinent }: Props) {
  const [groupedCountries, setGroupedCountries] = useState<GroupedCountries[]>([]);

  useEffect(() => {
    function groupByContinent(data: Country[]) {
      const continents = data.reduce((result: Continent[], country) => {
        const existingContinent = result.find((c) => c.code === country.continent.code);

        if (!existingContinent) {
          result.push({
            code: country.continent.code,
            name: country.continent.name,
          });
        }

        return result;
      }, []);

      setGroupedCountries(continents);
    }

    groupByContinent(data);
  }, [data]);
  const handleContinentChange = (event: any) => {
    console.log(event.target.value);
    setSelectedContinent(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Countries by Continent</FormLabel>
      <RadioGroup row aria-label="countries-by-continent" value={selectedContinent} onChange={handleContinentChange}>
        {groupedCountries.map((continent) => (
          <FormControlLabel
            key={continent.code}
            value={continent.code}
            control={<Radio />}
            label={continent.name}
          />
        ))}
        <FormControlLabel
          key="All"
          value="All"
          control={<Radio />}
          label="All Countries"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioGroup;
