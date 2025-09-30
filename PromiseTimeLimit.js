/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const NewPromise = new Promise((resolve, reject) => {
      // Set Timer Message:
      const Timer = setTimeout(() => {
        reject("Time is Up! 👃");
      }, t);

      fn(...args)
        .then((res) => {
          clearTimeout(Timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(Timer);
          reject(err);
        });
    });
  };
};
