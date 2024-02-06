export interface HeaderProps {
    setCountries: React.Dispatch<React.SetStateAction<any[] | string>>
    setFilterText: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCard: React.Dispatch<React.SetStateAction<string>>;
    filterText: string;
    data: any[]
}

  export interface LoadingProps {
    open: boolean,

}
export interface CardProps {
    country: any,
    selectedCard: string,
    setSelectedCard: React.Dispatch<React.SetStateAction<string>>
}
export interface Continent {
    code: string;
    name: string;
  }
  
export interface Country extends Continent {
    continent: Continent;
  }
  
export interface GroupedCountries extends Continent {
    
  }
  
  export interface Props {
    data: Country[];
    selectedContinent: string,
    setSelectedContinent: any | string | undefined
  }