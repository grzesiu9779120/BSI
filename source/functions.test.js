/* eslint-disable import/extensions */
import {
  probabilitySelectingPerson,
  numberEmployeesAndProfitableAnnualFee,
  numberPartsToReplace,
  probabilityOfBeingShotDown,
  probabilityOfSelectTwoChildren,
} from "./functions.js";

describe("Function - probabilitySelectingPerson", () => {
  test("standard variables", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
  test("numerator greater than the denominator", () => {
    expect(probabilitySelectingPerson(2, 1, 2, 1)).toBe(
      "Invalid value, denominator cannot be greater than numerator."
    );
  });
  test("standard variables", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
  test("standard variables", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
});

describe("Function - numberEmployeesAndProfitableAnnualFee", () => {
  test("check", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
});

describe("Function - numberPartsToReplace", () => {
  test("check", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
});

describe("Function - probabilityOfBeingShotDown", () => {
  test("check", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
});

describe("Function - probabilityOfSelectTwoChildren", () => {
  test("check", () => {
    expect(probabilitySelectingPerson(1, 2, 1, 2)).toBe(
      "1 / 2 in fraction and 0.5000 decimal"
    );
  });
});
