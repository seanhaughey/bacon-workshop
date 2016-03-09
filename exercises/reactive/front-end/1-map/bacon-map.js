$(function(){
  var messageInput = $('#map .message-input')
  var messageContent = $('#map .message')

  /*  In the commented out code below, in an imperative style, update the
    content of ".message" when the user types in the input */

  // messageInput.on('keypress', updateContent)
  //
  // function updateContent(e){
  //   var message = e.target.value
  //   var content = makeAlert(message)
  //   messageContent.html(content)
  // }

  /*  Rewrite the above in a functional reactive style, starting with an
    EventStream from the ".message-input". You can reuse the helper function
    below */
g
  var inputStream = messageInput.asEventStream('keypress')

  /*  You can call the inputStream's .map(mapper) method to create a new
    stream whose elements are derived from the raw event objects */

  /*  You can call the inputStream's .onValue(callback) method with a callback
    that updates the messageContent element */

  function makeAlert(message){
    return '<div class="alert alert-info">' + message + '</div>'
  }
})
