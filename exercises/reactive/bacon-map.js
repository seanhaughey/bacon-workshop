$(function(){
  var messagesContainer = $('#map .messages')
  var messageInput = $('#map .message-input')
  var messageStream = messageInput.asEventStream('keypress')
  .map(extractValue)
  .map(makeAlert)
  .onValue(updateContent(messagesContainer))

  function isEnter(e){
    return e.keyCode === 13
  }

  function extractValue(e){
    return e.target.value
  }

  function makeAlert(message){
    return '<div class="alert alert-info">' + message + '</div>'
  }

  function updateContent(el){
    return function(content){
      el.html(content)
      return content
    }
  }
})
