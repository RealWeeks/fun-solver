async function callFunction(secondArg) {
  console.log(secondArg);
}

(async () => {
  try {
    const secondArg = process.argv.slice(2);
    await callFunction(secondArg)
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Script over')
  }
})();