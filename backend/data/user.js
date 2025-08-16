import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Alice Nguyen',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bob Tran',
    email: 'bob@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Charlie Le',
    email: 'charlie@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
