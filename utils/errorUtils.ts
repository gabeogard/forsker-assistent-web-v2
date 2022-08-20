export const check = (check: boolean) => (lazyMessage: () => string) => {
    if (!check) {
        throw new Error(lazyMessage());
    }
}
