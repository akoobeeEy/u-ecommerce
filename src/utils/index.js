export const kFormatter = (num) => {
    const formattedPrice = Math.abs(num)
      .toString()
      .split("")
      .reverse()
      .reduce((acc, digit, index) => {
        return digit + (index !== 0 && index % 3 === 0 ? " " : "") + acc;
      }, "");
    return (num < 0 ? "-" : "") + formattedPrice + " сум";
  };
  