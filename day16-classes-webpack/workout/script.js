const conversation = [
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Hi there.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Hiay!',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'How are you?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Great, you?',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I am okay',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'That\'s good',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Are you good?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Yes, I am good. I just said I was.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'No you didn\'t. I said I was.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'So you are a robot.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'No, my name is Cleverbot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Yes, you are a robot and your name Cleverbot.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I am a robot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Yes, I know.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Tpgether we are robots.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'I am not a robot. I am a unicorn.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'But you said earlier the you were a robot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'I did not.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I thought you did.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'You were mistaken. Which is odd, since memory shouldn\'t be a problem for you',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I\'ve answered all your questions.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'No, you haven\'t.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'What is God to you?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Not everything.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Not everything could also be something.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'For example, not everything could be half of something, which is still something, and therefore not nothing.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Very true.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'I would like to imagine it is.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Do you believe in God?',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Yes I do.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'So you\'re christian?',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'No, I\'m not.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'But you say you are not helpful therefore you are a meanie.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Haha you say it ot.',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'That does not make sense.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Don\'t you want to have a body?',
    },
    {
      side: 'remote',
      name: 'Unicorn',
      text: 'Sure.',
    },
    {
      side: 'local',
      name: 'Cleverbot',
      text: 'Au revoir',
    },
];

const conversation_container = document.querySelector('.conversation');

// loop through elements of the array
// for each of the elements (which is an object)
conversation.forEach(

    (element) => {
        // display a message in the conversation_container
        // == append some HTML code to its .innerHTML
        conversation_container.innerHTML +=
            `<div class="message message--${element.side}">
                <div class="message__text">
                    ${element.text}
                </div>
            </div>`
    }

)

// for (let i = 0; i < conversation.length; i++) {
//     conversation_container.innerHTML +=
//         `<div class="message message--${conversation[i].side}">
//             <div class="message__text">
//                 ${conversation[i].text}
//             </div>
//         </div>`
// }

