import { useDojoStore } from "./dojoStore";

test("toggling a fix then next clears the kit for the following level", () => {
  useDojoStore.setState({ index: 0, enabled: [] });
  useDojoStore.getState().toggle("name-button");
  expect(useDojoStore.getState().enabled).toEqual(["name-button"]);
  useDojoStore.getState().next();
  expect(useDojoStore.getState().index).toBe(1);
  expect(useDojoStore.getState().enabled).toEqual([]);
  useDojoStore.getState().reset();
});
