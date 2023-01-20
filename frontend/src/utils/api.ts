import axios from "axios";
import { IUser } from "../types/user";

export const getAllUsers = async (): Promise<IUser[]> => {
  const res = await axios<IUser[]>(
    `http://localhost:${process.env.API_PORT || 8081}/users/all`
  );
  return res.data;
};

export const createUser = async (): Promise<IUser[]> => {
  const res = await axios<IUser[]>(
    `http://localhost:${process.env.API_PORT || 8081}/users/create`
  );
  return res.data;
};

export const removeUser = async (id: number): Promise<IUser[]> => {
  const res = await axios<IUser[]>({
    method: "post",
    url: `http://localhost:${process.env.API_PORT || 8081}/users/remove`,
    data: { id: id },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
