$(function(){
  var messageContent = $('#map .messages')
  var messageInput = $('#map .message-input')
  var messageStream = messageInput.asEventStream('keypress')
  .map(extractValue)
  .map(makeAlert)
  .onValue(updateContent(messageContent))

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
