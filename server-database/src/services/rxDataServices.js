import { query } from "../database.js";

export const getRXData = async () => {
  const { rows } = await query(`
        SELECT * FROM public.rxdata_tb
        ORDER BY time_received DESC
    `);

  return rows;
};

