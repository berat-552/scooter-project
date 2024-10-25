const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("scooter.rent(user)", () => {
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter("Station1");
    user = new User("testUser", "password123", 25);
  });

  it("checks a scooter out to a user", () => {
    // Arrange
    // Act
    // Assert
    scooter.rent(user);
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });

  it("throws an error if battery dead or scooter broken", () => {
    // Arrange
    // Act
    // Assert
    scooter.charge = 10;
    expect(() => scooter.rent(user)).toThrow("Scooter needs to charge.");
  });

  it("returns a scooter to a station", () => {
    // Arrange
    // Act
    // Assert
  });

  it("repairs a scooter", () => {
    // Arrange
    // Act
    // Assert
    scooter.isBroken = true;
    expect(() => scooter.rent(user)).toThrow("Scooter needs repair.");
  });

  it("charges a scooter", () => {
    // Arrange
    // Act
    // Assert
    scooter.charge = 50;
    scooter.recharge();

    expect(scooter.charge).toBe(50);
  });
});
