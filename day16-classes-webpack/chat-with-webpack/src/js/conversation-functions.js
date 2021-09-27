import { conversation } from "./data";

const conversation_container = document.querySelector('.conversation');

// index of the next message to be displayed
let next_message_index = 0;

export const display_next_message = () => {

    // 500ms

    // find the next message in the conversation
    const element = conversation[next_message_index];

    // add the message HTML to the conversation container
    conversation_container.innerHTML +=
        `<div class="message message--${element.side}">
            <div class="message__text">
                ${element.text}
            </div>
        </div>`

    // if there are any more messages in the conversation
    // after the current next_message_index
    if (conversation.length - 1 > next_message_index) {

        // raise the index by 1
        next_message_index++;

        // set timeout to display the next message 500ms from now
        setTimeout(display_next_message, 500);
    }
}