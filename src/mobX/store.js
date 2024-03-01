import {makeAutoObservable} from 'mobx';

export const createTimer = () => {
  return makeAutoObservable({
    secsPassed: 0,
    mintsPassed: 0,
    hoursPassed: 0,

    setSec(text) {
      this.secsPassed = +text;
    },
    setMint(text) {
      this.mintsPassed = +text;
    },
    setHours(text) {
      this.hoursPassed = +text;
    },

    increase() {
      this.secsPassed == 59
        ? ((this.secsPassed = 0), (this.mintsPassed += 1))
        : (this.secsPassed += 1);
      this.mintsPassed == 59 &&
        ((this.mintsPassed = 0), (this.hoursPassed += 1));
      this.hoursPassed == 12 && (this.hoursPassed = 0);
    },

    reset() {
      this.secsPassed = 0;
      this.mintsPassed = 0;
      this.hoursPassed = 0;
    },

    start() {
      setInterval(() => {
        this.increase();
      }, 1000);
    },

    pause() {},
  });
};
