export const toObj = (array, prefix) =>
    array.reduce(
        (accumulator, item) => {
            accumulator[`${prefix}${item}`] = `${prefix}${item}`;
            return accumulator;
        },
        {}
    );
