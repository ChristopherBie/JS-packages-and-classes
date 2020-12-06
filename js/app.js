let button = document.querySelector('button');
let displayArea = document.querySelector('p');


class tweet {
    content = '';

    constructor(someTweet) {
        this.getNewTweet();

    }
    
    getNewTweet() {
        button.addEventListener('click', function() {
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    this.content = JSON.parse(this.responseText);
                    displayArea.innerText = this.content.quote;
                }
            }
            ajax.open("GET", "https://api.kanye.rest/", true);
            ajax.send();
        });
    }
}

let firstTweet = new tweet();
