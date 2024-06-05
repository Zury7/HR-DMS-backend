import { create, findAll, findByPk } from '../models/user.model';

class UserService {
  async addUser(userData) {
    try {
      const user = await create(userData);
      return user;
    } catch (error) {
      throw new Error('Error adding user: ' + error.message);
    }
  }

  async getAllUsers() {
    try {
      const users = await findAll();
      return users;
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message);
    }
  }

  async getUser(id) {
    try {
      const user = await findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }

  async updateUser(id, updateData) {
    try {
      const user = await findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(updateData);
      return user;
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }

  async deleteUser(id) {
    try {
      const user = await findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return user;
    } catch (error) {
      throw new Error('Error deleting user: ' + error.message);
    }
  }
}

export default new UserService();
