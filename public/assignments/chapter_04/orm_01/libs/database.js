import { writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import data from '../assets/data.json' assert { type: 'json' };
import defaultData from '../assets/default-data.json' assert { type: 'json' };
import * as Models from '../models/car.js';

/**
 * Database class
 *
 * @returns {Database}
 */
export class Database {
  /** @type {Models.Car[]} */
  #data = data;

  /**
   * Get database data
   *
   * @returns {Models.Car[]}
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
   * @returns {Models.Car | null}
   */
  getCarById(id) {
    return this.#data.find((car) => car.id === id) ?? null;
  }

  /**
   * Create car
   *
   * @param {Omit<Models.Car, 'id'>} data Car data
   * @returns {Promise<Models.Car>}
   */
  async createCar(data) {
    /** @type {Models.Car} */
    const newCar = {
      id: randomUUID(),
      ...data
    };

    this.#data = [...this.#data, newCar];

    await this.saveToDatabase();

    return newCar;
  }

  /**
   * Update car
   *
   * @param {string} id Car id
   * @param {Models.Car} data Car data
   * @returns {Promise<Models.Car>}
   */
  async updateCar(id, data) {
    const car = this.getCarById(id);

    /** @type {Models.Car} */
    const updatedCar = {
      ...car,
      ...data
    };

    /** @type {Models.Car[]} */
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
   * @returns {Promise<Models.Car>}
   */
  async deleteCar(id) {
    const car = /** @type {Models.Car} */ (this.getCarById(id));

    /** @type {Models.Car[]} */
    const updatedData = this.#data.filter((car) => car.id !== id);

    this.#data = updatedData;

    await this.saveToDatabase();

    return car;
  }
}

export const database = new Database();
