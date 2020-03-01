const { getVehicles } = require('../ghibli');

test('fetch every vehicle', async () => {
  const resp = await getVehicles();
  expect(resp.ok).toBe(true);
  expect(resp.data.length).toBeGreaterThan(0);
});

test('fetch a single vehicle by UUID', async () => {
  const resp = await getVehicles('4e09b023-f650-4747-9ab9-eacf14540cfb');
  expect(resp.ok).toBe(true);
  expect(resp.data).toBeInstanceOf(Object);
  expect(resp.data.name).toBe('Air Destroyer Goliath');
});

test('fetch a non-existing vehicle', async () => {
  const resp = await getVehicles('ba996727-54f1-4a21-b62d-369fa6f46d9a');
  expect(resp.ok).toBe(false);
});

// test('fetch every mammal', async () => {
//     const resp = await getVehicles({'classification': 'mammal'});
//     expect(resp.ok).toBe(true);
//     expect(resp.data).toBeInstanceOf(Array);
//     expect(resp.data.length).toBeGreaterThan(1);
// });
