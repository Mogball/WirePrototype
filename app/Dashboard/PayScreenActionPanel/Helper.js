formatComma = function (n, showPlus, c) {
    const s = n < 0 ? '—' : '';
    const i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
    let j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',');
};

formatMoney = function (n, showPlus, hideDollar) {
    hideDollar = !!hideDollar;
    showPlus = !!showPlus;
    n /= 100;
    let s = n < 0 ? '—' : (showPlus ? '+' : '') + '';
    s += hideDollar ? '' : '$';
    const i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(2)));
    let j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',')
        + (2 ? '.' + Math.abs(n - i).toFixed(2).slice(2) : '');
};

String.prototype.format = function () {
    const args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

formatDate = function (date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth();
    return "{0}:{1}{2}, {3} {4}".format(
        hour == 0 ? 12 : hour > 12 ? hour - 12 : hour,
        minute >= 10 ? minute : '0' + minute,
        hour >= 12 ? 'pm' : 'am', monthMap[month], day);
};

module.exports = {
    formatComma: formatComma,
    formatMoney: formatMoney,
    formatDate: formatDate
};