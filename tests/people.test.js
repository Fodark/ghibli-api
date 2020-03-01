const { getPeople } = require('../ghibli');

test('fetch every person', async () => {
  const resp = await getPeople();
  expect(resp.ok).toBe(true);
  expect(resp.data.length).toBeGreaterThan(0);
});

test('fetch a single person by UUID', async () => {
  const resp = await getPeople('ba924631-068e-4436-b6de-f3283fa848f0');
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Object);
  expect(resp.data.name).toBe('Ashitaka');
});

test('fetch a non-existing person', async () => {
  const resp = await getPeople('8f34fe01-9658-48ff-ad39-cd899a277754');
  expect(resp.ok).toBe(false);
});

test('fetch every male character', async () => {
  const resp = await getPeople({ gender: 'male' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBeGreaterThan(1);
});
