import * as React from "react";
import { render } from "react-testing-library";
import { unstable_createComponent } from "../createComponent";

test("createComponent", () => {
  const useHook = ({ children }: { children: string }) => ({ children });
  useHook.__keys = ["children"] as ["children"];
  const Component = unstable_createComponent({ as: "div", useHook });
  const { getByText } = render(<Component>component</Component>);
  expect(getByText("component")).toBeDefined();
});