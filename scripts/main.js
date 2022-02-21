async function apiCall(url) {
    //add api call logic here
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}


function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(ele => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.addEventListener('click', () => {
            localStorage.setItem('article', JSON.stringify(ele));
            location.href = '../news.html';
        });
        let image = document.createElement('img');
        image.src = ele.urlToImage;
        let title = document.createElement('h3');
        title.innerText = ele.title;
        let name = document.createElement('p');
        name.innerText = `by ${ele.source.name}`;
        card.append(image, title, name);
        main.append(card);
    });
}

export { apiCall, appendArticles };