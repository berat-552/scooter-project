const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  let user;

  beforeEach(() => {
    user = new User("testUser", "password123", 25);
  });

  it("logs a user in if the password is correct", () => {
    // Arrange
    // Act
    // Assert
    user.login("password123");
    expect(user.loggedIn).toBe(true);
  });

  it("throws an error if the password is incorrect", () => {
    // Arrange
    // Act
    // Assert
    expect(() => user.login("wrongPassword")).toThrow("Incorrect password.");
  });
  it("logs a user out", () => {
    // Arrange
    // Act
    // Assert
    user.login("password123");
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
