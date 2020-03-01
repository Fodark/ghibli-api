const { getSpecies } = require('../ghibli');

test('fetch every species', async () => {
  const resp = await getSpecies();
  expect(resp.ok).toBe(true);
  expect(resp.data.length).toBeGreaterThan(0);
});

test('fetch a single specie by UUID', async () => {
  const resp = await getSpecies('603428ba-8a86-4b0b-a9f1-65df6abef3d3');
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Object);
  expect(resp.data.name).toBe('Cat');
});

test('fetch a non-existing specie', async () => {
  const resp = await getSpecies('39900a74-d159-4df5-88cc-c0d45d35b8d0');
  expect(resp.ok).toBe(false);
});

test('fetch every mammal', async () => {
  const resp = await getSpecies({ classification: 'mammal' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBeGreaterThan(1);
});
