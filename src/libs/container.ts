import { ContainerOptions , createContainer, InjectionMode, Lifetime } from "awilix";
import { logger } from "./logger";

const modulesToLoad = [
    ["services/*.js", Lifetime.SCOPED],
    ["stores/*.js", Lifetime.SINGLETON],
];

const storesToLoad = [
    "stores/*.js",
];

export function configureStore() {
    const opts: ContainerOptions = {
        injectionMode: InjectionMode.CLASSIC,
    };

    return createContainer(opts)
    .loadModules(storesToLoad, {
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
        },
    });
}
