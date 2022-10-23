import withClient from './lib/with-client';
import withoutClient from './lib/without-client'

(async() => {
  const withClientResult = await withClient();
  console.log(`withClientResult: ${JSON.stringify(withClientResult, null, 2)}`);
  const withoutClientResult = await withoutClient();
  console.log(`withoutClientResult: ${JSON.stringify(withoutClientResult, null, 2)}`);
})()

/**
 * withClientResult: {
    "Items": [
      {
        "finishPos": 20,
        "sk": "spa#2015",
        "pk": "driver#leclerc"
      },
      {
        "finishPos": 6,
        "sk": "spa#2022",
        "dnf": false,
        "pk": "driver#leclerc"
      }
    ],
    "Count": 2,
    "ScannedCount": 2
  }
  withoutClientResult: {
    "Items": [
      {
        "finishPos": {
          "N": "20"
        },
        "sk": {
          "S": "spa#2015"
        },
        "pk": {
          "S": "driver#leclerc"
        }
      },
      {
        "finishPos": {
          "N": "6"
        },
        "sk": {
          "S": "spa#2022"
        },
        "dnf": {
          "BOOL": false
        },
        "pk": {
          "S": "driver#leclerc"
        }
      }
    ],
    "Count": 2,
    "ScannedCount": 2
  }
 */