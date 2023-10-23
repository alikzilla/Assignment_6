const wordsArray = [
    "Sunshine",
    "Strawberry",
    "Satisfaction",
    "Sanctuary",
    "Serenity",
    "Spectacular",
    "Suspense",
    "Superb",
    "Symposium",
    "Scrumptious",
    "Swirling",
    "Splendid",
    "Sensation",
    "Symphony",
    "Sublime",
    "Sweltering",
    "Sovereign",
    "Singular",
    "Stardust",
    "Stupendous",
    "Spherical",
    "Splendiferous",
    "Succulent",
    "Serendipity",
    "Synthesize",
    "Satisfaction",
    "Splendorous",
    "Satisfactory",
    "Sumptuous",
    "Shimmering",
    "Synchronization",
    "Sardonic",
    "Sensitive",
    "Substantial",
    "Suspenseful",
    "Sympathetic",
    "Supernova",
    "Succulence",
    "Surreal",
    "Sophisticated",
    "Scrumptious",
    "Supersonic",
    "Stupendous",
    "Spellbinding",
    "Sunshine",
    "Splendiferous",
    "Solidarity",
    "Sublime",
    "Sensational",
    "Spirited",
    "Significant",
  ];
    
const input = document.getElementById("wordInput");
const ul = document.getElementById("wordList");
  
function updateList(){
    const inputText = input.value;
    ul.innerHTML = '';

    if(inputText){
        const filtered = wordsArray.filter(word => word.toLowerCase().startsWith(inputText.toLowerCase()));
        filtered.forEach(word =>{
            const li = document.createElement("li");
            li.textContent = word;
            ul.appendChild(li);
        });
    }
}

setInterval(updateList, 500);