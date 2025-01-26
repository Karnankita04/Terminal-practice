function firstScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |                      ( )     │");
  console.log("│   |                       |      │");
  console.log("│   |                      / \\     │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function secondScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |                 ( )          │");
  console.log("│   |                  |           │");
  console.log("│   |                 / \\          │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function thirdScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |            ( )               │");
  console.log("│   |             |                │");
  console.log("│   |            / \\               │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function fourthScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |       ( )                    │");
  console.log("│   |        |                     │");
  console.log("│   |       / \\                    │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function fifthScene() {
  console.log("┌──────────────────────────────────┐");
  console.log("│   ┎---┑	                   │");
  console.log("│   |  ( )                         │");
  console.log("│   |   |                          │");
  console.log("│   |  / \\                         │");
  console.log("│   |______                        │");
  console.log("└──────────────────────────────────┘");
}

function sceneToPlay(scene) {
  switch(scene) {
    case 1:
      return firstScene();
    case 2:
      return secondScene();
    case 3:
      return thirdScene();
    case 4:
      return fourthScene();
    case 5:
      return fifthScene();
  }
}



// const firstLine = "┌──────────────────────────────────┐";
// const secondLine = " \n│           ┎---┑	           │";
// const thirdLine = "\n│           |  ( )                 │";
// const fourthLine = "\n│           |   |                  │";
// const fifthLine = "\n│           |  / \\                 │";
// const sixthLine = "\n│           |______                │";
// const seventhLine = "\n└──────────────────────────────────┘";

// function getImage() {

// }

// for (let chance = 1; chance <= 5; chance++) {
//   console.log(firstLine);
// }

let count = 0;

for (let i = 1; i <= 5; i++) {
  const ans = prompt("Enter the number");
  if (ans != 0) {
    console.clear();
    count++;
    sceneToPlay(count);
  }
}

// thirdScene();