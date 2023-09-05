import { Body, Controller, Post } from '@nestjs/common';
import { SignIn } from '../../../application/use-cases/sign-in';
import { SignUp } from '../../../application/use-cases/sign-up';
import { SignInValidator } from '../validators/sign-in.validator';
import { SignUpValidator } from '../validators/sign-up.validator';

@Controller('auth')
export class AuthController {
  constructor(private signIn: SignIn, private signUp: SignUp) {}

  @Post('/login')
  login(@Body() body: SignInValidator) {
    return this.signIn.execute(body);
  }

  @Post('/register')
  register(@Body() body: SignUpValidator) {
    return this.signUp.execute(body);
  }
}
