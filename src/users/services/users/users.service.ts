import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'Ali', email: 'ali@ali.com' }];
  fetchUsers() {
    {
      return this.fakeUsers;
    }
  }
}
