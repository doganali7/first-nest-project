import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { userName: 'Ali', email: 'ali@ali.com' },
    { userName: 'Ahmet', email: 'ahemet@ahmet.com;' },
    { userName: 'Mehmet', email: 'mehmet@mehmet.com' },
  ];
  fetchUsers() {
    {
      return this.fakeUsers;
    }
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    // return null;
    return { id };
  }
}
