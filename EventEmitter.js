// Event Emitter

class EventEmitter {
    constructor() {
        // Map from eventName -> array of callbacks (in subscription order)
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(callback);

        return {
            unsubscribe: () => {
                const arr = this.events.get(eventName);
                if (!arr) return undefined;
                const idx = arr.indexOf(callback);
                if (idx !== -1) arr.splice(idx, 1);
                if (arr.length === 0) this.events.delete(eventName);
                return undefined;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) return [];
        // IMPORTANT: make a snapshot so mutations during emission do not affect this call
        const listeners = [...this.events.get(eventName)];
        const results = [];
        for (const cb of listeners) {
            results.push(cb(...args));
        }
        return results;
    }
}




// Exmpale usage:
const emitter = new EventEmitter();
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);
console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // remove callback
console.log(emitter.emit("onClick")); // []
