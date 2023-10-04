import { Model } from 'sequelize';

/**
 * @typedef CarAttributes
 * @property {string} id
 * @property {string} name
 * @property {CarTypes} type
 * @property {string} image
 * @property {number} capacity
 * @property {number} rentPerDay
 * @property {string} description
 * @property {Date} availableAt
 */

export const carTypes = /** @type {const} */ (['small', 'medium', 'large']);

/** @typedef {(typeof carTypes)[number]} CarTypes */

/** @type {CarAttributes} */
export const defaultCarType = {
  id: '',
  type: 'small',
  name: '',
  image: '',
  capacity: 0,
  rentPerDay: 0,
  description: '',
  availableAt: /** @type {Date} */ (/** @type {unknown} */ (''))
};

export const Models = {};

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
export default (sequelize, DataTypes) => {
  /** @extends {Model<CarAttributes>} */
  class Car extends Model {
    /**
     * Helper method for defining associations. This method is not a part of
     * Sequelize lifecycle. The `models/index` file will call this method
     * automatically.
     *
     * @param {Model} models
     */
    static associate(models) {
      // define association here
    }
  }

  Car.init(
    // @ts-ignore
    {
      name: DataTypes.NUMBER,
      type: DataTypes.ENUM('small', 'medium', 'large'),
      image: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      rentPerDay: DataTypes.INTEGER,
      description: DataTypes.STRING,
      availableAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Car',
      timestamps: false
    }
  );

  return Car;
};
