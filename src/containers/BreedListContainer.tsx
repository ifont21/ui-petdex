import axios from "axios";
import { useEffect, useState } from "react";

const BreedListContainer = (Component: any) => {
  const WrapperComponent = (props: { [key: string]: any }) => {
    const [breeds, setBreeds] = useState();

    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/pets`)
        .then((response: any) => {
          const breeds = response.data;
          setBreeds(breeds);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }, []);
    return <Component breeds={breeds} {...props} />;
  };

  return WrapperComponent;
};

export default BreedListContainer;
