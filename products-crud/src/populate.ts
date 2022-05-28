import { getConnection } from 'typeorm';
import fakeProducts from '../fakes.json';

(async () => {
  const connection = getConnection();
  const productsRepository = connection.getRepository('Product');
  const count = await productsRepository.count();

  if (count > 0) {
    return;
  }

  for (const product of fakeProducts) {
    await productsRepository.save(product);
  }
})();
