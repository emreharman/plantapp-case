import Input from "@/components/input";
import { render } from "@testing-library/react-native";
import React from "react";

// Mock Fonts to avoid missing native font errors in test environment
jest.mock("@/constants/fonts", () => ({
  regular: "System",
}));

it("renders TextInput correctly", () => {
  // Render Input with a placeholder
  const { getByTestId } = render(<Input placeholder="E-mail" />);
  // Select the TextInput by its testID
  const input = getByTestId("text-input");
  // Verify that the TextInput is rendered
  expect(input).toBeTruthy();
});

it("renders left icon if provided", () => {
  // Mock icon source (using a simple object since no real image is needed in tests)
  const icon = { uri: "mock-icon" };

  // Render Input with an icon prop
  const { getByTestId } = render(<Input icon={icon} />);
  // Select the Image element by its testID
  const image = getByTestId("input-icon");
  // Verify that the icon is rendered
  expect(image).toBeTruthy();
});

it("applies custom container style", () => {
  // Render Input with a custom container style
  const { getByTestId } = render(
    <Input containerStyle={{ backgroundColor: "red" }} />
  );

  // Select the container by its testID
  const container = getByTestId("input-container");

  // Flatten styles since React Native styles can be arrays
  const flattenedStyles = Array.isArray(container.props.style)
    ? Object.assign({}, ...container.props.style)
    : container.props.style;

  // Verify that the container has the custom background color applied
  expect(flattenedStyles.backgroundColor).toBe("red");
});
