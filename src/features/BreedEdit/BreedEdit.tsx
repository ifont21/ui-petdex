import "./BreedEdit.scss";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button/Button";

import BreedDetailsContainer from "../../containers/BreedDetailsContainer";
import { Breed } from "../../pages/Admin/BreedsListSetting/BreedListSetting";
import { useForm, Controller } from "react-hook-form";
import { updateBreedApi } from "./updateBreedApi";
import PetsIcon from "@material-ui/icons/Pets";

export type Controls = {
  nameBreed: string;
  key: string;
  etimology: string;
  history: string;
  features: string;
  temperament: string;
  mortaility: string;
  caring: string;
  feeding: string;
};

const BreedEdit = ({ breed }: Breed) => {
  const {
    _id: id,
    key,
    name,
    etimology,
    history,
    features,
    feeding,
    temperament,
    caring,
    mortaility,
  } = breed;

  const { control, watch } = useForm<Controls>({
    mode: "onBlur",
    defaultValues: {
      nameBreed: name,
      key,
      etimology,
      history,
      features,
      temperament,
      mortaility,
      caring,
      feeding,
    },
  });
  const watchAll = watch();

  const handleSuccess = () => {
    console.log("update success");
  };

  const handleError = (err: any) => {
    console.log("An error has ocurred", err);
  };

  const handleSubmit = () => {
    updateBreedApi(id, watchAll, handleSuccess, handleError);
  };

  return (
    <div className="breed-edit">
      <form className="breed-edit__form">
        <div className="breed-edit__scroll-area">
          <div className="breed-edit__content">
            <div className="breed-edit__title">
              <h4>Breed Name</h4>
            </div>
            <div className="breed-edit__label-key">
              <span className="breed-edit__label-key--label">Label Key</span>
              <span>{key}</span>
            </div>
            <div className="breed-edit__field breed-edit__field--input">
              <label className="breed-edit__input-label">Name</label>
              <Controller
                name="nameBreed"
                control={control}
                render={({ value, onChange }) => (
                  <TextField
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>

            <div className="breed-edit__title">
              <h4>History</h4>
            </div>
            <div className="breed-edit__text-areas">
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>Etimology</span>
                </div>
                <Controller
                  name="etimology"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>History</span>
                </div>
                <Controller
                  name="history"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>

            <div className="breed-edit__title">
              <h4>Features</h4>
            </div>
            <div className="breed-edit__text-areas">
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>Features</span>
                </div>
                <Controller
                  name="features"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>Feeding</span>
                </div>
                <Controller
                  name="feeding"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>Temperament</span>
                </div>
                <Controller
                  name="temperament"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>Caring</span>
                </div>
                <Controller
                  name="caring"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="breed-edit__field">
                <div className="breed-edit__label">
                  <PetsIcon />
                  <span>Mortality</span>
                </div>
                <Controller
                  name="mortaility"
                  control={control}
                  render={({ value, onChange }) => (
                    <TextField
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="breed-edit__actions">
          <Button>Reset</Button>
          <Button onClick={handleSubmit} primary={true}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BreedDetailsContainer(BreedEdit);
