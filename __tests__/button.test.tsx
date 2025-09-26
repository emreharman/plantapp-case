import Button from "@/components/button";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

// Mock Fonts to avoid errors with missing native fontFamily in tests
jest.mock("@/constants/fonts", () => ({
  default: {
    medium: "System",
  },
}));

describe("Button", () => {
  it("renders with correct title", () => {
    // Render the Button with a title
    const { getByText } = render(<Button title="Test Button" />);
    // Assert that the button text is correctly rendered
    expect(getByText("Test Button")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    // Create a mock function to simulate onPress
    const onPressMock = jest.fn();

    // Render the Button with the mock onPress
    const { getByText } = render(
      <Button title="Press Me" onPress={onPressMock} />
    );

    // Simulate a press event on the button text
    fireEvent.press(getByText("Press Me"));

    // Verify that the mock function was called exactly once
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("applies custom style when passed", () => {
    // Render the Button with a custom style and testID for easy selection
    const { getByTestId } = render(
      <Button
        title="Styled"
        style={{ backgroundColor: "red" }}
        testID="custom-button"
      />
    );

    // Grab the button using testID
    const button = getByTestId("custom-button");

    // Ensure styles are normalized to an array
    const style = Array.isArray(button.props.style)
      ? button.props.style
      : [button.props.style];

    // Assert that the style contains the custom background color
    expect(style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: "red" }),
      ])
    );
  });
});
