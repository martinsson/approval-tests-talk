"use strict"
require('approvals').mocha();
let fs = require('fs')

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

    writeBodyToFile(recipient) {
        let content = this.textFor(recipient)
        fs.writeFileSync("/tmp/messageBody.txt", content)
    }
}

describe("Message", function () {
    let message = new Message()

    it("works for strings", function () {
        let messageString = message.textFor("Paul")

        this.verify(messageString)
    })

    // it("works with objects", function () {
    //     let messageBody = message.bodyFor("Paul")
    //
    //     this.verifyAsJSON(messageBody)
    // })
    //
    // it("works with files", function () {
    //     message.writeBodyToFile("Augustin")
    //
    //     let resultFile = fs.readFileSync("/tmp/messageBody.txt").toString()
    //     this.verify(resultFile)
    // })
})


