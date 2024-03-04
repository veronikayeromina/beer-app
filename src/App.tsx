import SelectSort, { sortValue } from "./SelectSort";
import { useMemo, useState } from "react";
import "./App.css";
import Card from "./Card";
import ButtonGroup from "./ButtonGroup";

import { useGetBeers } from "./hooksQuery/useGetBeers";

export const sortNumber = (prevState: any[], value: string) => {
  return prevState.sort(
    (a: any, b: any) => Number(a[value]) - Number(b[value])
  );
};

export const sortString = (prevState: any[], value: string) => {
  return prevState.sort((a: any, b: any) => {
    const aName = a[value];
    const bName = b[value];
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });
};

function App() {
  const [tab, setTab] = useState<"pizza" | "meat" | "">("");
  const [searchSelect, setSearchSelect] = useState<keyof typeof sortValue>(
    sortValue.name_asc
  );

  const { isLoading, data: cards } = useGetBeers(tab);

  const filteredCards = useMemo(() => {
    if (!cards) return [];

    switch (searchSelect) {
      case sortValue.abv_asc:
        return [...sortNumber(cards, "abv")];

      case sortValue.abv_desc:
        return [...sortNumber(cards, "abv").reverse()];

      case sortValue.name_asc:
        return [...sortString(cards, "name")];

      case sortValue.name_desc:
        return [...sortString(cards, "name").reverse()];

      default:
        return cards;
    }
  }, [cards, searchSelect]);

  return (
    <div className="App">
      <div className="container">
        <ButtonGroup setTab={setTab} />

        <SelectSort
          searchSelect={searchSelect}
          setSearchSelect={setSearchSelect}
        />

        <div className="cards">
          {isLoading ? (
            <h3>Идет загрузка...</h3>
          ) : (
            filteredCards?.map((obj, index) => (
              <Card
                key={index}
                image={obj.image_url}
                name={obj.name}
                title={obj.tagline}
                description={obj.description}
                abv={obj.abv}
                food_pairing={obj.food_pairing}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
