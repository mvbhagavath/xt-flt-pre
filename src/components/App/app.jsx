import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterList from "../CharacterList";
import Search from "../Search";
import Sort from "../Sort";
import SidePanel from "../SidePanel/SidePanel";
import { getData } from "../../utils/api";
import { CHRACTER_ENDPOINT } from '../../utils/constants';
import { fetchDataSuccess, fetchDataFail } from "../../redux/actions/fetchData";
import Logo from '../../assets/logo.png';
import "./styles.scss";

const App = () => {
  const { data, apiError } = useSelector((state) => state.fetchData);
  const characters = data?.results;
  const dispatch = useDispatch();

  useEffect(() => {
    /* istanbul ignore else */
    if (!characters && !apiError) {
      dispatch(getData(CHRACTER_ENDPOINT, fetchDataSuccess, fetchDataFail));
    }
  }, []);

  const getMarkup = () => {
    return <div className="app app__message">
      { apiError ? 'No Results Found' : 'Loading....' }
    </div>
  }

  return <div className="app container-fluid">
      <header className="app__header">
        <img className="app__logo" src={Logo} alt="rick and morty"/>
        <h1 className="app__heading"> Rick and Morty</h1>
      </header>
      <div className="row">
        <SidePanel />
        <section className="col-lg-10 app__main-section">
          <section className="row app__search-sort-section">
            <Search />
            <Sort />
          </section>
          {characters && characters.length > 0 ? (
          <CharacterList characters={characters} />): getMarkup()}
        </section>
      </div>
    </div>
};

export default App;
