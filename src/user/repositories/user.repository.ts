import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { HashPassword } from 'src/utils/hashing';

@Injectable()
export class UserRepository {
  constructor(
    private readonly hashPassword: HashPassword,
    @Inject('USER_REPOSITORY')
    private userModel: typeof User,
  ) {}

  async create(createUserDto) {
    const hashPassword = await this.hashPassword.createHashPassword(
      createUserDto.password,
    );
    createUserDto.password = hashPassword;
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll<User>();
  }

  async findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hashPassword = await this.hashPassword.createHashPassword(
        updateUserDto.password,
      );
      updateUserDto.password = hashPassword;
    }
    return this.userModel.update(updateUserDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return this.userModel.destroy({
      where: {
        id,
      },
    });
  }
  async userLogin(loginUser: UpdateUserDto) {
    return await this.userModel.findOne({
      where: { username: loginUser.username },
    });
  }

  async getEmail(email: string) {
    return this.userModel.findOne({
      where: { email },
    });
  }
  async uploadPicture(id: number, file: Express.Multer.File) {
    const filePeth = `${file.destination}${file.filename}`;
    return await this.update(id, { avatar: filePeth });
  }
}
