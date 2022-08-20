// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_range
// Lager range fra 1 til lengde
export const range = (length: number, startAt = 1) =>
    Array.from({ length }, (_, i) => i + startAt);
