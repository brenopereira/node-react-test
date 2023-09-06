export abstract class CopyRepository {
  abstract findAll();
  abstract create({ isbn, copy_code, bookId });
  abstract findById(id: number);
  abstract delete(id: number);
  abstract update(id: number, data);
}
