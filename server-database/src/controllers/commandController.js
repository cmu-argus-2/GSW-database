import * as commandService from "../services/commandServices.js";

export const getCommands = async (req, res) => {
  try {
    const tx_commands = await commandService.getCommands();
    res.status(200).json(tx_commands);
  } catch (err) {
    console.error("Error fetching the commands:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addCommand = async (req, res) => {
  try {
    const commandData = req.body;
    const newCommand = await commandService.addCommand(commandData);
    res.status(200).json(newCommand);
  } catch (err) {
    console.error("Error adding the command:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// TODO: add an update function to modify the parameters of a command
// TODO: add a delete function to delete a command to undo it
// TODO: add a search functionality to look at the particular commands submitted
