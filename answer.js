//assignment 1

function describeValue(value) {
  return value ? `${typeof value} | truthy` : `${typeof value} | falsy`;
}

//assignment 2

function getDayType(day) {
  let date = day.toUpperCase();

  switch (date) {
    case "SUNDAY":
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
      return `Working Day`;

    case "FRIDAY":
    case "SATURDAY":
      return `Weekend`;

    default:
      return "Invalid day";
  }
}

//assignment 3
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  } else return "Available";
}

//assignment 4
function getCngFare(distance, isNight = false, waitingMinutes =0) {
    if(distance <= 2){
        return 50;
    }
 
    else if (isNight){
       return (50 + (distance - 2) * 15 + waitingMinutes * 2) + (50 + (distance - 2) * 15 + waitingMinutes * 2) * 0.20;
    }

    else if (!isNight){
       return (50 + (distance - 2) * 15 + waitingMinutes * 2) ;
    }

}

//assignment 5
function getChaseVerdict(target, scored, ballsLeft) {
  let runsNeeded = target - scored;
  let requiredRate = (runsNeeded / ballsLeft) * 6;

  if (runsNeeded <= 0) {
    return "Win";
  } else if (runsNeeded > 0 && ballsLeft == 0) {
    return "Lost";
  } else if (requiredRate <= 6) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
  } else if (requiredRate >= 6 && requiredRate <= 12) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
  } else if (requiredRate > 12) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
  }
}