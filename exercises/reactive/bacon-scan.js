$(function(){
  var messagesContainer = $('#scan .messages')
  var messageInput = $('#scan .message-input')
  var messageStream = messageInput.asEventStream('keypress')
  .filter(isEnter)
  .map(extractValue)
  .map(addTime)
  .map(makeAlert)
  .scan('', concat)
  .onValue(updateContent(messagesContainer))

  function isEnter(e){
    return e.keyCode === 13
  }

  function extractValue(e){
    return e.target.value
  }

  function addTime(message){
    var d = new Date()
    return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' - ' + message
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

  function concat(str1, str2){
    return str1 + str2
  }
})
