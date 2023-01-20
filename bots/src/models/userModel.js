const axios = require("axios");
const constants = require("../utils/constants.js");

let users = [];

class Users {
  async create() {
    const res = await axios.get(
      `http://${constants.domen}:${constants.port}/generate`
    );

    users.push(res.data);
  }

  getAll() {
    return users;
  }

  remove(id) {
    const filtred = users.filter((user) => user.id !== id);
    users = filtred;
    return filtred;
  }
}

module.exports = new Users();
