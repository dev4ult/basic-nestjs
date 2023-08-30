import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'Nibras', email: 'nibras@example.com' }];

  fetchUsers() {
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    return { id, username: 'Nibras', email: 'nibras@example.com' };
  }

  createUser(userData: createUserType) {
    this.fakeUsers.push(userData);
    return this.fakeUsers;
  }
}
