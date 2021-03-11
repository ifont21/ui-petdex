import {
  Breed,
  Props,
} from "../../pages/Admin/BreedsListSetting/BreedListSetting";

export function getColumns() {
  return [
    {
      id: "status",
      label: "Status",
    },
    {
      id: "id",
      label: "Id",
    },
    {
      id: "key",
      label: "Label key",
    },
    {
      id: "countFilled",
      label: "Filled Data",
    },
    {
      id: "countNotFilled",
      label: "Missing Data",
    },
    {
      id: "edition",
      label: "",
    },
  ];
}

export function createData(breeds: Breed[]) {
  return breeds?.map(mapProcessData) ?? [];
}

function mapProcessData({
  _id: id,
  key,
  etimology,
  features,
  history,
  name,
  feeding,
  mortaility,
  temperament,
  caring,
  picture,
}: Breed) {
  const breedData = {
    etimology,
    features,
    history,
    name,
    feeding,
    mortaility,
    temperament,
    caring,
    picture,
  } as Props;

  const dataProps = Object.keys(breedData);

  const countFilled = dataProps.reduce((acc, curr) => {
    return breedData[curr] ? acc + 1 : acc;
  }, 0);

  const countNotFilled = dataProps.reduce((acc, curr) => {
    return breedData[curr] ? acc : acc + 1;
  }, 0);

  return {
    id,
    key,
    countFilled,
    countNotFilled,
    status: countFilled === dataProps?.length ? "completed" : "not-completed",
  };
}
