const util = require('util');
let
  items = [
    {0:
      {
        familiesNumber:1,
        rates:2
      },
    },
    {1:
      {
        familiesNumber:1,
        rates:2
      },
    },
    {2:
      {
        familiesNumber:2,
        rates:2
      },
    },
    {3:
      {
        familiesNumber:2,
        rates:2
      },
    },
];


console.log(util.inspect(items.filter(item => item.familiesNumber === 2), null, 4));
