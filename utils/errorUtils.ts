import { IllegalArgumentError } from "../middlewares/errorHandling";

export const throwError = (msg: string): never => {
    throw new Error(msg);
}

export const checkOrThrowError = (check: boolean) => (lazyMessage: () => string) => {
    if (!check) {
        throw new Error(lazyMessage());
    }
}

export const checkOrThrowIllegalArgument = (check: boolean, lazyMessage: () => string) => {
    if (!check) {
        throw new IllegalArgumentError(lazyMessage());
    }
}
