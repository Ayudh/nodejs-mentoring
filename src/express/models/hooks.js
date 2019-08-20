export function modifiedDate(next) {
  this.lastModifiedDate = new Date();
  next();
}
