import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import Navigation from "../components/Navigation";

describe("App", () => {
  it("has a Navigation component", () => {
    const wrapper = shallow(<App />);
    const expectedLength = 1;

    expect(wrapper.find(Navigation).length).toBe(expectedLength);

    wrapper.unmount();
  });
});
