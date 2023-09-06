export abstract class ClientRepository {
  abstract findAll();
  abstract create({ name, birth_date, document, address });
  abstract findById(id: number);
  abstract delete(id: number);
  abstract update(id: number, data);
}
