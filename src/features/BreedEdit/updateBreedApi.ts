import axios from "axios";
import { Controls } from "./BreedEdit";

export function updateBreedApi(
  id: string,
  payload: Controls,
  handleSuccess: () => void,
  handleError: (err: any) => void
): void {
  axios
    .put(`http://localhost:8080/api/pets/${id}`, payload)
    .then((response: any) => {
      handleSuccess();
    })
    .catch((err: any) => {
      handleError(err);
    });
}
