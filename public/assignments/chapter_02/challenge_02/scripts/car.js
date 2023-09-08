class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return html`
      <div class="search-car__card-inner-container">
        <img
          class="search-car__card-img"
          src="${this.image}"
          alt="${this.manufacture}"
        />
        <div class="search-car__card-info-container">
          <h2 class="h6">${this.manufacture} ${this.model}</h2>
          <p class="h5 fw-bold">${formatCurrency(this.rentPerDay)} / Hari</p>
          <p>${this.description}</p>
          <div class="search-car__card-info">
            <img src="assets/icon/users.svg" alt="Users" />
            <p>${this.capacity}</p>
          </div>
          <div class="search-car__card-info">
            <img src="assets/icon/settings.svg" alt="Settings" />
            <p>${this.transmission}</p>
          </div>
          <div class="search-car__card-info">
            <img src="assets/icon/calendar.svg" alt="Calendar" />
            <p>${this.year}</p>
          </div>
        </div>
      </div>
      <button class="btn btn-success">Pilih Mobil</button>
    `;
  }
}
