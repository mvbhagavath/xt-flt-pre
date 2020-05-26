import React from "react";
import { render } from "@testing-library/react";
import CharactersList from "..";

describe("CharactersList", () => {
  it("should render component without crashing", () => {
    const props = {
      characters: [
        {
          id: 1,
          name: "test",
          status: "alive",
          gender: "male",
          species: "humanoid",
          origin: {name:"earth"},
          image: "xyz",
        },
        {
          id: 2,
          name: "test",
          status: "alive",
          gender: "male",
          species: "humanoid",
          origin: { name: "earth"},
          image: "xyz",
        },
        {
          id: 3,
          name: "test",
          status: "alive",
          gender: "male",
          species: "humanoid",
          origin: { name: "earth"},
          image: "xyz",
        },
        {
          id: 4,
          name: "test",
          status: "alive",
          gender: "male",
          species: "humanoid",
          origin:{ name: "earth"},
          image: "xyz",
        },
      ],
    };
    const wrapper = render(<CharactersList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
