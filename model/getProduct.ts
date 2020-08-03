import client from '../mysql.ts';

export async function getProduct (id: number) {
  const result = await client.execute(`SELECT * FROM product where product_id = ?`, [id]);
  return result.rows;
}
