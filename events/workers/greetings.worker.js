let queue

module.exports.init = (queueName) => {
    queue = queueName
}

module.exports.messageReceivedEvent = (message) => {
    console.log(`new message received in queue ${queue} and the message is ${message}`)
}