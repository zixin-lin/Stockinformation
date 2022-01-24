class EventEmitter {    //Event emitter
    constructor() {
      this.watcher = new Map();
    }
    subscribe(eventName, callback) {
      var watcher=this.watcher;  
      if (!watcher.has(eventName)) {
      
        watcher.set(eventName, [callback]);
      } else {
        watcher.set(eventName, [...watcher.get(eventName),callback]);
      }
      return {
        release: function () {
          watcher.get(eventName).map((item,index) => {
            if (item == callback) {
              watcher.get(eventName).splice(index,1);
            } else {
              return item;
            }
          })
        }
      }
    }
  
    emit(eventName, ...args) {
      if (this.watcher.has(eventName)) {
        this.watcher.get(eventName).forEach(call => {
          call.apply(this, args);
        })
      }
    }
  }