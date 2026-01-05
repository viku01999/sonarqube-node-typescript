import { UserBody } from "../controllers/userController";

import { UserBody } from "../controllers/userController";

// ❌ BAD: using any
const users: any = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// ❌ BAD: unused variable (guaranteed issue)
const temp = "I am not used anywhere";

export const fetchUsers = async (): Promise<UserBody[]> => {
  return users;
};

// ❌ BAD: no validation
export const saveUsers = async (data: UserBody): Promise<UserBody[]> => {
  users.push(data);
  return users;
};
