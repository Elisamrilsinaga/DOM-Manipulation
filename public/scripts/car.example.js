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
    availableAt,
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
    return `
    <div class="card p-4 m-3" id="card-cars">
    <img class="img-cars mb-4" src="${this.image}" alt="">
    <h5 class="nama">${this.manufacture} ${this.model}</h5>
    <h4 class="harga fw-bold">
      Rp ${this.rentPerDay} / hari
    </h4>
    <p class="elipsis">
      ${this.description}
    </p>
    <p>
      <i class="fa-regular fa-user me-2"></i>${this.capacity} Orang
    </p>
    <p>
      <i class="fa-solid fa-gear me-2"></i>${this.transmission}
    </p>
    <p>
      <i class="fa-regular fa-calendar me-2"></i>Tahun ${this.year}
    </p>
    <button class="btn btn-cars text-white fw-bold p-2" id="cari-btn" style="background-color: #5CB85F;">Pilih Mobil</button>
  </div>
    `;
  }
}
