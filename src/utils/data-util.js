const PERIODIC_TABLE_LOCAL_STORAGE_KEY = "periodic-table-element";

export const getData = async () => {
  let elementsFromLocalStorage = localStorage.getItem(
    PERIODIC_TABLE_LOCAL_STORAGE_KEY
  );
  if (elementsFromLocalStorage) {
    return JSON.parse(elementsFromLocalStorage);
  } else {
    let response = await fetch(
      "https://periodic-table-elements-info.herokuapp.com/elements"
    );
    let data = await response.json();
    localStorage.setItem(
      PERIODIC_TABLE_LOCAL_STORAGE_KEY,
      JSON.stringify(data)
    );
    return data;
  }
};

export const getElementProperties = async (atomicNumber) => {
  const elementsArray = await getData();
  console.log("getElementProperties", elementsArray);

  const result = elementsArray.filter(
    (element) => element.atomicNumber == atomicNumber
  );
  console.log("getElementProperties Result", result);

  return result && result[0];
};
