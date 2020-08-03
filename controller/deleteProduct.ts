import { deleteProduct } from '../model/deleteProduct.ts';

export default {
  async index ({ params, response }: { params: any; response: any }) {
    const result:any = await deleteProduct(params.id);
    response.redirect("/");
  }
}
