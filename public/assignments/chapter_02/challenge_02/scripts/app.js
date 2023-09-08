class App {
  constructor() {
    this.form = document.getElementById('form');
    this.clearButton = document.getElementById('clear-btn');
    this.carContainerElement = document.getElementById('cars-container');
  }

  async init() {
    await this.load();

    // Register click listener
    this.form.onsubmit = this.run;
    this.clearButton.onclick = this.clear;
  }

  run = (event) => {
    this.clear();

    event.preventDefault();

    const formData = new FormData(this.form);

    const data = Object.fromEntries(formData.entries());

    const { date, driverType: _, pickUpTime, totalPassengers } = data;

    const formattedDate = new Date(date);

    const filteredCars = Car.list.filter(({ availableAt, capacity }) => {
      const isDateAndTimeMatch = isSameBetweenTwoDates(
        formattedDate,
        availableAt,
        pickUpTime
      );

      const isCapacityEqual = totalPassengers
        ? capacity === +totalPassengers
        : true;

      const isAllFilterMatch = isDateAndTimeMatch && isCapacityEqual;

      return isAllFilterMatch;
    });

    for (const car of filteredCars) {
      const node = document.createElement('article');

      node.className = 'search-car__car-card';

      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    }
  };

  async load() {
    const cars = await Binar.listCars();

    Car.init(cars);
  }

  clear = () => {
    this.carContainerElement.innerHTML = '';
  };
}
