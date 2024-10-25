const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const User = require("./User");
const Scooter = require("./Scooter");

describe("ScooterApp tests", () => {
  let app;

  beforeEach(() => {
    app = new ScooterApp();
  });

  it("registers a new user if old enough", () => {
    // Arrange
    // Act
    // Assert
  });

  it("throws an error if too young or already registered", () => {
    // Arrange
    // Act
    // Assert
    app.registerUser("testUser", "password123", 25);
    expect(() => app.registerUser("testUser", "password123", 25)).toThrow(
      "Already registered or too young to register."
    );
    expect(() => app.registerUser("youngUser", "password123", 17)).toThrow(
      "Already registered or too young to register."
    );
  });

  it("logs in a registered user", () => {
    app.registerUser("testUser", "password123", 25);
    app.loginUser("testUser", "password123");
    const user = app.registeredUsers.find((u) => u.username === "testUser");
    expect(user.loggedIn).toBe(true);
  });

  it("throws an error if user not found or password incorrect", () => {
    // Arrange
    // Act
    // Assert
    app.registerUser("testUser", "password123", 25);
    expect(() => app.loginUser("wrongUser", "password123")).toThrow(
      "Incorrect password."
    );
    expect(() => app.loginUser("testUser", "wrongPassword")).toThrow(
      "Incorrect password."
    );
  });

  it("logs out a registered user", () => {
    // Arrange
    // Act
    // Assert
  });

  it("throws an error if user not found", () => {
    app.registerUser("testUser", "password123", 25);
    app.loginUser("testUser", "password123");
    app.logoutUser("testUser");
    const user = app.registeredUsers.find((u) => u.username === "testUser");
    expect(user.loggedIn).toBe(false);
  });

  it("creates a new scooter and adds it to ScooterApp.stations", () => {
    const scooter = app.createScooter("Station1");
    expect(app.stations["Station1"]).toContain(scooter);
  });

  it("throws an error if a station does not exist", () => {
    expect(() => app.createScooter("NonExistentStation")).toThrow(
      "No such station."
    );
  });

  it("docks a scooter at a station", () => {
    const scooter = app.createScooter("Station1");
    app.dockScooter(scooter, "Station2");
    expect(app.stations["Station2"]).toContain(scooter);
  });

  it("throws an error if a station does not exist", () => {
    const scooter = app.createScooter("Station1");
    expect(() => app.dockScooter(scooter, "NonExistentStation")).toThrow(
      "No such station."
    );
    expect(() => app.dockScooter(scooter, "Station1")).toThrow(
      "Scooter already at station."
    );
  });

  it("throws an error if a scooter is already at a station", () => {
    // Arrange
    // Act
    // Assert
  });

  it("rents a scooter out to a user", () => {
    // Arrange
    // Act
    // Assert
  });

  it("throws an error if a scooter is already rented", () => {
    // Arrange
    // Act
    // Assert
  });
});
