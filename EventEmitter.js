// Event Emitter

class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    return {
      unsubscribe: () => {
        if (!this.events[eventName]) {
          this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
          unsubscribe: () => {
            this.events[eventName] = this.events[eventName].filter(
              (cb) => cb !== callback
            );
            if (this.events[eventName].length === 0) {
              delete this.events[eventName];
            }
            return undefined;
          },
        };
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) return [];
    return this.events[eventName].map(cb => cb(...args));
  }
}


// Exmpale usage:
const emitter = new EventEmitter();
function onClickCallback() { return 99; }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // remove callback
console.log(emitter.emit('onClick')); // []
