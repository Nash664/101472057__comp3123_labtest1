function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            if (!Array.isArray(mixedArray)) {
                reject("Input must be an array");
                return;
            }
            const lowerCased = mixedArray
                .filter(item => typeof item === "string")
                .map(word => word.toLowerCase());

            resolve(lowerCased);
        } catch (error) {
            reject(error);
        }
    });
}

const array = ["PIZZA", 12, true, 25, false, "Wings"];

lowerCaseWords(array)
    .then(result => console.log("Resolved:", result))
    .catch(error => console.error("Rejected:", error));
