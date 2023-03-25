// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { eventName, eventDescription, eventLocation } = req.body.form;

  const event = await prisma.event.create({
    data: {
      name: eventName,
      description: eventDescription,
      date: new Date(),
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  return res.status(200).json(event);
}
