const ReadTestEmail = require('./ReadTestEmail')
const contents = new ReadTestEmail().contents

var matchStars = contents.match(/From:.*/g)
matchStars.forEach((matchStar) => console.log('match(*) :', matchStar))

var matchDots = contents.match(/From:...../g)
matchDots.forEach((matchDot) => console.log('match(.....) :', matchDot))

var names = matchStars.map((matchStar) => matchStar.match(/\".*\"/g))
names.forEach((name) => console.log('matchStar to name :', name))

var emails = matchStars.map((matchStar) => matchStar.match(/\w*\S@\S*.\w/g))
emails.forEach((email) => console.log('matchStar to email :', email))

var prefixEmails = matchStars.map((matchStar) => matchStar.match(/\w\S*@/g))
prefixEmails.forEach((prefixEmail) => console.log('matchStar to prefix-email :', prefixEmail))

var suffixEmails = matchStars.map((matchStar) => matchStar.match(/@.*/g))
suffixEmails.forEach((suffixEmail) => console.log('matchStar to suffix-email :', suffixEmail))
suffixEmails = matchStars.map((matchStar) => matchStar.match(/@.*\w/g))
suffixEmails.forEach((suffixEmail) => console.log('matchStar to suffix-email (+\w) :', suffixEmail))

var splitedEmails = emails.map((email) => email[0].split(/@/))
splitedEmails.forEach(([name, domain_name]) => console.log('[name, domain_name] :', `${name}, ${domain_name}`))
