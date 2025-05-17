import { Request, Response } from 'express';

export const webhookWaba = async (req: Request, res: Response) => {
  const { object, entry } = req.body;
  return res.status(200).json({
    data: {
      object,
      entry,
    },
  });
};
