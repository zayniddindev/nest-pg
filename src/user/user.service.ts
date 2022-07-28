import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, InsertResult, Repository } from "typeorm";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  create(dto: CreateUserDto):Promise<CreateUserDto> {
    return this.userRepository.save(dto);
      // .createQueryBuilder()
      // .insert()
      // .into(User)
      // .values(dto)
      // .execute();
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
