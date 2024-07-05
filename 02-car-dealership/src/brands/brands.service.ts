import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private _brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];
  create({ name }: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this._brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this._brands;
  }

  findOne(id: string) {
    const brandFound = this._brands.find((brand) => brand.id === id);
    if (!brandFound)
      throw new NotFoundException(`brand with id ${id} not found`);

    return brandFound;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this._brands = this._brands.map((brand) => {
      if (brand.id === brandDB.id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, name: updateBrandDto.name.toLocaleLowerCase() };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    this._brands = this._brands.filter((brand) => brand.id !== id);
  }
  fillBrandsWithSeedData(brands: Brand[]) {
    this._brands = brands;
  }
}
