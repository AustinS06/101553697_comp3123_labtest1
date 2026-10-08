const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject(new Error("Input must be an array"));
      return;
    }

    const result = mixedArray
      .filter((item) => typeof item === "string")
      .map((word) => word.toLowerCase());

    resolve(result);
  });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });