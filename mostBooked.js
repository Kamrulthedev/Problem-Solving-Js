/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    // Min heap for available rooms
    const available = [];
    for (let i = 0; i < n; i++) available.push(i);
    
};