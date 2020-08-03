import { renderFileToString } from 'https://deno.land/x/dejs@0.8.0/mod.ts';
import { getAllProduct } from '../model/getAllProduct.ts';
import { getProduct } from '../model/getProduct.ts';

export default {
  async index ({ response }: { response: any }) {
    const result:any = await getAllProduct();
    response.body = await renderFileToString(`${Deno.cwd()}/views/Dashboard.ejs`, {
      result
    });
  },

  async get ({ params, response }: { params: any; response: any }) {
    const result:any = await getProduct(params.id);
    response.body = await renderFileToString(`${Deno.cwd()}/views/Dashboard.ejs`, {
      result
    });
  }
}
