import { Clerk } from "@clerk/clerk-sdk-node";
import { NextApiRequest, NextApiResponse } from "next";

const clerk = new Clerk({
  apiKey: process.env.CLERK_SECRET_KEY, // Replace with your Clerk API key
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;

  try {
    await clerk.users.verifyEmail(token);
    res.status(200).json({ message: "Email verification successful" });
  } catch (error) {
    console.error("Email verification error:", error);
    res.status(500).json({ error: "Email verification error" });
  }
}
