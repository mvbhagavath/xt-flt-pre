import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import Filters from "..";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  fetchData: {},
});

describe("Filters", () => {
  it("should render component without crashing", () => {
    const props = {
      label: "Species",
      filterItems: ["Human", "Animal", "Alien"],
      id: "species",
    };
    const wrapper = render(
      <Provider store={store}>
        <Filters {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
