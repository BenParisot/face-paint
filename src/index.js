const canvasHairNode = document.getElementById('canvas-hair');
const canvasEyeNode = document.getElementById('canvas-eyes');
const canvasLipNode = document.getElementById('canvas-lips');
const hairButtonsNode = document.getElementById('hair-buttons');
const eyeButtonsNode = document.getElementById('eye-buttons');
const lipButtonsNode = document.getElementById('eye-buttons');


const hairColors = [
    'hair-red',
    'hair-blue',
    'hair-green'
];

const eyeColors = [
    'eye-aqua',
    'eye-yellow',
    'eye-orange'
];

const lipColors = [
    'lip-pink',
    'lip-coral',
    'lip-purple'
];


//hair color change
for(let index = 0; index < hairColors.length; index++) {
    const hairColor = hairColors[index];

    const hairButtonNode = document.createElement('button');
    hairButtonNode.textContent = hairColor;
    hairButtonNode.value = hairColor;

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
    eyeButtonNode.textContent = eyeColor;
    eyeButtonNode.value = eyeColor;

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
    lipButtonNode.textContent = lipColor;
    lipButtonNode.value = lipColor;

    lipButtonNode.addEventListener('click', function(){
        lip(lipColor);
    });

    lipButtonsNode.appendChild(lipButtonNode);
}

function lip(lipColor) {
    canvasLipNode.classList = '';
    canvasLipNode.classList.add(lipColor);
}