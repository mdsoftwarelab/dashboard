export const slugFormatter = (url: string) => {
    return url.replace(/[^a-zA-Z0-9\s]/g, '').split(' ').join('-').toLowerCase();
}