class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
};
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('Ошибка - id для будильника не передан');
    } else if (this.alarmCollection.find((alarm) => id === alarm.id)) {
        console.error('Данный звонок существует!');
        return;
    } else {
      this.alarmCollection.push({ id, time, callback });
    }
};

    removeClock(id) {
    let index = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(element => element.id != id);
    return !(index === this.alarmCollection.length);
};
  
    getCurrentFormattedTime() {
    let hours = ('0'+ new Date().getHours()).slice(-2);
    let minutes = ('0'+ new Date().getMinutes()).slice(-2);
      return (hours + ':' + minutes);
};

    start() {
    let forTime = this;
      function checkClock(alarm) {
        if (alarm.time === forTime.getCurrentFormattedTime()) {
            alarm.callBack();
        }
}
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(el => checkClock(el));
            }, 1000);
        }
};

    stop() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
};
  
    printAlarms() {
        this.alarmCollection.forEach(el => console.log(`Будильник ${el.id} прозвенит в ${el.time}.`));
};
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
};