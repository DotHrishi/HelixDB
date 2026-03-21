import { NextResponse } from "next/server";
import { pool } from "../../../lib/db/postgres";
import { generateSQL } from "../../../lib/db/generateSQL";
import { explainResult } from "../../../lib/ai/explainResults";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  let schemaText = "";

  const tables = await pool.query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema='public';
  `);

  for (const table of tables.rows) {
    const columns = await pool.query(
      `
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name=$1;
    `,
      [table.table_name]
    );

    schemaText += `Table: ${table.table_name}\nColumns: ${columns.rows
      .map((c) => c.column_name)
      .join(", ")}\n\n`;
  }

  // ✅ now schemaText exists
  const sql = await generateSQL(prompt, schemaText);

  try {
    const cleanSQL = sql.replace(/```sql|```/g, "").trim();

    const result = await pool.query(cleanSQL);

    return NextResponse.json({
      sql: cleanSQL,
      data: result.rows,
      explanation: await explainResult(prompt, result.rows),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      error: "Query Failed",
      sql,
    });
  }
}