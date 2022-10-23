import withClient from './lib/with-client';
import withoutClient from './lib/without-client'

(async() => {
  const withClientResult = await withClient();
  console.log(`withClientResult: ${JSON.stringify(withClientResult, null, 2)}`);
  const withoutClientResult = await withoutClient();
  console.log(`withoutClientResult: ${JSON.stringify(withoutClientResult, null, 2)}`);
})()
console.log('hello');