const Queue = require('bull')

const testQueue = new Queue(
  'test',
  {
    redis: {
      host: 'localhost',
      port: 6379
    }
  }
)

main()
  .then(() => {
    console.log('done')
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

async function main() {
  await testQueue.add({ data: 1 })
}
