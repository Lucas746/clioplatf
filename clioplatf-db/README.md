# clioplatf-db

## Usage

``` js
const setupDatabase = require('clioplatf-db')

setupDatabase(config).then(db => {
    const { Agent, Metric } = db

}).catch(err => console.error(err))

```