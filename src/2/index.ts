// Participant: tyomhk2015 (https://nomadcoders.co/users/tyomhk2015)

interface IWord {
  [key: string]: string
}

class Dict {
  constructor(
      private word: IWord
  ) {}

  add(word: string, definition: string) {
      const wordExist = this.checkExist(word);
      if (wordExist) {
          console.log(`❌ ${word} already exists in the dictionary.`)
          return;
      }
      this.word[`${word}`] = definition
      console.log(`📝 ${word} is added.`)
  }

  get(query: string) {
      const result = this.checkExist(query);
      result ? console.log(`🪝 ${query} : ${this.word[`${query}`]}`) : `🔍 ${query} is not in the dictionary.`
  }

  delete(query: string) {
      const result = this.checkExist(query);
      result ? console.log(`✂️ Deleted the word, ${query}`) : `🔍 ${query} is not in the dictionary.`
      delete this.word[`${query}`]
  }

  update(query: string, definition: string) {
      const result = this.checkExist(query);
      this.word[`${query}`] = definition
      result ? console.log(`💡 Updated the word, ${query}! \n ${query} : ${this.word[`${query}`]}`) : `🔍 ${query} is not in the dictionary.`
  }

  checkExist(query: string) {
      let exist = true;
      if(!this.word[`${query}`]) {
          exist = false
      }
      return exist;
  }

  showAll() {    
      for (const [key, value] of Object.entries(this.word)) {
          console.log(`📖 ${key}: ${value}`);
      }
  }

  count() {
      console.log(`📗 There are ${Object.keys(this.word).length} words in total`);
  }
}

const dict = new Dict({});
dict.add('nico','nomad');
dict.add('lynn','nomad co-owner');
dict.get('lynn');
dict.add('nico','nomad');
dict.showAll();
dict.add('code','An activity that needs concentration.');
dict.update('nico','Owner of NomadCoders');
dict.showAll();
dict.delete('nico');
dict.showAll();
dict.count();