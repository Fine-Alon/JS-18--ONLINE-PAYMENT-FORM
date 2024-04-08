import { isCardNumCorrect } from '../src/jsModules/cardValidator';
import { isCvcCorrect } from '../src/jsModules/eventListeners';

describe('card validation', () => {
  describe('card number validation', () => {
    test('card number has too few digits', () => {
      expect(isCardNumCorrect(2123230)).toBe(false);
    });
    test('card number has too many digits', () => {
      expect(isCardNumCorrect(458035637573635655645345645645424232)).toBe(false);
    });
    test('card number is NOT valid', () => {
      expect(isCardNumCorrect(1111633344343466)).toBe(false);
    });
    test('card number is valid', () => {
      expect(isCardNumCorrect(4580633344343466)).toBe(true);
    });
    test('card number has just numbers', () => {
      expect(isCardNumCorrect('1111aA3344,3466')).toBe(false);
    });
  });

  describe('card CVV/CVC validation', () => {
    test('card CVV/CVC has correct', () => {
      expect(isCvcCorrect('333')).toBe(true);
    });
    test('card CVV/CVC has less then 3 digits', () => {
      expect(isCvcCorrect('33')).toBe(false);
    });
    test('card CVV/CVC has more then 3 digits', () => {
      expect(isCvcCorrect('3333')).toBe(false);
    });
    test('card CVV/CVC has 3 digits', () => {
      expect(isCvcCorrect('a.A')).toBe(false);
    });
  });
});
