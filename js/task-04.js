const CounterPlagin = function ({
  counterValue = 0,
  step = 1,
} = {}) {
  this._value = counterValue;
  this._step = step;

  this._refs = this._getRefs();
  this._bindEvents();
};

CounterPlagin.prototype._getRefs = function () {
  const refs = {};
    refs.container = document.querySelector('#counter');
    refs.incrementBtn = refs.container.querySelector(
      '[data-action="increment"]'
    );
     refs.decrementBtn = refs.container.querySelector(
       '[data-action="decrement"]'
     );
    refs.value = refs.container.querySelector("#value");

  return refs;
};

CounterPlagin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment()
        this.updateValueUI()
    });
    this._refs.decrementBtn.addEventListener("click", () => {
        this.decrement();
        this.updateValueUI()
    });
}

CounterPlagin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value
}

CounterPlagin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlagin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlagin({ step: 1 });