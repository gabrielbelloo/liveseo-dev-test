import { UserDto } from '../dtos/user.dto.js';
import { CreateUserDto } from '../dtos/create-user.dto.js';
import { UserModel } from '../models/user.model.js';

export class UserMapper {
  static toModel(dto: CreateUserDto): UserModel {
    const model = new UserModel();
    model.name = dto.name;
    model.email = dto.email;
    return model;
  }

  static toDto(model: UserModel): UserDto {
    const dto = new UserDto();
    dto.id = model.id;
    dto.name = model.name;
    dto.email = model.email;
    return dto;
  }
}
