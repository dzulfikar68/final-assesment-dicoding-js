import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

//Penjumlahan dua angka positif
test('penjumalahan 1 + 2 harus 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

//Penjumlahan dengan angka negatif
test('penjumalahan -1 + 1 harus 0', () => {
  assert.strictEqual(sum(-1, 1), 0);
});

//Penjumlahan dengan angka nol
test('penjumalahan 0 + 0 harus 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

//Penjumlahan angka besar
test('penjumalahan 1000 + 2000 harus 3000', () => {
  assert.strictEqual(sum(1000, 2000), 3000);
});

//Penjumlahan angka desimal
test('penjumalahan 1.5 + 2.5 harus 4.0', () => {
  assert.strictEqual(sum(1.5, 2.5), 4.0);
});