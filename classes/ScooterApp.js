const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  constructor() {
    this.stations = {
      Station1: [],
      Station2: [],
      Station3: [],
    };
    this.registeredUsers = [];
  }

  registerUser(username, password, age) {
    if (
      age >= 18 &&
      !this.registeredUsers.some((user) => user.username === username)
    ) {
      let user = new User(username, password, age);
      this.registeredUsers.push(user);
      console.log("User registered.");
      return user;
    } else {
      throw new Error("Already registered or too young to register.");
    }
  }

  loginUser(username, password) {
    let user = this.registeredUsers.find((user) => user.username === username);
    if (user) {
      user.login(password);
      console.log("User logged in.");
    } else {
      throw new Error("Incorrect password.");
    }
  }

  logoutUser(username) {
    let user = this.registeredUsers.find((user) => user.username === username);
    if (user) {
      user.logout();
      console.log("User logged out.");
    } else {
      throw new Error("No such user is logged in.");
    }
  }

  createScooter(station) {
    if (this.stations[station]) {
      let scooter = new Scooter(station);
      this.stations[station].push(scooter);
      console.log("Created new scooter.");
      return scooter;
    } else {
      throw new Error("No such station.");
    }
  }

  dockScooter(scooter, station) {
    if (this.stations[station]) {
      if (!this.stations[station].includes(scooter)) {
        scooter.dock(station);
        this.stations[station].push(scooter);
        console.log("Scooter is docked.");
      } else {
        throw new Error("Scooter already at station.");
      }
    } else {
      throw new Error("No such station.");
    }
  }

  rentScooter(scooter, user) {
    for (let station in this.stations) {
      let index = this.stations[station].indexOf(scooter);
      if (index !== -1) {
        this.stations[station].splice(index, 1);
        scooter.rent(user);
        console.log("Scooter is rented.");
        return;
      }
    }
    throw new Error("Scooter already rented.");
  }

  print() {
    console.log("Registered Users:", this.registeredUsers);
    console.log("Stations:", this.stations);
  }
}

module.exports = ScooterApp;
