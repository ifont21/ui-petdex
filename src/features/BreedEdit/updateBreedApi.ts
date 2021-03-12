import axios from "axios";
import { Controls } from "./BreedEdit";

export function updateBreedApi(
  id: string,
  payload: Controls,
  handleSuccess: () => void,
  handleError: (err: any) => void
): void {
  axios
    .put(
      `http://ec2-18-205-161-174.compute-1.amazonaws.com:8080/api/pets/${id}`,
      payload
    )
    .then((response: any) => {
      handleSuccess();
    })
    .catch((err: any) => {
      handleError(err);
    });
}
