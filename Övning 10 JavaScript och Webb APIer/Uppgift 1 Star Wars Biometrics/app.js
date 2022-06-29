let uri = "https://www.swapi.tech/api/people/?name=";
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let textarea = document.querySelector("#textarea");

const getEncodedUri = function() {

    let fullUri = uri + input.value;

    let encodedUri = encodeURI(fullUri);

    return encodedUri;
}

const getApi = function(){
    
    let encodedUri = getEncodedUri();
    console.log(encodedUri);

    fetch(encodedUri, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then (data => 
    {
        
            console.log(data);
            
            textarea.innerHTML = "";
            
            data.result.forEach(person => {
                textarea.innerHTML += `\nCharacter(s) found!\nName: ${person.properties.name}\nHeight ${person.properties.height} cm\nMass: ${person.properties.mass} kg\nGender: ${person.properties.gender}\nHair color: ${person.properties.hair_color}\n`;
            })
        
    })
    .catch(err => console.log(err))

}

button.addEventListener("click", function(){
    
    getApi();
     
});



