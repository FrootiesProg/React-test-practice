import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

const TEST_IMAGES = [
  { id: 1, src: "image1.jpg", caption: "Caption 1" },
  { id: 2, src: "image2.jpg", caption: "Caption 2" },
];

test("Left arrow is missing on first image", () => {
  const { getByTestId } = render(
    <Carousel photos={TEST_IMAGES} title="Image Carousel" />
  );

  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // Check that the left arrow is missing on the first image
  expect(leftArrow).toBeDisabled();

  // Click the right arrow to move to the second image
  fireEvent.click(rightArrow);

  // Check that the left arrow is now enabled on the second image
  expect(leftArrow).not.toBeDisabled();
});

test("Right arrow is missing on last image", () => {
  const { getByTestId } = render(
    <Carousel photos={TEST_IMAGES} title="Image Carousel" />
  );

  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // Click the right arrow to move to the second image
  fireEvent.click(rightArrow);

  // Check that the right arrow is enabled on the second image
  expect(rightArrow).not.toBeDisabled();

  // Click the right arrow again to move to the last image
  fireEvent.click(rightArrow);

  // Check that the right arrow is missing on the last image
  expect(rightArrow).toBeDisabled();
});
