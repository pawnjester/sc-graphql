import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


export const validPassword = ( password, storedPassword ) => {
  return bcrypt.compareSync(password, storedPassword )
}

export const getUserId = (request) => {
  const header = request.request.headers.authorization
  if(!header) {
    throw new Error('Authentication Required')
  }
  const token = header.replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.SECRET)

  return decoded.id
}
