
import client from '../mysql.ts';

export async function editProduct (parse:any) {
  const result = await client.execute(`update product set product_name = ?, product_price = ? where product_id = ?`, [parse.name,parse.price,parse.id]);
  return result.affectedRows;
}
