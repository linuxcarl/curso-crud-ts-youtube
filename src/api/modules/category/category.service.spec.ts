/* eslint-disable no-undef */
import CategoryService from './category.service';

const categoryService = new CategoryService();

describe('GET - Category Service', () => {
  test('Probando el mentodo index', () => {
    const expeted = 'Hola Service';
    const result = categoryService.index();

    expect(result).toStrictEqual(expeted);
  });
});
