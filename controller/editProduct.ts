import { editProduct } from '../model/editProduct.ts';
import { multiParser } from 'https://deno.land/x/multiparser/mod.ts';

export default {
  async index ({ request, response }: { request: any; response: any }) {
    const json = JSON.stringify(await multiParser(request.serverRequest));
    const parse = JSON.parse(json);
    const result:any = await editProduct(parse);
    response.redirect("/");
  }
}
