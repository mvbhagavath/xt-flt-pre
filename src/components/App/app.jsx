import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterList from "../CharacterList";
import Search from "../Search";
import Sort from "../Sort";
import SidePanel from "../SidePanel/SidePanel";
import { getData } from "../../utils/api";
import { fetchDataSuccess, fetchDataFail } from "../../redux/actions/fetchData";
import "./styles.scss";

const App = () => {
  const { data } = useSelector((state) => state.fetchData);
  const characters = data?.results;
  const dispatch = useDispatch();

  useEffect(() => {
    /* istanbul ignore else */
    if (!characters) {
      dispatch(getData("/character", fetchDataSuccess, fetchDataFail));
    }
  });

  return characters && characters.length > 0 ? (
    <div className="app-container container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <SidePanel />
        </div>
        <div className="col-lg-10">
          <section className="row search-sort-section">
            <Search />
            <Sort />
          </section>
          <CharacterList characters={characters} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  );
};

export default App;
