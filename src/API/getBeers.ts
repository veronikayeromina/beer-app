type Query = { queryKey: [string, "pizza" | "meat" | ""] };

type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
};

export const getBeers = ({ queryKey: [, tab] }: Query) => {
  const food = tab ? `food=${tab}` : "";

  return fetch(`https://api.punkapi.com/v2/beers?${food}`)
    .then((res) => res.json())
    .then((json) => {
      return json as Beer[];
    })
    .catch((err) => {
      console.log(err);
      alert("Ошибка при получении данных");
    });
};
