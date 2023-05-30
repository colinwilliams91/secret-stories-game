import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { passport, LocalStrategy } from 'passport-local';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  use(req: any, res: any, next: () => void) {
    passport.use(
      new LocalStrategy((username, password, done) => {
        this.userModel.findOne({ username: username }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          if (!user.verifyPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        });
      }),
    );
    next();
  }
}
