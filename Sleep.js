/**
 * @param {number} millis
 * @return {Promise}
 */
// async function sleep(millis) {
//   return new Promise((resolve) => setTimeout(resolve, millis));
// };



async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
(async () => {
    let t = Date.now();
    await sleep(50);
    console.log(Date.now() - t);
})();





// Eample uasge:
(async () => {
    console.log("Start");
    await sleep(1000); // Pause for 1 second
    console.log("End after 1 second");
})();