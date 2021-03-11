import "./Admin.scss";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import ViewListIcon from "@material-ui/icons/ViewList";
import AddIcon from "@material-ui/icons/Add";
import BreedEdit from "../../features/BreedEdit/BreedEdit";
import BreedListSetting from "./BreedsListSetting/BreedListSetting";
import NewBreed from "./NewBreed/NewBreed";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

const Admin = () => {
  const { url, path } = useRouteMatch();
  // const location = useLocation();

  return (
    <div className="admin">
      <div className="admin__wrapper">
        <div className="admin__menu">
          <ul>
            <li>
              <Link to={`${url}/breeds`}>
                <span>Breeds</span>
                <ViewListIcon />
              </Link>
            </li>
            <li>
              <Link to={`${url}/breed/new`}>
                <span>Add New Breed</span>
                <AddIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="admin__page">
          <Switch>
            <Redirect exact from={`${path}/`} to={`${path}/breeds`} />
            <Route exact path={`${path}/breeds`}>
              <BreedListSetting />
            </Route>
            <Route path={`${path}/breeds/:id`}>
              <BreedEdit />
            </Route>
            <Route path={`${path}/breed/new`}>
              <NewBreed />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
