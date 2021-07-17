/**
 * @description a timer class
 */
 class Timer {
  /**
   * @param {number} #interval
  */
  interval = 0;
  /**
   * @constructor
   * @param {HTMLInputElement} durationInput 
   * @param {HTMLButtonElement} startButton 
   * @param {HTMLButtonElement} pauseButton 
   */
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    
    this.startButton.addEventListener('click', this.start.bind(this));
    this.pauseButton.addEventListener('click', this.pause.bind(this));
  }

  start() {
    this.interval = setInterval(this.tick.bind(this), 20);
    this.onStart && this.onStart(this.timeRemaining);
  }

  tick() {
    if (this.timeRemaining <=0) {
      this.pause();
      return this.onComplete && this.onComplete();
    }
    this.timeRemaining = this.timeRemaining - .02;
    this.onTick && this.onTick(this.timeRemaining);
  }

  pause() {
    clearInterval(this.interval);
  }
  
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}