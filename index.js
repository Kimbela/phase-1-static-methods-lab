class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9 '-]/g, '');
  }

  static titleize(string) {
    const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i === 0 || !lowercaseWords.includes(word)) {
        words[i] = this.capitalize(word);
      }
    }

    return words.join(' ');
  }
}