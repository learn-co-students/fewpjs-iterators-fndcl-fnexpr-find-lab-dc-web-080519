const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let winrecord = records.find( function(s) { return s.result === 'W'})
  if (Boolean (winrecord)) {
    return winrecord.year
  }
}
