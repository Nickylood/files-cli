export function checkExtantion(fileName) {
  const EXTENSTIONS = ["txt", "js", "img", "json", "css"];
  const index = fileName.lastIndexOf(".") + 1;
  const extention = fileName.slice(index);
  //   console.log(extention);
  const result = EXTENSTIONS.includes(extention);
  return { extention, isValid: result };
}
