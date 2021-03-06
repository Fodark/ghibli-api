const ghibli = require('../ghibli');

test('fetch every location', async () => {
  const resp = await ghibli.getLocations();
  expect(resp.ok).toBe(true);
  expect(resp.data.length).toBeGreaterThan(0);
});

test('fetch a single location by UUID', async () => {
  const resp = await ghibli.getLocations('11014596-71b0-4b3e-b8c0-1c4b15f28b9a');
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Object);
  expect(resp.data.name).toBe('Irontown');
});

test('fetch a non-existing location', async () => {
  const resp = await ghibli.getLocations('5cd0e8cb-b487-40ad-9cf7-14b9b9ae8681');
  expect(resp.ok).toBe(false);
});
