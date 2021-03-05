import type { Request, Response } from "express";

export const indexController = (req: Request, res: Response) => {
  console.log(req.url);
  res.send("Hello There");
};
