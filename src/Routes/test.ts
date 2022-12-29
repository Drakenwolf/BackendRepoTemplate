

import express, { Request, Response } from "express";
import { TestRepository } from "../Domain/test";
import DbGLobal from "../db/DbGlobal";
import * as test from "../Domain/test"
import { commit, isUniqueErr, rollback, startTrx } from "../Repo";


const router = express.Router();
const pool = DbGLobal.getInstance().pool;

const testRepo = new test.TestRepository(pool)

router.get("/:id", async (req: Request, res: Response) => {
  const test = await testRepo.findOne(req.params.id, {
    select: ['id'],
  })

  res.send({
    // test: test ?? null,
  })
});


router.post("/", async (req: Request, res: Response) => {
    const {body} = req;
    const tx = await startTrx(pool)
    try {
      const test = await testRepo.create({}, tx)

      await commit(tx)

      res.status(201)
      res.send({ test: test ?? null })
    } catch (e) {
      await rollback(tx)

      if (isUniqueErr(e)) {
        res.status(400)

        res.send({ message: 'test aleady exist!' })
      }

      throw e
    } finally {
      tx.release()
    }
});

module.exports = router;