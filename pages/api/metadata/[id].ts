// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

/* type Data = {
  name: string;
}; */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse /* <Data> */
) {
  const { id } = req.query;

  const metadata = {
    title: "Bootnode NFT Metadata",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "ManuParty",
      },
      description: {
        type: "string",
        description: "Manu in a party",
      },
      image: {
        type: "string",
        description: `https://someUrl/${id}`,
      },
    },
  };

  res.status(200).json(metadata);
}
