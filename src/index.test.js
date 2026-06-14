import assert from 'node:assert';
import { multiply } from './index.js';

try {
  // Тест 1: Обычное умножение
  assert.strictEqual(multiply(2, 3), 6);

  // Тест 2: Умножение на ноль
  assert.strictEqual(multiply(5, 0), 0);

  // Тест 3: Умножение отрицательных чисел
  assert.strictEqual(multiply(-2, 4), -8);

  console.log('Все тесты успешно пройдены!');
} catch (error) {
  console.error('Тест провален:', error.message);
  process.exit(1); // Принудительно роняем экшен, если тест не прошел
}