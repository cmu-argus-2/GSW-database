import { query } from "../database.js";

export const getCommands = async () => {
  const { rows } = await query(`
        SELECT * FROM public.txcommands_tb
        ORDER BY created_at ASC
    `);

  return rows;
};

export const addCommand = async (commandData) => {
  const { command_id, command_name, args } = commandData;

  const { rows } = await query(
    `
        INSERT INTO txCommands_tb (command_id, command_name, args)
        VALUES ($1::bigint, $2, $3) RETURNING *`,
    [command_id, command_name, args],
  );

  return rows[0];
};
