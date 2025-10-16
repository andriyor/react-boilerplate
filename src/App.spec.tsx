import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../src/App";

test("renders name", async () => {
  const { getByText, getByRole } = await render(<App name="Vitest" />);

  await expect.element(getByText("Hello Vitest x1!")).toBeInTheDocument();
  await getByRole("button", { name: "Increment " }).click();

  await expect.element(getByText("Hello Vitest x2!")).toBeInTheDocument();
});
