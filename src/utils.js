export const getShowTime = (acc, start, stop) => 
  {
    if (stop) {
      return acc;
    } else {
      return Date.now() - start + acc;
    }
  }