import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "..";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  fetchData: {
    setFilters: {
      species:[]
    }
  },
});

describe("App", () => {
  it("should render app without crashing", () => {
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
