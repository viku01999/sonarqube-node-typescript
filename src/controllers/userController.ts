import { Request, Response } from "express";
import { fetchUsers, saveUsers } from "../services/userService";



export interface UserBody {
  id: number;
  name: string;
}


export const getAllUserController = async (req: Request<{}, {}, {}>, res: Response): Promise<void> => {
    const data = await fetchUsers();
    res.send(data)
}


// export const addUsersController = async (req: Request<{}, {}, UserBody>, res: Response): Promise<void> => {
//     if (!req.body.name || !req.body.id) {
//         res.send("ID and Name both are required.")
//         return
//     }
//     const data = await saveUsers(req.body);
//     res.send(data)
// }

export const addUsersController = async (
  req: Request<{}, {}, UserBody>,
  res: Response
): Promise<void> => {

  // ❌ BAD: loose equality
  if (req.body.id == null) {
    res.send("ID missing"); // ❌ no status code
    return;
  }

  // ❌ BAD: no try/catch
  const data = await saveUsers(req.body);
  res.send(data);
};
