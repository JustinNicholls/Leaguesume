import * as Koa from "koa";

export async function notFoundHandler(ctx: Koa.Context) {
    const msg = `${ctx.request.method} ${ctx.request.path}`;
    ctx.notFound({
        message: `No endpoint matched your request: ${msg}`,
    });
}
