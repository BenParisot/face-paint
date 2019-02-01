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
    'aqua',
    'yellow',
    'orange'
];

const lipColors = [
    'pink',
    'coral',
    'purple'
];

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
    canvasHairNode.classList.add(hairColor);
}