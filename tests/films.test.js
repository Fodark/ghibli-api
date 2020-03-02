const ghibli = require('../ghibli');

test('fetch all films', async () => {
  const resp = await ghibli.getFilms();
  expect(resp.ok).toBe(true);
  expect(resp.data.length).toBeGreaterThan(0);
});

test('fetch a single film by UUID', async () => {
  const resp = await ghibli.getFilms('2baf70d1-42bb-4437-b551-e5fed5a87abe');
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Object);
  expect(resp.data.title).toBe('Castle in the Sky');
});

test('fetch a non-existing film', async () => {
  const resp = await ghibli.getFilms('b8c69609-cab8-486f-90ae-fc5b443decf7');
  expect(resp.ok).toBe(false);
});

test('fetch every miyazaki film', async () => {
  const resp = await ghibli.getFilms({ director: 'miyazaki' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBeGreaterThan(1);
});

test('fetch non-director films', async () => {
  const resp = await ghibli.getFilms({ director: 'michael bay' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBe(0);
});

test('search a single film by name', async () => {
  const resp = await ghibli.getFilms({ title: 'marnie' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBe(1);
});

test('search a film by its year', async () => {
  const resp = await ghibli.getFilms({ year: '1986' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBe(1);
});

test('search a year with no films', async () => {
  const resp = await ghibli.getFilms({ year: '1976' });
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Array);
  expect(resp.data.length).toBe(0);
});
