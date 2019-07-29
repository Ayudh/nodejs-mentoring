export function cookieParser(req, res, next) {
  const cookies = req.headers.cookie.split(';').map(v => v.trim());
  req.parsedCookies = {};
  cookies.reduce((acc, curr) => {
    const cookie = curr.split('=');
    acc[cookie[0]] = cookie[1];
    return acc;
  }, req.parsedCookies);
  next();
}
