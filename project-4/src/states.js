import { useState } from "react";

export const useArtState = () => {
  const APIKEY = "764b42dd-6205-4901-8124-6a1266853aff";
  const REQUIRED_ATTR = ["title", "culture", "dated", "people", "primaryimageurl"];

  const [displayAttr, setDisplayAttr] = useState({
    title: null,
    artistInfo: null,
    culture: null,
    dated: null,
    imgUrl: null,
  });
  const [isDiscovered, setIsDiscovered] = useState(false);
  const [listOfSeenArts, setListOfSeenArts] = useState([]);
  const [banList, setBanList] = useState([]);

  function banAttr(attrKey, attrValue) {
    if (!banList.some((bannedAttr) => bannedAttr.key === attrKey && bannedAttr.value === attrValue)) {
      setBanList([...banList, { key: attrKey, value: attrValue }]);
    }
  }

  function removeBanAttr(attrValue) {
    setBanList(banList.filter((bannedAttr) => bannedAttr.value !== attrValue));
  }

  async function discover() {
    const url = new URL("https://api.harvardartmuseums.org/Object");
    url.searchParams.append("apikey", APIKEY);
    url.searchParams.append("size", 100);

    const initialResponse = await fetch(url);
    if (!initialResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const { info } = await initialResponse.json();
    const totalPages = Math.floor(info.pages);
    url.searchParams.append("page", Math.floor(Math.random() * totalPages));

    let arts = [];
    let filteredArts = [];
    let randomArt = null;

    do {
      url.searchParams.set("page", Math.floor(Math.random() * totalPages));
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      arts = data.records.filter((record) => REQUIRED_ATTR.every((attr) => record[attr]));

      filteredArts = arts.filter((art) => {
        return banList.every((bannedAttr) => {
          if (bannedAttr.key === "people") {
            return art[bannedAttr.key][0].name !== bannedAttr.value;
          } else {
            return art[bannedAttr.key] !== bannedAttr.value;
          }
        });
      });

      randomArt = filteredArts[Math.floor(Math.random() * filteredArts.length)];
    } while (filteredArts.length === 0);

    const { title, culture, dated } = randomArt;
    const artistName = randomArt.people[0].name;

    const imgUrl = randomArt.images[0].baseimageurl;

    setIsDiscovered(true);
    setDisplayAttr({ title, culture, dated, artistName, imgUrl });
    setListOfSeenArts([
      ...listOfSeenArts,
      { imgUrl, description: `${"AEIOU".includes(culture[0]) ? "An" : "A"} ${culture} art created by ${artistName}` },
    ]);
  }

  return {
    displayAttr,
    isDiscovered,
    listOfSeenArts,
    banList,
    banAttr,
    removeBanAttr,
    discover,
  };
}
