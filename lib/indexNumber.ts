export function IndexNumber(number: number): string {
  switch (number.toString().length) {
    case 1:
      return `00${number}`;
    case 2:
      return `0${number}`;
    default:
      return number.toString();
  }
}
