/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const count = new Array(n).fill(0);

    // available rooms: min room index
    const available = [];
    for (let i = 0; i < n; i++) available.push(i);

    // busy rooms: [endTime, roomIndex]
    const busy = [];

    // heap helpers
    const push = (h, v, cmp) => {
        h.push(v);
        let i = h.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (cmp(h[p], h[i]) <= 0) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    };

    const pop = (h, cmp) => {
        const res = h[0];
        const last = h.pop();
        if (h.length) {
            h[0] = last;
            let i = 0;
            while (true) {
                let l = i * 2 + 1, r = i * 2 + 2, s = i;
                if (l < h.length && cmp(h[l], h[s]) < 0) s = l;
                if (r < h.length && cmp(h[r], h[s]) < 0) s = r;
                if (s === i) break;
                [h[i], h[s]] = [h[s], h[i]];
                i = s;
            }
        }
        return res;
    };

    for (let [start, end] of meetings) {
        // free finished rooms
        while (busy.length && busy[0][0] <= start) {
            const [, room] = pop(busy, (a, b) =>
                a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
            );
            push(available, room, (a, b) => a - b);
        }

        const duration = end - start;

        if (available.length) {
            const room = pop(available, (a, b) => a - b);
            push(busy, [end, room], (a, b) =>
                a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
            );
            count[room]++;
        } else {
            const [endTime, room] = pop(busy, (a, b) =>
                a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
            );
            push(busy, [endTime + duration, room], (a, b) =>
                a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
            );
            count[room]++;
        }
    }

    let ans = 0;
    for (let i = 1; i < n; i++) {
        if (count[i] > count[ans]) ans = i;
    }
    return ans;
};



// Example usage:
