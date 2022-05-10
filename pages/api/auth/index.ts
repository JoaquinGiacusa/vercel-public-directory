import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ name: "John Doe" });
// };

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.send("soy el post auth");
  },
  async patch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).send("soy el patch auth");
  },
});
