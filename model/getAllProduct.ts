import client from '../mysql.ts';

export async function getAllProduct () {
  const result = await client.execute(`SELECT * FROM product`);
  return result.rows;
}
