import bcrypt from 'bcryptjs';

export const validPassword = ( password, storedPassword ) => {
  return bcrypt.compareSync(password, storedPassword )
}
