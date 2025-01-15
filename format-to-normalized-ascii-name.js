/// Format query to remove diacritics and make it ascii compliant
export function formatToNormalizedAsciiName(name) {
    const normalizedAsciiName = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/-/g, " ");
    return normalizedAsciiName;
}