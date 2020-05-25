import React from "react";
import { render } from "@testing-library/react";
import CharacterCard from "..";

describe("CharacterCard", () => {
  it("should render component without crashing", () => {
    const props = {
      id: "1",
      name: "test",
      status: "alive",
      gender: "male",
      species: "humanoid",
      origin: "earth",
      image: "xyz",
    };
    const wrapper = render(<CharacterCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
