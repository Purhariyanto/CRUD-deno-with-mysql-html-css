import client from '../mysql.ts';

export async function deleteProduct (id: number) {
  const result = await client.execute(`DELETE FROM product where product_id = ?`, [id]);
  return result.affectedRows;
}
