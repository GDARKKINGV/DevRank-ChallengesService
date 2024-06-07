import { Router } from "express";
import {
  getChallenges,
  getChallengeById,
  createChallenge,
  updateChallenge,
} from "../controllers/challenges.controller.js";

const router = Router();

router
  .get("/", getChallenges)
  .get("/:id", getChallengeById)
  .post("/challenge", createChallenge)
  .put("/:id", updateChallenge);

export default router;
