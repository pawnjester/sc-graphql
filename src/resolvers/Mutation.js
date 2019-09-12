import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { validPassword } from '../utils/auth';
import 'dotenv/config';
import models from '../models';
const Op = sequelize.Op;

const userFromDB = models.User;

const Mutation = {
  async createUser(parent, args) {
    const hashedPassword = await bcrypt.hash(args.data.password, 10);
    const user = await userFromDB.create({
      name: args.data.username,
      password: hashedPassword
    });
    const token = jwt.sign({ id: user.id}, process.env.SECRET)
    return {
      token,
      user
    }
  },
  async login(parent, args) {
    const user = await userFromDB.findOne({
      where: {
        name: {
          [Op.like]: args.data.username,
        }
      }
    })
    if (!user) {
      throw new Error('User not found')
    }
    const checkPassword = validPassword(args.data.password, user.password)
    if (!checkPassword) {
      throw new Error('Invalid name or password')
    }
    const token = jwt.sign({ id: user.id}, process.env.SECRET)
    return {
      token,
      user
    }
  }
}

export { Mutation as default }
