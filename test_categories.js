/**
 * We'll sort each email into the following categories
 * - sender_name
 * - sender_address
 * - recipient_name
 * - recipient_address
 * - date_sent
 * - subject
 * - email_body
 */

const ReadTestEmail = require('./ReadTestEmail')
const _contents = new ReadTestEmail().contents
const contents = _contents.split("From r")
contents.shift()
// const firstEmail = contents.shift()
// console.log('First Email :', firstEmail)

var emails = []
contents.forEach(item => {
    let objEmail = {}

    let sender = /From:.*/.exec(item)
    if (sender && sender[0])
        sender = sender[0]

    let senderEmail = null
    let senderName = null
    if (sender) {
        senderEmail = (/\w\S*@.*\w/.exec(sender))
        if (senderEmail && senderEmail[0]) 
            senderEmail = senderEmail[0]

        senderName = (/:.*</.exec(sender))
        if (senderName && senderName[0]) 
            senderName = senderName[0].replaceAll(/\s<|:\s/g, '')
    }

    console.log('sender > ', sender)
    console.log('senderEmail > ', senderEmail)
    console.log('senderName > ',senderName)

    let recipient = /To:.*/.exec(item)
    if (recipient && recipient[0])
        recipient = recipient[0]

    let recipientEmail = null
    let recipientName = null
    if (recipient) {
        recipientEmail = /\w\S*@.*\w/.exec(recipient)
        if (recipientEmail && recipientEmail[0]) 
            recipientEmail = recipientEmail[0]

        recipientName = /:.*</.exec(recipient)
        if (recipientName && recipientName[0]) 
            recipientName = recipientName[0].replaceAll(/\s<|:\s/g, '')
    }

    console.log('recipient > ', recipient)
    console.log('recipientEmail > ', recipientEmail)
    console.log('recipientName > ',recipientName)

    let date = /Date:.*/.exec(item)
    if (date && date[0])
        date = date[0]

    let dateOnly = null
    if (date) {
        dateOnly = /\d+\s\w+\s\d+/.exec(date)
        if (dateOnly && dateOnly[0])
            dateOnly = dateOnly[0]
        console.log('datePlus (\\d+\\s\\w+\\s\\d+) > ', dateOnly)
        dateStar = /\d*\s\w*\s\d*/.exec(date)
        if (dateStar && dateStar[0])
            dateStar = dateStar[0]
        console.log('dateStar (\\d*\\s\\w*\\s\\d*) > ', dateStar)
    }

    console.log('date > ', date)
    console.log('dateOnly > ', dateOnly)

    let subject = /Subject: .*/.exec(item)
    if (subject && subject[0])
        subject = subject[0]

    if (subject)
        subject = subject.replace(/Subject: /, '')

    console.log('subject > ', subject)

    const lines = item.split(/\r\n/g)
    const startSplit = lines.find((line) => line.startsWith('Status: '))
    const [, body] = item.split(startSplit + '\r\n')
    // console.log('body > ', body)

    objEmail = {
        sender_name: senderEmail,
        sender_address: senderName,
        recipient_name: recipientEmail,
        recipient_address: recipientName,
        date_sent: dateOnly,
        subject: subject,
        // email_body: body
        email_body: 'email body here'
    }
    
    console.log('-- objEmail --------------------')
    console.log(objEmail)
    console.log('-- objEmail --------------------')

    emails.push(objEmail)
});

console.table(emails)









