"use strict"
require('approvals').mocha();

class MessageBody {

    constructor(receipient) {
        this.receipient = receipient
    }

    text() {
        return "Hello " + this.receipient + "\n" +
            "We're so excited to announce this new cool thing" + "\n" +
            "\n" +
            "It's actually so cool that it's completely freezing!";
    }

}

class Message {

    textFor(recipient) {
        return this.bodyFor(recipient).text()
    }

    bodyFor(recipient) {
        return new MessageBody(recipient)
    }
}

describe("Message", function () {
    let message = new Message()

    it("is what it is", function () {
        this.verify(message.textFor("Paul"))
    })

    // it("works with objects", function () {
    //     this.verifyAsJSON(message.bodyFor("Paul"))
    // })
})


