import { LEVELS, passed, remaining } from "./a11y";

test("icon-only fails until the button has a name", () => {
  const level = LEVELS[0]!;
  expect(remaining(level.required, [])).toEqual(["name-button"]);
  expect(passed(level.required, ["name-button"])).toBe(true);
});

test("the checkout needs every fix", () => {
  const level = LEVELS[3]!;
  expect(passed(level.required, ["name-button", "heading-order"])).toBe(false);
  expect(passed(level.required, ["name-button", "heading-order", "focus-trap"])).toBe(true);
});
