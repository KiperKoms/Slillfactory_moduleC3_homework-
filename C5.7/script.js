const btn = document.querySelector('button');
const input1 = document.querySelector('.page');
const input2 = document.querySelector('.limit');
const resultHTML = document.querySelector('.result');

const useRequest = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            return response;
        })
        .then(data => {
            result = data.json();
            return result;
        }) 
        .catch(() => {
            console.log('error');
        });
}

function showResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img class="card-image" src="${item.download_url}">
                <p>${item.author}</p>
            </div>
        `;
        cards += cardBlock;
    });

    resultHTML.innerHTML = cards;
}

btn.addEventListener('click', async () => {
    const page = Number(input1.value);
    const limit = Number(input2.value);
    if (page < 1 || page > 10 && limit < 1 || limit > 10) {
        result.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
    else if (limit < 1 || limit > 10) {
        result.textContent = 'Лимит вне диапазона от 1 до 10';
    }
    else if (page < 1 || page > 10) {
        result.textContent = 'Номер страницы вне диапазона от 1 до 10';
    }
    else {
        const requestResult = await useRequest(page, limit);
        console.log(requestResult)
        localStorage.setItem('lastJSON', JSON.stringify(requestResult));
        showResult(requestResult);
    }
})

window.addEventListener('DOMContentLoaded', () => {
    showResult(JSON.parse(localStorage.getItem('lastJSON')));
})