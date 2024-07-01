import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  pupuladteDB() {
    return 'SEED executed';
  }
}
