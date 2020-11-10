const parseData = input => {
    return input.data.map( i => {
        const out = {};
        input.column.forEach( (x, z) => {
          out[x.name] = i[z];
        })
        return out;
    });
}
export { parseData };
