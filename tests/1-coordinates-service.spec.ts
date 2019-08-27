import { expect } from "chai";
import "mocha";
import { AccountViolations } from "../types";
import CoordinatesService from "../services/coordinates-service";

const _coordinatesService = new CoordinatesService()

describe("Set Initial Position 8,12 OK", () => {
  it("should be 8,12", () => {
    const result = _coordinatesService.SetInitialPosition(
      JSON.parse(JSON.stringify({ coordinates: "8,12"}))
    );
    expect(result.coordinates).be.eq("8,12");
  });
});
describe("Set Position N,23 OK", () => {
  it("should be 8,35", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "N,23" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("8,35");
  });
});
describe("Set Position O,-7 OK", () => {
  it("should be 1,35", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "O,-7" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("1,35");
  });
});
describe("Set Position S,-40 OK", () => {
  it("should be 1,-5", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "S,-40" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("1,-5");
  });
});
describe("Set Position L,33 OK", () => {
  it("should be 34,-5", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "L,33" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("34,-5");
  });
});
describe("Set Position N,15 OK", () => {
  it("should be 34,-5", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "N,15" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("34,10");
  });
});

describe("Set Initial Position -10,0 OK", () => {
  it("should be -10,0", () => {
    const result = _coordinatesService.SetInitialPosition(
      JSON.parse(JSON.stringify({ coordinates: "-10,0"}))
    );
    expect(result.coordinates).be.eq("-10,0");
  });
});
describe("Set Position L,14 OK", () => {
  it("should be 4,0", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "L,14" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("4,0");
  });
});
describe("Set Position N,27 OK", () => {
  it("should be 4,27,35", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "N,27" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("4,27");
  });
});
describe("Set Position O,-33 OK", () => {
  it("should be -29,27", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "O,-33" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("-29,27");
  });
});
describe("Set Position S,-20 OK", () => {
  it("should be -29,7", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "S,-20" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("-29,7");
  });
});
describe("Set Position L,15 OK", () => {
  it("should be -14,7", () => {
    const result = _coordinatesService.SetPosition(
      JSON.parse(JSON.stringify({ coordinates: "L,15" }))
    );
    console.log(result);
    expect(result.coordinates).be.eq("-14,7");
  });
});