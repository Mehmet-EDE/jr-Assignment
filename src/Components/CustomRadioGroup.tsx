import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

interface Continent {
  code: string;
  name: string;
}

interface Country {
  code: string;
  name: string;
  continent: Continent;
}

interface GroupedCountries {
  code: string;
  name: string;
}

interface Props {
  data: Country[];
}

function CustomRadioGroup({ data }: Props) {
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

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Countries by Continent</FormLabel>
      <RadioGroup row aria-label="countries-by-continent">
        {groupedCountries.map((continent) => (
          <FormControlLabel
            key={continent.code}
            value={continent.code}
            control={<Radio />}
            label={continent.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioGroup;
