import { writeFile } from 'fs/promises';
import data from '../assets/data.json' assert { type: 'json' };
import defaultData from '../assets/default-data.json' assert { type: 'json' };
import * as Types from '../models/car.js';

/**
 * Database class
 *
 * @returns {Database}
 */
export class Database {
  /** @type {Types.Car[]} */
  #data = data;

  /**
   * Get database data
   *
   * @returns {Types.Car[]}
   */
  getData() {
    return this.#data;
  }

  /**
   * Save database data to local file
   *
   * @returns {Promise<void>}
   */
  async saveToDatabase() {
    const data = JSON.stringify(this.#data, null, 2);
    await writeFile('./assets/data.json', data);
  }

  /**
   * Reset database to default data
   *
   * @returns {Promise<void>}
   */
  async resetDatabase() {
    this.#data = defaultData;
    await this.saveToDatabase();
  }

  /**
   * Get car by id
   *
   * @param {string} id Car id
   * @returns {Types.Car|null}
   */
  getCarById(id) {
    return this.#data.find((car) => car.id === id) ?? null;
  }

  /**
   * Create car
   *
   * @param {Types.Car} data Car data
   * @returns {Promise<Types.Car|null>}
   */
  async createCar(data) {
    if (this.getCarById(data.id)) return null;

    this.#data.unshift(data);

    await this.saveToDatabase();

    return data;
  }

  /**
   * Update car
   *
   * @param {string} id Car id
   * @param {Types.Car} data Car data
   * @returns {Promise<Types.Car|null>}
   */
  async updateCar(id, data) {
    const car = this.getCarById(id);

    if (!car) return null;

    /** @type {Types.Car} */
    const updatedCar = {
      ...car,
      ...data
    };

    /** @type {Types.Car[]} */
    const updatedData = this.#data.map((car) =>
      car.id === id ? updatedCar : car
    );

    this.#data = updatedData;

    await this.saveToDatabase();

    return updatedCar;
  }

  /**
   * Delete car
   *
   * @param {string} id Car id
   * @returns {Promise<Types.Car|null>}
   */
  async deleteCar(id) {
    const car = this.getCarById(id);

    if (!car) return null;

    /** @type {Types.Car[]} */
    const updatedData = this.#data.filter((car) => car.id !== id);

    this.#data = updatedData;

    await this.saveToDatabase();

    return car;
  }
}

export const database = new Database();
