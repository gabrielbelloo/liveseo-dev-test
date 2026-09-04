import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UserService } from '../services/user.service.js';
import { CreateUserDto } from '../dtos/create-user.dto.js';
import { UserDto } from '../dtos/user.dto.js';

@Controller('/users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return await this.userService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        return await this.userService.findAll();
    }
}