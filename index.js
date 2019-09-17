const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(yearsResults) {
  let noWin;

  let match = yearsResults.find(function(yr){
    return yr["result"] === "W";
  })

  if (match) {
    return match["year"];
  } else {
    return noWin;
  }
}