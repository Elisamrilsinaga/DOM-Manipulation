class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.cariButton = document.getElementById("cari-btn");
    this.penumpangInput = document.querySelector("#penumpang");
    this.penumpang = this.penumpangInput.value;
    this.driverInput = document.querySelector("#driver");
    this.driver = this.driverInput.value;
    this.tanggalInput = document.querySelector("#tanggal");
    this.waktuInput = document.querySelector("#waktu");
    this.waktu = this.waktuInput.value;
    this.data = [];

  }

  async init() {
    await this.load();

    this.cariButton.addEventListener("click", ()=>{
      this.filterF();
    });
  }

  date = () =>{
    this.data = data;
    Car.list.forEach((car)=>{
      this.data.push(car);
    });
    return this.data;
  }


// FILTER GABUNGAN
filterF =() =>{
  // Mengubah String Menjadi Integer
  this.penumpang = parseInt(this.penumpangInput.value);
  this.driver = parseInt(this.driverInput.value);
  this.waktu = parseInt(this.waktuInput.value);

  // Mengubah value driver menjadi true dan false
  if(this.driver === 2){
    this.driver = true;
  }else if(this.driver === 1){
    this.driver = false;
  }


  // Mengubah format Date dari inputan sesuai dengan value cars 
  const arrayTanggal = this.tanggalInput.value.split("-");
  const tanggalBaru = new Date(arrayTanggal[0], arrayTanggal[1]-1 ,arrayTanggal[2]);

  // Mengubah format waktu dari select menjadi sesuai format value cars
  let date = new Date();
  let today = date.getDate();
  const waktuBaru = new Date(2022, 3 , today, this.waktu);

  // Menghapus child yg ada sebelum membuat child baru
  this.clear();

  Car.list.forEach((car) => {

    // FILTER FORM

    if(this.driverInput.value != "Pilih Tipe Driver" || this.tanggalInput.value != "" || this.waktuInput.value != "Pilih Waktu" || this.penumpangInput.value != "Jumlah Penumpang")
    {


      // INPUTAN MULAI DARI DRIVER

      if(this.driverInput.value != "Pilih Tipe Driver")
      {
        if(this.tanggalInput.value != "")
        {
          if(this.waktuInput.value != "Pilih Waktu")
          {
            if(this.penumpangInput.value != "Jumlah Penumpang")
            {
              if(this.driver == car.available && tanggalBaru <= car.availableAt && waktuBaru <= car.availableAt && this.penumpang <= car.capacity)
              {
              console.log("DRIVER TANGGAL WAKTU PENUMPANG");
              const node = document.createElement("div");
              node.innerHTML = car.render();
              this.carContainerElement.appendChild(node);
              }
            }

            else if(this.driver == car.available && tanggalBaru <= car.availableAt && waktuBaru <= car.availableAt)
            {
              console.log("DRIVER TANGGAL WAKTU");
              const node = document.createElement("div");
              node.innerHTML = car.render();
              this.carContainerElement.appendChild(node);
            }
          }
          
          else if(this.penumpangInput.value != "Jumlah Penumpang")
          {
            if(this.driver == car.available && tanggalBaru <= car.availableAt && this.penumpang <= car.capacity)
              {
              console.log("DRIVER TANGGAL PENUMPANG");
              const node = document.createElement("div");
              node.innerHTML = car.render();
              this.carContainerElement.appendChild(node);
              }
          }

          else if(this.driver == car.available && tanggalBaru <= car.availableAt)
          {
            console.log("DRIVER TANGGAL");
            const node = document.createElement("div");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
          }
        }

        else if(this.waktuInput.value != "Pilih Waktu")
        {
          if(this.penumpangInput.value != "Jumlah Penumpang")
          {
            if(this.driver == car.available && waktuBaru <= car.availableAt && this.penumpang <= car.capacity)
            {
              console.log("DRIVER WAKTU PENUMPANG");
              const node = document.createElement("div");
              node.innerHTML = car.render();
              this.carContainerElement.appendChild(node);
            }
          }

          else if(this.driver == car.available && waktuBaru <= car.availableAt)
          {
            console.log("DRIVER WAKTU");
            const node = document.createElement("div");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
          }
        }

        else if(this.penumpangInput.value != "Jumlah Penumpang")
        {
          if(this.driver == car.available && this.penumpang <= car.capacity)
          {
            console.log("DRIVER PENUMPANG");
            const node = document.createElement("div");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
          }
        }

          else if(this.driver == car.available)
          {
            console.log("DRIVER");
            const node = document.createElement("div");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
          }
        }


    // INPUTAN MULAI DARI TANGGAL

    else if(this.tanggalInput.value != "")
    {
      if(this.waktuInput.value != "Pilih Waktu")
      {
        if(this.penumpangInput.value != "Jumlah Penumpang")
        {
          if(tanggalBaru <= car.availableAt && waktuBaru <= car.availableAt && this.penumpang <= car.capacity)
          {
          console.log("TANGGAL WAKTU PENUMPANG");
          const node = document.createElement("div");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
          }
        }

        else if(tanggalBaru <= car.availableAt && waktuBaru <= car.availableAt)
        {
          console.log("TANGGAL WAKTU");
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
        }
      }

      else if(this.penumpangInput.value != "Jumlah Penumpang")
      {
        if(tanggalBaru <= car.availableAt && this.penumpang <= car.capacity)
        {
          console.log("TANGGAL PENUMPANG");
          const node = document.createElement("div");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
      }

      else if(tanggalBaru <= car.availableAt)
      {
        console.log("TANGGAL");
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    }


    // INPUTAN MULAI DARI WAKTU
    
    else if(this.waktuInput.value != "Pilih Waktu")
    {
      if(this.penumpangInput.value != "Jumlah Penumpang")
      {
        if(waktuBaru <= car.availableAt && this.penumpang <= car.capacity)
        {
        console.log("WAKTU PENUMPANG");
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
        }
      }
      else if(waktuBaru <= car.availableAt)
      {
        console.log("WAKTU");
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    }

    // INPUTAN MULAI DARI PENUMPANG
    
      else if(this.penumpangInput.value != "Jumlah Penumpang")
    {
       if(this.penumpang <= car.capacity)
      {
        console.log("PENUMPANG SAJA");
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    }
    }
  });
}
  buatElement = ()=>{
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
