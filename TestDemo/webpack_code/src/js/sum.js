export default function sum(...args) {
  return args.reduce(
    (preValue, currentValue) => {
      return preValue + currentValue
    }, 0);
}
