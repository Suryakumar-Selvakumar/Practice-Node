class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age = "", bio = "" }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age = "", bio = "" }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  findUser({ nameSearch, emailSearch = "" }) {
    const [firstName, lastName] = nameSearch.split(" ");

    const foundUserKey = Object.keys(this.storage).find((id) => {
      if (emailSearch !== "") {
        if (lastName && firstName) {
          if (
            this.storage[id].firstName === firstName &&
            this.storage[id].lastName === lastName &&
            this.storage[id].email === emailSearch
          ) {
            return true;
          }
        } else {
          if (
            (this.storage[id].firstName === firstName ||
              this.storage[id].lastName === firstName) &&
            this.storage[id].email === emailSearch
          ) {
            return true;
          }
        }
      } else {
        if (lastName && firstName) {
          if (
            this.storage[id].firstName === firstName &&
            this.storage[id].lastName === lastName
          ) {
            return true;
          }
        } else {
          if (
            this.storage[id].firstName === firstName ||
            this.storage[id].lastName === firstName
          ) {
            return true;
          }
        }
      }
    });

    return foundUserKey;
  }
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
