export function formatUrl(url) {
    if (!url) return '';

    url = url.trim();

    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    try {
        new URL(url);
        return url;
    } catch (e) {
        return '';
    }
}