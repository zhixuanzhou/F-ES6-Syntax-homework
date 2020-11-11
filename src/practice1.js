const parseData = input => {
    return input.data.map(x => input.column.reduce((acc, value, index) => ({...acc, [value.name]: x[index]}), {}));
}
export {parseData};

