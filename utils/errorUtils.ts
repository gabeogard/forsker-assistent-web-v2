import { IllegalArgumentError } from "../middlewares/errorHandling";

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
