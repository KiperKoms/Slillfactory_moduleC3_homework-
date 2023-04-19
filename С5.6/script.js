const btn = document.querySelector('button');
const input1 = document.querySelector(".width");
const input2 = document.querySelector(".leinght");
const result = document.querySelector('.result');

const useRequest = (width, leinght) => {
    return fetch(`https://picsum.photos/${width}/${leinght}`)
        .then((response) => {
            return response.blob();
        })
        .then((blob) => {
            return URL.createObjectURL(blob);
        })
        .catch(() => {
            console.log('error');
        });
}

btn.addEventListener('click', async () => {
    value1 = Number(input1.value);
    value2 = Number(input2.value);
    if (value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
        result.textContent = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await useRequest(value1, value2);
        result.innerHTML = `
      <img src='${requestResult}' alt='image'>`
    }
})