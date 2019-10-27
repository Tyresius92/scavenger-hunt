import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";

describe("App", () => {
  it("has a Navigation component", () => {
    const wrapper = shallow(<App />);
    const expectedLength = 1;

    expect(wrapper.find(Navigation).length).toBe(expectedLength);

    wrapper.unmount();
  });

  it("has a Timer component", () => {
    const wrapper = shallow(<App />);
    const expectedLength = 1;

    expect(wrapper.find(Timer).length).toBe(expectedLength);

    wrapper.unmount();
  });
});
