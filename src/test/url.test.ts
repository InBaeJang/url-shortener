import { getConnection, createConnection } from 'typeorm';

async function clear() {
  const connection = getConnection();
  const entities = connection.entityMetadatas;

  entities.forEach(async (entity) => {
    const repository = connection.getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName}`);
  });
}

beforeAll(async () => {
  await createConnection();
});

afterAll(async () => {
  await getConnection().close();
});

beforeEach(async () => {
  await clear();
});

test('shorten url', () => {

})