export function cookieParser(req, res, next) {
  const cookies = req.headers.cookie.split(';').map(v => v.trim());
  req.parsedCookies = {};
  cookies.reduce((acc, curr) => {
    const d = curr.split('=');
    acc[d[0]] = d[1];
    return acc;
  }, req.parsedCookies);
  next();
}
