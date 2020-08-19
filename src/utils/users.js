const users = [];

// addUser
const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate data
  if (!username || !room) {
    return {
      error: 'Username and room are required',
    };
  }

  // Check for existing user
  const exisitingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (exisitingUser) {
    return {
      error: 'Username is in use',
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

addUser({
  id: 22,
  username: 'tanner',
  room: 'Boinkers',
});

addUser({
  id: 23,
  username: 'Scrimmy',
  room: 'Boinkers',
});

addUser({
  id: 24,
  username: 'Frank',
  room: 'Downtown',
});

console.log(users);

// removeUser
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const removedUser = removeUser(20);

console.log(removedUser);
console.log(users.length);

// getUser

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

console.log(getUser(24));

// getUsersInRoom

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
