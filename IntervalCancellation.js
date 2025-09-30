// Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */


// IntervalLoop = 5;

// Const Interval

// const IntervalLoop = function (fn, args, t) {
//   fn(...args);

//   const IntervalKeep = setInterval(() => {
//     fn(...args);
//   }, t);

//   return function cancelFn() {
//     clearInterval(IntervalKeep);
//   };
// };

// // Example usage:
// const Message = (message) => {
//   console.log(message);
// };

// const NewMessage = IntervalLoop(Message, ["Kamrul World!"], 5000);

// // Cancel after 15 seconds
// setTimeout(() => {
//   NewMessage();
//   console.log("Interval cancelled With Kamrul");
// }, 15000);





// Var Interval 

var cancellable = function (fn, args, t) {
  fn(...args); //immediately invoke the function

  const Interval = setInterval(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearInterval(Interval);
  };
};

// Example usage:
const logMessage = (message) => {
  console.log(message);
};

const cancel = cancellable(logMessage, ["Hello world!"], 1000);

//cencel after 5 seconds
setTimeout(() => {
  cancel();
  console.log("Interval cancelled");
}, 5000);
