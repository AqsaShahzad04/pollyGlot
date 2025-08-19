import { getTranslation } from "./getTranslation.js";
const Btn = document.querySelector('.send-btn')
const chatContainer= document.querySelector('.chat')
const chatMessages = []
Btn.addEventListener('click', async() => {
  const userInputBox = document.querySelector('#user-input')
  const userQuery = userInputBox.value;
   userInputBox.value=''
  const language = document.querySelector('select').value;
  try {
    if (userQuery) {
  chatMessages.push({
    role: 'user',
    content: userQuery,  
  })
    renderChats()
    const geminiReply =await getTranslation(userQuery,language)
    if (geminiReply) {
      chatMessages.push({
        role: 'Gemini',
        content:geminiReply
      })
       renderChats()
      }
    }
  }
  catch (error) {
    console.log(error)
  }

})
  
function renderChats() {
   const chatHtml = chatMessages.map(msg => {
      const classRole=msg.role==='user'?'user-input-box':'system-ans'
        return `<div class=${classRole}>
                   ${msg.content}
                </div>`
   }).join('')
  
  chatContainer.innerHTML = chatHtml
   scrollChatToBottom();
}
  
















// Auto-scroll chat to bottom
function scrollChatToBottom() {
    const chatContainer = document.querySelector('.chat');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


// If you want to auto-scroll when page loads
window.addEventListener('load', scrollChatToBottom);

