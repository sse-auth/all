export function toParams(query: string): Record<string, string> {
  // Remove leading '?' or '//' from the query string
  const paramsString = query.replace(/^\??\//, "");

  return paramsString
    .split("&")
    .reduce((values: Record<string, string>, param: string) => {
      const [key, value] = param.split("=");
      values[key] = value;
      return values;
    }, {});
}

export function toQuery(
  params: Record<string, string>,
  delimiter: string = "&"
): string {
  const keys = Object.keys(params);

  return keys.reduce((str: string, key: string, index: number) => {
    let query = `${str}${key}=${params[key]}`;
    if (index < keys.length - 1) {
      query += delimiter;
    }
    return query;
  }, "");
}

export function inGetQueryVariable(variable: string): string | null {
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