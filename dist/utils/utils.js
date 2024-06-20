"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inGetQueryVariable = exports.toQuery = exports.toParams = void 0;
function toParams(query) {
    // Remove leading '?' or '//' from the query string
    const paramsString = query.replace(/^\??\//, "");
    return paramsString
        .split("&")
        .reduce((values, param) => {
        const [key, value] = param.split("=");
        values[key] = value;
        return values;
    }, {});
}
exports.toParams = toParams;
function toQuery(params, delimiter = "&") {
    const keys = Object.keys(params);
    return keys.reduce((str, key, index) => {
        let query = `${str}${key}=${params[key]}`;
        if (index < keys.length - 1) {
            query += delimiter;
        }
        return query;
    }, "");
}
exports.toQuery = toQuery;
function inGetQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    const code = vars
        .map((i) => {
        const pair = i.split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
        return null;
    })
        .filter((d) => {
        if (d) {
            return true;
        }
        return false;
    });
    return code[0];
}
exports.inGetQueryVariable = inGetQueryVariable;
//# sourceMappingURL=utils.js.map