import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import Search from "..";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  fetchData: {
    setFilters: {
      species:[]
    }
  },
});

describe("Search", () => {
  it("should render component without crashing", () => {
    const wrapper = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
