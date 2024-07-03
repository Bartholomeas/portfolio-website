export const slugify = (str: string | undefined) => str ? (
    str.normalize('NFD') // Rozdziel znaki diakrytyczne
        .replace(/[\u0300-\u036f]/g, '') // Usuń znaki diakrytyczne
        .toLowerCase() // Zamień wszystkie litery na małe
        .trim() // Usuń białe znaki z początku i końca stringa
        .replace(/[^a-z0-9 -]/g, '') // Usuń wszystkie znaki specjalne
        .replace(/\s+/g, '-') // Zamień białe znaki na "-"
        .replace(/-+/g, '-') // Usuń nadmiarowe "-"
) : ''