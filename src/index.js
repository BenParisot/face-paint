const canvasHairNode = document.getElementById('canvas-hair');
const canvasEyeNode = document.getElementById('canvas-eyes');
const canvasLipNode = document.getElementById('canvas-lips');
const hairButtonsNode = document.getElementById('hair-buttons');
const eyeButtonsNode = document.getElementById('eye-buttons');
const lipButtonsNode = document.getElementById('lip-buttons');
const randomButtonNode = document.getElementById('random-button');


const hairColors = [
    'hair-red',
    'hair-griffindor',
    'hair-ironman',
    'hair-merlin',
    'hair-jam',
    'hair-popcorn',
    'hair-screwdriver',
    'hair-blonde',
    'hair-brunette',
];

const eyeColors = [
    'eye-strawberry',
    'eye-magenta',
    'eye-hotpink',
    'eye-rosewood',
    'eye-coral',
    'eye-peach',
    'eye-rouge',
    'eye-fuscia',
    'eye-taffy',
];

const lipColors = [
    'lip-blush',
    'lip-punch',
    'lip-bubblegum',
    'lip-pink',
    'lip-rose',
    'lip-salmon',
    'lip-ballet',
    'lip-flamingo',
    'lip-lemonade'
];


//hair color change
for(let index = 0; index < hairColors.length; index++) {
    const hairColor = hairColors[index];

    const hairButtonNode = document.createElement('button');
    hairButtonNode.value = hairColor;
    hairButtonNode.classList.add(hairColor);

    hairButtonNode.addEventListener('click', function(){
        hair(hairColor);
    });

    hairButtonsNode.appendChild(hairButtonNode);
}

function hair(hairColor) {
    canvasHairNode.classList = '';
    canvasHairNode.classList.add(hairColor);
}

//eye color change
for(let index = 0; index < eyeColors.length; index++) {
    const eyeColor = eyeColors[index];

    const eyeButtonNode = document.createElement('button');
    eyeButtonNode.value = eyeColor;
    eyeButtonNode.classList.add(eyeColor);

    eyeButtonNode.addEventListener('click', function(){
        eye(eyeColor);
    });

    eyeButtonsNode.appendChild(eyeButtonNode);
}

function eye(eyeColor) {
    canvasEyeNode.classList = '';
    canvasEyeNode.classList.add(eyeColor);
}

//lip color change
for(let index = 0; index < lipColors.length; index++) {
    const lipColor = lipColors[index];

    const lipButtonNode = document.createElement('button');
    lipButtonNode.value = lipColor;
    lipButtonNode.classList.add(lipColor);

    lipButtonNode.addEventListener('click', function(){
        lip(lipColor);
    });

    lipButtonsNode.appendChild(lipButtonNode);
}

function lip(lipColor) {
    canvasLipNode.classList = '';
    canvasLipNode.classList.add(lipColor);
}

randomButtonNode.addEventListener('click', function(){
    random();
});

function random() {
    let randomHair = hairColors[Math.floor(Math.random() * hairColors.length)];
    let randomEye = eyeColors[Math.floor(Math.random() * eyeColors.length)];
    let randomLip = lipColors[Math.floor(Math.random() * lipColors.length)];

    hair(randomHair);
    eye(randomEye);
    lip(randomLip);
}

