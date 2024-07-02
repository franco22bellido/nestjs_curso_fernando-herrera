import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED, CARS_SEED } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly _carsService: CarsService,
    private readonly _brandService: BrandsService,
  ) {}

  pupuladteDB() {
    this._brandService.fillBrandsWithSeedData(BRAND_SEED);
    this._carsService.fillCarsWithSeedData(CARS_SEED);
    return 'SEED executed';
  }
}
