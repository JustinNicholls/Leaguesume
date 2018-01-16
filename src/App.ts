import { loadControllers, scopePerRequest } from "awilix-koa";
import * as http from "http";
import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as compress from "koa-compress";
import respond from "koa-respond";
import { logger } from "./libs/logger";
import { errorHandler } from "./middleware/error-handler";
import { notFoundHandler } from "./middleware/not-found";

class App {
    private App: Koa = null;
    constructor() {
        this.App = new Koa();
        this.setupMiddleware();
        this.configureContainers();
    }
    public async setupMiddleware(): Promise<void> {

    }
    public async configureContainers(): Promise<void> {

    }
    public async startServer(): Promise<void> {

    }
    public async stopServer(): Promise<void> {

    }
}
