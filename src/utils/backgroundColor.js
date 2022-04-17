export const backgroundColor = (period, group) => {
  let Blue = [
    period === 1 && group === 1,
    period === 2,
    group >= 14 && group < 18,
    period === 3,
    group >= 15 && group < 18,
    period === 4,
    group >= 16 && group < 18,
    period === 5 && group === 17,
  ];
  if (
    Blue[0] === true ||
    Blue[7] === true ||
    (Blue[1] === true && Blue[2] === true) ||
    (Blue[3] === true && Blue[4] === true) ||
    (Blue[5] === true && Blue[6] === true)
  ) {
    return "#2a4165";
  }

  let Torquoise = [period > 1 && group === 1];
  if (Torquoise[0]) {
    return "#244d57";
  }

  let Maroon = [period < 7 && group === 18];
  if (Maroon[0]) {
    return "#623842";
  }

  let darkMaroon = [group === 2];
  if (darkMaroon[0]) {
    return "#622e39";
  }

  let gray = [period === 7 && group > 8];
  if (gray[0]) {
    return "#46474c";
  }

  let purple = [
    period === 7 && group > 3,
    period === 6,
    group > 3 && group < 13,
    period === 5,
    group > 2 && group < 13,
    period === 4,
    group > 2 && group < 13,
  ];
  if (
    purple[0] === true ||
    (purple[1] === true && purple[2] === true) ||
    (purple[3] === true && purple[4] === true) ||
    (purple[5] === true && purple[6] === true)
  ) {
    return "#433c65";
  }

  if (period === 6 && group === 3) {
    return "#004a77";
  }

  if (period === 7 && group === 3) {
    return "#613b28";
  }

  let darkGreen = [
    period === 3 && group === 13,
    period === 4 && group === 13,
    period === 5,
    group > 12 && group <= 14,
    period === 6,
    group > 12 && group <= 17,
  ];
  if (
    darkGreen[0] === true ||
    darkGreen[1] === true ||
    (darkGreen[2] === true && darkGreen[3] === true) ||
    (darkGreen[4] === true && darkGreen[5] === true)
  ) {
    return "#2f4d47";
  }

  return "#523e1b";
};
