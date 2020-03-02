const ghibli = require('../ghibli');

test('fetch every species', async () => {
  const resp = await ghibli.getSpecies();
  expect(resp.ok).toBe(true);
  expect(resp.data.length).toBeGreaterThan(0);
});

test('fetch a single specie by UUID', async () => {
  const resp = await ghibli.getSpecies('603428ba-8a86-4b0b-a9f1-65df6abef3d3');
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Object);
  expect(resp.data.name).toBe('Cat');
});

test('fetch a non-existing specie', async () => {
  const resp = await ghibli.getSpecies('39900a74-d159-4df5-88cc-c0d45d35b8d0');
  expect(resp.ok).toBe(false);
});

test('fetch every mammal', async () => {
  const resp = await ghibli.getSpecies({ classification: 'mammal' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBeGreaterThan(1);
});

test('fetch an existing specie by name', async () => {
  const resp = await ghibli.getSpecies({ name: 'totoro' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBe(1);
});

test('fetch a non-existing specie by name', async () => {
  const resp = await ghibli.getSpecies({name: 'mammuth'});
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBe(0);
});
