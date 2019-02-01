const canvasHairNode = document.getElementById('canvas-hair');
const canvasEyeNode = document.getElementById('canvas-eyes');
const canvasLipNode = document.getElementById('canvas-lips');
const hairButtonsNode = document.getElementById('hair-buttons');
const eyeButtonsNode = document.getElementById('eye-buttons');
const lipButtonsNode = document.getElementById('eye-buttons');


const hairColors = [
    'red',
    'blue',
    'green'
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

    console.log(hairButtonNode);

    hairButtonsNode.appendChild(hairButtonNode);

    // hairButtonsNode.classList.add(hairButtonNode);
}