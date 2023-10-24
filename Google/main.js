const input = document.getElementById("wordInput");
const ul = document.getElementById("wordList");

async function fetchData() {
    const url = `https://wordsapiv1.p.rapidapi.com/words/${input.value}/synonyms`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '18a89e43ecmsha20cf25d9070782p1b492djsn0efb3535765e',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
  
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const inputText = input.value;
        ul.innerHTML = '';

        result.synonyms.forEach((word) => {
            const li = document.createElement("li");
            li.textContent = word;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

setInterval(fetchData, 500);