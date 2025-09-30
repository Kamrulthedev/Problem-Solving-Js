// Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const IntervalLoop = function (fn, args, t) {
  fn(...args);

  const IntervalKeep = setInterval(() => {
    fn(...args);
  }, t);

  return function cancelFn(){
    clearInterval(IntervalKeep)
  };
};





// var cancellable = function (fn, args, t) {
//   fn(...args); //immediately invoke the function

//   const Interval = setInterval(() => {
//     fn(...args);
//   }, t);

//   return function cancelFn() {
//     clearInterval(Interval);
//   };
// };

// // Example usage:
// const logMessage = (message) => {
//   console.log(message);
// };

// const cancel = cancellable(logMessage, ["Hello world!"], 1000);

// //cencel after 5 seconds
// setTimeout(() => {
//   cancel();
//   console.log("Interval cancelled");
// }, 5000);
