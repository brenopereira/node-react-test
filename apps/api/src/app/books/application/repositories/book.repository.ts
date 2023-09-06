export abstract class BookRepository {
  abstract findAll();
  abstract create({ title, author });
  abstract findById(id: number);
  abstract delete(id: number);
  abstract update(id: number, data);
}
