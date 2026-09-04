import { Injectable } from "@nestjs/common"

import { CreateUserDto } from "../dtos/create-user.dto.js"
import { UserDto } from "../dtos/user.dto.js"
import { UserModel } from "../models/user.model.js"
import { UserMapper } from "../mappers/user.mapper.js"

@Injectable()
export class UserService {
    private users: UserModel[] = []

    async create(dto: CreateUserDto): Promise<UserDto> {
        const model = UserMapper.toModel(dto);
        model.id = this.users.length + 1;
        this.users.push(model);
        return UserMapper.toDto(model);
    }

    async findAll(): Promise<UserDto[]> {
        return this.users.map(UserMapper.toDto);
    }
}