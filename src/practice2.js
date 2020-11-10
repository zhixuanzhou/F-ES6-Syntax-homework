const inject = (items, sections) => {
    const out = [];
    items.forEach((i , x) => {
        const z = sections.find(e => e.index === x);
        if (z){
            out.push(z.content)
        };
        out.push(i);
    });
    return out;
}
export { inject };
