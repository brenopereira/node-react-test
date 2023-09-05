import { UserCredentials } from '@node-test-fcamara/custom-types';

export abstract class AuthRepository {
  abstract findCredential({ email, password }: UserCredentials);
  abstract create({ name, email, password });
}
