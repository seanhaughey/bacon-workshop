$(function(){
  var messagesContainer = $('#filter .messages')
  var messageInput = $('#filter .message-input')
  var messageStream = messageInput.asEventStream('keypress')
  .filter(isEnter)
  .map(extractValue)
  .map(addTime)
  .map(makeAlert)
  messageStream.onValue(updateContent(messagesContainer))
  messageStream.onValue(emptyInput(messageInput))

  function isEnter(e){
    return e.keyCode === 13
  }

  function extractValue(e){
    return e.target.value
  }

  function addTime(message){
    var d = new Date(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds()
    return hours + ':' + minutes + ':' + seconds + ' - ' + message
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

  function emptyInput(input){
    return function(){
      input.val('')
    }
  }
})
