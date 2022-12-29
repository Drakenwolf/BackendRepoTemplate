

import express, { Request, Response } from "express";
// import { UserRepository } from "../Domain/user";
// import DbGLobal from "../db/DbGlobal";
// import * as users from "../Domain/user"
// import { commit, isUniqueErr, rollback, startTrx } from "../Repo";


const router = express.Router();
// const pool = DbGLobal.getInstance().pool;

// const usersRepo = new users.UserRepository(pool)

router.get("/:id", async (req: Request, res: Response) => {
//   const user = await usersRepo.findOne(req.params.id, {
//     select: ['id', 'username', 'walletAddress'],
//   })

  res.send({
    // user: user ?? null,
  })
});


router.post("/", async (req: Request, res: Response) => {
    // const body = req.body;
    // const tx = await startTrx(pool)
    // try {
    //   const user = await usersRepo.create({
    //     username: body.username,
    //     walletAddress: body.walletAddress,
    //     socialId: body.socialId,
    //   }, tx)

    //   await commit(tx)

    //   res.status(201)
    //   res.send({ user: user ?? null })
    // } catch (e) {
    //   await rollback(tx)

    //   if (isUniqueErr(e)) {
    //     res.status(400)

    //     res.send({ message: 'User aleady exist!' })
    //   }

    //   throw e
    // } finally {
    //   tx.release()
    // }
});

module.exports = router;