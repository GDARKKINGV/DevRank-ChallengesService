import Challenge from "../models/challenge.model.js";

export const createChallenge = async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(201).json(challenge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
