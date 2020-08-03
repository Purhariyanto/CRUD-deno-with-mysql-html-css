import client from '../mysql.ts';

export async function addProduct (parse:any) {
  const result = await client.execute(`INSERT INTO product(product_name,product_price) values(?,?)`, [parse.name,parse.price]);
  return result.affectedRows;
}
