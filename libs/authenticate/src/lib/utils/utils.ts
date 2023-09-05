import { createHmac } from 'crypto';

export function toCryptString(password: string) {
  return createHmac('sha256', 'fcamara-abc123').update(password).digest('hex');
}
