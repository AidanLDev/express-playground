import express from "express";
import { getUserOrders } from "../db/queries/orders.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("Fetching orders for user ID: ", userId);

  try {
    const orders = await getUserOrders(userId);
    if (orders.length === 0) {
      return res.status(404).send("No orders found for this user.");
    }
    return res.status(200).json(orders);
  } catch (err) {
    console.error("Error fetching orders: ", err);
    return res.status(500).send("Error fetching orders");
  }
});

export default router;
