/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  // Min heap for available rooms
  const available = [];
  for (let i = 0; i < n; i++) available.push(i);

  // Min heap for busy rooms: [endTime, room]
  const busy = [];

      const count = new Array(n).fill(0);


      // Heap helpers
    const heapPush = (heap, item, cmp) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (cmp(heap[p], heap[i]) <= 0) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
};
