import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}
  @Get("/")
  getAll() {
    return this.userService.findAll();
  }

  @Get("/:id")
  getOne(@Param() id: number) {
    return this.userService.findOne(id);
  }

  @Post("/create")
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Delete("/delete/:id")
  delete(@Param() id: number) {
    return this.userService.delete(id);
  }
}
