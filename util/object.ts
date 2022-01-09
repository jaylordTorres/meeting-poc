export function toArray(o: any) {
  return Object.keys(o).map((i) => o[i]);
}

export function toMap(o: any) {
  return o && o.length > 0
    ? o.reduce((c: any, n: any) => ({ ...c, [n.id]: n }), {})
    : {};
}
