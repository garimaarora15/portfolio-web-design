// const TypeWriter = function(txtElement, words, wait = 3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// //Type method
// TypeWriter.prototype.type = function(){
//     // Current index of word
//     const current = this.wordIndex % this.words.length;

    
//     //get full text of current word
//     const fulltxt = this.words[current];

//     //check if deleted
//     if(this.isDeleting){
//         //Remove a character
//         this.txt = fulltxt.substring(0, this.txt.length - 1);
//     }else{
//         //add a character
//         this.txt = fulltxt.substring(0, this.txt.length + 1);
//     }

//     //insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     //initial type speed
//     let typeSpeed = 300;

//     if(this.isDeleting){
//         this.typeSpeed /= 2;
//     }

//     //checking if the word is complete
//     if(!this.isDeleting && this.txt === fulltxt){
//         //make pause at end
//         typeSpeed = this.wait;
//         //set delete to true
//         this.isDeleting = true;
//     }else if(this.isDeleting && this.txt === ''){
//         this.isDeleting = false;
//         //move to next word
//         this.wordIndex++;
//         //pause before start typing
//         this.typeSpeed = 500;
//     }
//     setTimeout(() => this.type(), typeSpeed);
// }

class TypeWriter{
    constructor(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
    }

    type(){
        const current = this.wordIndex % this.words.length;

    
    //get full text of current word
    const fulltxt = this.words[current];

    //check if deleted
    if(this.isDeleting){
        //Remove a character
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    }else{
        //add a character
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 300;

    if(this.isDeleting){
        this.typeSpeed /= 2;
    }

    //checking if the word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        //make pause at end
        typeSpeed = this.wait;
        //set delete to true
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        //pause before start typing
        this.typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
    }
}

//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('.data-wait');
    //Init typewriter
    new TypeWriter(txtElement, words, wait);
}
