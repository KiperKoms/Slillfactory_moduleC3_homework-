// создание экземпляра класса DOMParser. Позволяет парсить XML
const parser = new DOMParser();

// XML, который нужно спарсить
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;


// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

//Получаем DOM-нод
const listNode = xmlDOM.querySelector('list');

//Метод querySelectorAll() озвращает статический (не динамический) NodeList, 
//содержащий все найденные элементы документа, которые соответствуют указанному селектору.
//Объект NodeList — это коллекция узлов
const students = listNode.querySelectorAll('student');
let list = [];
students.forEach((student) => {
    const nameNode = student.querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const langAttr = nameNode.getAttribute('lang');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof');
    
 //Создаем объект для каждого студента
    const listStudent = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    };

 //Запись созданных объектов студентов в результирующий объект
    list.push(listStudent);
});
result = {list: list};
console.log(result);
