import { UserCreateDto } from '../interfaces/user/UserCreateDto';
import { UserResponseDto } from '../interfaces/user/UserResponseDto';
import User from '../models/User';

const createUser = async (userCreateDto: UserCreateDto): Promise<UserResponseDto> => {
  try {
    const user = new User({
      nickname: userCreateDto.nickname,
      password: userCreateDto.password,
    });

    await user.save();

    const data = {
      id: user.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createUser,
};
