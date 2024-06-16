export function getUniqueValuesAsPerProperty<T>(array: T[], property: keyof T): any[] {
    const uniqueValues = new Set(array.map(item => item[property]));
    return Array.from(uniqueValues);
}
