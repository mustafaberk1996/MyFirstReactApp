import { useState, useEffect } from "react";

const localeCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localeCache[animal]) {
      setBreedList(animal);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();

      localeCache[animal] = json.breeds || [];

      setBreedList(localeCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
