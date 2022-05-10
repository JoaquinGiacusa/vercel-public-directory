import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    // const productId = req.query.productId;
    res.send("get del product id: " + req.query.productId);
  },
});

// export default function handler(req, res) {
//   res.status(200).json({
//     body: req.body,
//     query: req.query,
//     cookies: req.cookies,
//     test: false,
//   });
// }
