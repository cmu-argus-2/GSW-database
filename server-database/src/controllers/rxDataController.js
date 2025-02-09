import * as rxDataServices from "../services/rxDataServices.js";

export const getRXData = async (req, res) => {
  try {
    const rxData = await rxDataServices.getRXData();
    res.status(200).json(rxData);
  } catch (err) {
    console.error("Error fetching the recieved data:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
