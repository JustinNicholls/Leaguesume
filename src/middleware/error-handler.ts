import * as Koa from "koa";
import { env } from "./../libs/env";
import { logger } from "./../libs/logger";

export async function errorHandler(ctx: Koa.Context, next: () => void) {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || 500;
        ctx.body = err.toJSON() ? err.toJSON() : { message: err.message, ...err };

        if (!env.EMIT_STACK_TRACE) {
            delete ctx.body.stack;
        }
        logger.error("Error in request", err);
    }
}
