const brand = document.getElementById('brand');
const model = document.getElementById('model');
const color = document.getElementById('color');
const btnSend = document.getElementById('btnSend');
const btnReset = document.getElementById('btnReset');
const form = document.getElementById('form');
const carsRender = document.getElementById('cars-render');

let cars = [];
let isEditMode = false;
let editCarId = null;

const handleForm = (e) => {
  e.preventDefault();

  const currentBrand = brand.value.trim();
  const currentModel = model.value.trim();
  const currentColor = color.value;

  if (currentBrand === '' || currentModel === '') {
    alert('Por favor, complete los campos de Marca y Modelo.');
    return;
  }

  const currentCar = {
    id: Date.now(),
    brand: currentBrand,
    model: currentModel,
    color: currentColor,
  };

  if (isEditMode) {
    const carIndex = cars.findIndex((car) => car.id === editCarId);
    if (carIndex !== -1) {
      cars[carIndex] = currentCar;
      isEditMode = false;
      editCarId = null;
    }
  } else {
    cars.unshift(currentCar);
  }

  renderCars();
  resetForm();
};

const renderCars = () => {
  carsRender.innerHTML = '';

  if (cars.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.innerHTML = '<h3>No ha ingresado ningún auto 👀</h3>';
    carsRender.appendChild(emptyDiv);
    return;
  }

  cars.forEach(({ id, brand, model, color }) => {
    const carDiv = document.createElement('div');
    carDiv.innerHTML = `
      <h3>Marca: ${brand}</h3>
      <p>Modelo: ${model}</p>
      <p>Color: ${color}</p>
      <button class="delete" data-id="${id}">Eliminar</button>
      <button class="edit" data-id="${id}">Editar</button>
    `;

    const deleteBtn = carDiv.querySelector('.delete');
    deleteBtn.addEventListener('click', () => deleteCar(id));

    const editBtn = carDiv.querySelector('.edit');
    editBtn.addEventListener('click', () => enterEditMode(id));

    carsRender.appendChild(carDiv);
  });
};

const deleteCar = (id) => {
  cars = cars.filter((car) => car.id !== id);
  renderCars();
};

const enterEditMode = (id) => {
  const car = cars.find((car) => car.id === id);
  if (car) {
    isEditMode = true;
    editCarId = id;
    brand.value = car.brand;
    model.value = car.model;
    color.value = car.color;
  }
};

const resetForm = () => {
  form.reset();
  isEditMode = false;
  editCarId = null;
};

form.addEventListener('submit', handleForm);
btnReset.addEventListener('click', resetForm);

renderCars();
