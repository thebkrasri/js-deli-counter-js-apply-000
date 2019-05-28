var currentNum = 0;

function takeANumber(people)
{
  var newNum = currentNum + 1;
  currentNum++;
  people.push(newNum);
  var greeting = `You are number ${newNum}.`;
  return greeting;
}

function nowServing(people)
{
  if (people.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else {
    var current = people[0];
    people.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(line) {
  var lineStr;
  if (line.length !== 0)
  {
    var i;
    lineStr = "The line is currently: ";
    for (i=0;i<line.length;i++)
    {
      var pos= i+1;
      lineStr = lineStr + pos + ". " + line[i] + ", ";
    }
    lineStr = lineStr.substring(0, lineStr.length - 2);
  }
  else
  {
    lineStr = "The line is currently empty.";
  }
  return lineStr;
}