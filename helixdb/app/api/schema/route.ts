import {NextResponse} from 'next/server';
import {pool} from '../../../lib/db/postgres';

export async function GET() {
    try{
        const tables=await pool.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema='public';
        `);

        const schema=[];
        for(const table of tables.rows){
            const columns= await pool.query(`
                SELECT column_name
                FROM information_schema.columns
                WHERE table_name=$1;
        `, [table.table_name]);

        schema.push({
                table: table.table_name,
                columns: columns.rows.map(c => c.column_name),
            });
        }

        return NextResponse.json({schema});
    } catch (err) {
        return NextResponse.json({error: "Failed to fetch schema"});
    }
}