import { faker } from '@faker-js/faker';
import { ApplicationError } from '../../libs/error.js';
import jwt from 'jsonwebtoken';
import * as authService from '../services/auth.js';
import * as userService from '../services/user.js';
import * as Models from '../models/user.js';
import * as Types from '../../libs/types/common.js';

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
export async function register(req, res) {
  const body = req.body;

  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  try {
    const encryptedPassword = await authService.hashPassword(password);

    const newUser = /** @type {Models.UserAttributes} */ ({
      ...body,
      password: encryptedPassword
    });

    const data = await userService.createUser(newUser);

    res.status(201).json({ message: 'User created successfully', data: data });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isMatch = await authService.isPasswordMatch(
      password,
      user.dataValues.password
    );

    if (!isMatch) {
      res.status(401).json({ message: 'Password is not match' });
      return;
    }

    const token = await authService.generateToken(user.dataValues.id);

    /** @type {Models.UserAttributes & { token: string }} */
    const userWithToken = {
      ...user.dataValues,
      token
    };

    res
      .status(200)
      .json({ message: 'Login successfully', data: userWithToken });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}
