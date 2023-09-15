import { writeFile } from 'fs/promises';
import data from '../assets/data.json' assert { type: 'json' };
import defaultData from '../assets/default-data.json' assert { type: 'json' };

export class Database {
  #data = data;

  getData() {
    return this.#data;
  }

  /**
   * Save data to file
   *
   * @returns {Promise<void>}
   */
  async saveToDatabase() {
    const data = JSON.stringify(this.#data, null, 2);
    await writeFile('./assets/data.json', data);
  }

  /**
   * Reset database
   *
   * @returns {Promise<void>}
   */
  async resetDatabase() {
    this.#data = defaultData;
    this.saveToDatabase();
  }

  /**
   * Get car by id
   *
   * @param {string} id
   * @returns {Promise<Car|null>}
   */
  getCarById(id) {
    return this.#data.find((car) => car.id === id);
  }

  /**
   * Create car
   *
   * @param {Car} car
   * @returns {void}
   */
  async createCar(car) {
    this.#data.unshift(car);
    await this.saveToDatabase();
  }

  /**
   * Update car
   *
   * @param {string} carId
   * @param {Car} data
   * @returns {Promise<void|null>}
   */
  async updateCar(carId, data) {
    const targetCarIndex = this.#data.findIndex((car) => car.id === carId);

    if (targetCarIndex === -1) {
      return null;
    }

    this.#data[targetCarIndex] = {
      ...this.#data[targetCarIndex],
      ...data
    };

    await this.saveToDatabase();
  }
}

export const database = new Database();
