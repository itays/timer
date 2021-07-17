/**
 * @description a timer class
 */
class Timer {
  /**
   * 
   * @param {HTMLInputElement} durationInput 
   * @param {HTMLButtonElement} startButton 
   * @param {HTMLButtonElement} pauseButton 
   */
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }

  /**
   * starts the timer
   */
  start() {
    console.log('start the timer');
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)