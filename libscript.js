//component
class Injector {
    parts = {
        noun: 'noun',
        verb: 'verb',
        pronoun: 'pronoun',
        adjective: 'adjective',
        adverb: 'adverb',
        properNoun: 'properNoun',
    }
    article = ``;

    placestory() {
        let story = document.getElementById('story')
        story.innerHTML = this.article
    }
    onSubmit() {
        
        this.parts['noun'] = document.getElementById('noun').value
        this.parts['verb'] = document.getElementById('verb').value
        this.parts['pronoun'] = document.getElementById('pronoun').value
        this.parts['adverb'] = document.getElementById('adverb').value
        this.parts['adjective'] = document.getElementById('adjective').value
        this.parts['properNoun'] = document.getElementById('properNoun').value
        this.article = `There was a ${this.parts.noun} that liked to ${this.parts.verb}. 
               ${this.parts.pronoun} would ${this.parts.adverb} smile whenever ${this.parts.pronoun} ran.
               A delicate ${this.parts.noun} ${this.parts.pronoun} were not; 
               but ${this.parts.adjective}. ${this.parts.properNoun} was fierce.`
        //console.log(this.article)
        this.placestory()
       

    }

}
component = new Injector()
