QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST temperature', assert => {
  assert.equal(calculations(41), 5, 'Positive integers')
  assert.equal(calculations(14), -10, 'Negative integers')
  assert.equal(calculations(32), 0, 'Mixed')
  assert.equal(calculations(72), 22.2, 'decimal')
  assert.equal(calculations(172), 77.77, 'decimal')

})
function calculations(x){
    return (x-32)*5/9;
}
QUnit.config.autostart = false  // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstNumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})