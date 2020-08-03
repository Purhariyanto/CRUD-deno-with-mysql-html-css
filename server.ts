import { Application, Router, send} from "https://deno.land/x/oak/mod.ts";
import Dashboard from './controller/Dashboard.ts';
import deleteProduct from './controller/deleteProduct.ts';
import addProduct from './controller/addProduct.ts';
import editProduct from './controller/editProduct.ts';

const app = new Application();
const router = new Router();

router
  .get("/", Dashboard.index)
  .get("/product/:id", Dashboard.get)
  .get("/product/delete/:id", deleteProduct.index)
  .post("/product/add", addProduct.index)
  .post("/product/edit", editProduct.index);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx,next) => {
 await send(ctx, ctx.request.url.pathname,{
  root: `${Deno.cwd()}/assets`
   })
 next();
});

console.log('running');
await app.listen({ port: 8000 });
