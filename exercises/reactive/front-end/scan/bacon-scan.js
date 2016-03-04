$(function(){
  var messagesContainer = $('#scan .messages')
  var messageInput = $('#scan .message-input')

  /*  In the commented out code below, in an imperative style, we add a message
    to the ".messages" element with the value of the input when the user presses
    <enter>. We've added a timestamp to the messages so you can see when they
    were created */

  // messageInput.on('keypress', function(e){
  //   if (isEnter(e)){
  //     var message = e.target.value
  //     message = addTime(message)
  //     var content = makeAlert(message)
  //     messagesContainer.prepend(content)
  //     emptyInput(messageInput)
  //   }
  // })

  /*  Rewrite the above in a functional reactive style, starting with an
    EventStream from the ".message-input". You can reuse some of the helper
    functions below */

  var inputStream = messageInput.asEventStream('keypress')

  /*  You can use the .map, .filter and .onValue methods from the "map" and
    "filter" examples */

  /*  You can use the inputStream's .scan(accumulator, combiner) method to
    to create a stream whose members are a reduced value derived from the
    members of the input stream. You might use this to build up an array of
    messages, or a string containing all the messages */

  function isEnter(e){
    return e.keyCode === 13
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

  function emptyInput(input){
    input.val('')
  }
})
