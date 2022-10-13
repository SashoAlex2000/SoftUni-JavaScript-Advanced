function getArticleGenerator(articles) {
    let arr = articles;


    return () => {
        // console.log("TEST");

        if (arr.length > 0) {
            let currentArticle = arr.shift();
            // console.log(currentArticle)
            let newArticle = document.createElement('article');
            newArticle.textContent = currentArticle;
            
            let content = document.getElementById('content');
            content.appendChild(newArticle);

        }

    }
    
}
