import React from "react";
import renderer from "react-test-renderer"; 
import { render } from "@testing-library/react";
import Card from "./Card";

test("Card component renders without crashing", () => {
  render(<Card />);
});

test("Card component snapshot", () => {
  const component = renderer.create(<Card />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
