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

const heapPop = (heap, cmp) => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let l = i * 2 + 1, r = i * 2 + 2, smallest = i;
                if (l < heap.length && cmp(heap[l], heap[smallest]) < 0) smallest = l;
                if (r < heap.length && cmp(heap[r], heap[smallest]) < 0) smallest = r;
                if (smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        return top;
    };


for (let [start, end] of meetings) {
        // free rooms
        while (busy.length && busy[0][0] <= start) {
            const [_, room] = heapPop(busy, (a, b) => a[0] - b[0]);
            heapPush(available, room, (a, b) => a - b);
        }

        const duration = end - start;

        if (available.length) {
            const room = heapPop(available, (a, b) => a - b);
            heapPush(busy, [end, room], (a, b) => a[0] - b[0]);
            count[room]++;
        } else {
            const [endTime, room] = heapPop(busy, (a, b) => a[0] - b[0]);
            heapPush(busy, [endTime + duration, room], (a, b) => a[0] - b[0]);
            count[room]++;
        }
    }



};
