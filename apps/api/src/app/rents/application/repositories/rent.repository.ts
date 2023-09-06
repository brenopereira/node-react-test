export abstract class RentRepository {
  abstract findAll();
  abstract create({ copyId, clientId, expires_at });
  abstract findById(id: number);
  abstract findRentByClient(clientId: number, copyId: number);
  abstract findRentByCopy(copyId: number);
  abstract delete(id: number);
  abstract update(id: number, data);
}
