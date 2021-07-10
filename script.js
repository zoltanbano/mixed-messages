console.log('Thank you for running Mixed Messages!')

// storing topics and message elements
const messageStart = 'Congratulations! Your topic is: '

const topic = ['birds', 'music', 'code'];

const messageMiddle = '!\nToday you should learn about: ';

const birds = ['blackbird', 'swallow', 'blue jay', 'cuckoo', 'woodpecker', 'dove', 'sparrow'];
const music = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
const code = ['JavaScript', 'Java', 'Python', 'C#', 'C++', 'PHP', 'HTML/CSS'];

const elements = [birds, music, code];

const messageEnd = '!\n'

const motivation = ['Keep up the good work!', 'You can do it!', 'You are awesome!'];

// functions to create the final message
const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const messageAssembler = () => {
    let m = [];
    m.push(messageStart);
    let t = getRandomElement(topic);
    m.push(t);
    m.push(messageMiddle);
    m.push(getRandomElement(elements[topic.indexOf(t)]));
    m.push(messageEnd);
    m.push(getRandomElement(motivation));
    return m;
}

const message = messageAssembler().join('');

console.log(message);




