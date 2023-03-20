// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
//This is feature 4

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // This is feature 3
  //This is feature 2
  res.status(200).json({ name: 'abc feature 1' })
}
