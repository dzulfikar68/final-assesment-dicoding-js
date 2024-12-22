import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test case 1: Penjumlahan dua angka positif
test('Penjumlahan 2 dan 3 seharusnya menghasilkan 5', () => {
  assert.strictEqual(sum(2, 3), 5);
  console.log('Penjumlahan 2 dan 3 menghasilkan:', sum(2, 3));
});

// Test case 2: Penjumlahan 0 dan 5 seharusnya menghasilkan 5
test('Penjumlahan 0 dan 5 seharusnya menghasilkan 5', () => {
  assert.strictEqual(sum(0, 5), 5);
  console.log('Penjumlahan 0 dan 5 menghasilkan:', sum(0, 5));
});

// Test case 3: Penjumlahan dua angka 0 seharusnya menghasilkan 0
test('Penjumlahan 0 dan 0 seharusnya menghasilkan 0', () => {
  assert.strictEqual(sum(0, 0), 0);
  console.log('Penjumlahan 0 dan 0 menghasilkan:', sum(0, 0));
});

// Test case 4: Penjumlahan dengan angka negatif harus menghasilkan 0
test('Penjumlahan -1 dan 5 seharusnya menghasilkan 0', () => {
  assert.strictEqual(sum(-1, 5), 0);
  console.log('Penjumlahan -1 dan 5 menghasilkan:', sum(-1, 5));
});

// Test case 5: Penjumlahan dengan tipe non-angka seharusnya menghasilkan 0
test('Penjumlahan "2" (string) dan 3 seharusnya menghasilkan 0', () => {
  assert.strictEqual(sum('2', 3), 0);
  console.log('Penjumlahan "2" dan 3 menghasilkan:', sum('2', 3));
});

test('Penjumlahan true (boolean) dan 3 seharusnya menghasilkan 0', () => {
  assert.strictEqual(sum(true, 3), 0);
  console.log('Penjumlahan true dan 3 menghasilkan:', sum(true, 3));
});

test('Penjumlahan null dan 3 seharusnya menghasilkan 0', () => {
  assert.strictEqual(sum(null, 3), 0);
  console.log('Penjumlahan null dan 3 menghasilkan:', sum(null, 3));
});

// Test case 6: Penjumlahan satu angka dengan undefined seharusnya menghasilkan 0
test('Penjumlahan 3 dan undefined seharusnya menghasilkan 0', () => {
  assert.strictEqual(sum(3, undefined), 0);
  console.log('Penjumlahan 3 dan undefined menghasilkan:', sum(3, undefined));
});
