# clioplatf-agent

## Usage

``` js
const ClioplatfAgent = require('clioplatf-agent')

const agent = new ClioplatfAgent({
  name: 'myapp',
  username: 'admin',
  interval: 2000
})

// Metricas como funciones Sincronas
agent.addMetric('rss', function getRss () {
  return process.memoryUsage().rss
})

// Metricas como funciones Asincronas que devuelven Promesas
agent.addMetric('promiseMetric', function getRandomPromise () {
  return Promise.resolve(Math.random())
})

// Metricas como funciones Asincronas que utilizan Callback's
agent.addMetric('callbackMetric', function getRandomCallback (callback) {
  setTimeout(() => {
    callback(null, Math.random())
  }, 1000)
})

agent.connect()

// This agent only
agent.on('connected', handler)
agent.on('disconnected', handler)
agent.on('message', handler)

// Other Agents
agent.on('agent/connected', handler)
agent.on('agent/disconnected', handler)
agent.on('agent/message', handler)

function handler (payload) {
  console.log(payload)
}

setTimeout(() => agent.disconnect(), 20000)
```