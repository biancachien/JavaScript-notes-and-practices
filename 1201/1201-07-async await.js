async function test() {
  console.log('a')

  const resolvedValue = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve('b'), 3000)
  })
  console.log(resolvedValue)
  console.log('c')
}

test()
