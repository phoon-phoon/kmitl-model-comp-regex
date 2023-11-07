
class ReadTestEmail {
  constructor(path) {
    this.path = path ? path : './test_emails.txt';
    this.contents = this.read();
  }

  read() {
    const fs = require('fs')
    try {
      // Set file to contents
      this.contents = fs.readFileSync(this.path, 'utf8');
    } catch (err) {
      console.error('Error reading file:', err);
    }

    return this.contents
  }
}

module.exports = ReadTestEmail;