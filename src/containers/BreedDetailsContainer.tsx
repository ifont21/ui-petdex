import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreedDetailsContainer = (Component: any) => {
  const WrappedComponent = (props: { [key: string]: any }) => {
    const { id } = useParams<{ id: string }>();
    const [breed, setBreed] = useState();

    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/pets/${id}`)
        .then((response: any) => {
          const breed = response.data;
          setBreed(breed);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }, []);

    return breed ? (
      <Component breed={breed} {...props} />
    ) : (
      <div>Loading...</div>
    );
  };

  return WrappedComponent;
};

export default BreedDetailsContainer;
