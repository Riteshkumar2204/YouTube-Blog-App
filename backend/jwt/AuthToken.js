


import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  // res.cookie("jwt", token, {
  //   httpOnly: true, // Temporarily set to false for testing
  //   secure: false,
  //   sameSite: "lax",
  //   path: "/", // Ensure the cookie is available throughout the site
  // });

  res.cookie("jwt", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // ✅ HTTPS only in prod
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // ✅ allow cross-site cookies (e.g., Vercel frontend + Render backend)
  path: "/",
});

  await User.findByIdAndUpdate(userId, { token });
  return token;
};

export default createTokenAndSaveCookies;