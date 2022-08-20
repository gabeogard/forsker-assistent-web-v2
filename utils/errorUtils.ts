export const require = (check: boolean, onError: () => /* errorMessage */ string) => {
    if (!check) {
        throw new Error(onError());
    }
}
