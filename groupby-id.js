const data = [
    { id: 1, name: "hassan" },
    { id: 1, name: "mubeen" },
    { id: 2, name: "ali" },
    { id: 3, name: "ilyas" },
];

const groupedData = data.reduce((pre, cur) => {
    const idx = pre.findIndex((predicate) => predicate.id === cur.id);
    if (idx === -1) {
        pre.push({ id: cur.id, names: [cur.name] });
        return pre;
    }
    return pre[idx].names.push(cur.name);
}, []);

console.log(groupedData);
