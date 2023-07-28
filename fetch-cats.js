
let catArray = new Array();  

function start() {
    const btnGetCatInfo = document.getElementById('btn_get_cat_info');
    btnGetCatInfo.onclick = handleButtonClick;

    loadCats();

}//end start

function loadCats() {
    const catList = document.getElementById('cat_list');

    let newOption;

     fetch('https://api.thecatapi.com/v1/breeds?api_key=live_aCYXS7e55VjiLGA5bGv5nSbCyrZjAgIAOfzTYyvwSklk5OKTU42uuM0yBrp5Vjz5')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((cat) => {
                newOption = document.createElement('option');
                newOption.value = cat.name;
                newOption.text = cat.name;

                //parallel arrays
                catList.appendChild(newOption);
                catArray.push(cat);  //store cat data
            });//end for each
        });//end then
}//end loadCats

function handleButtonClick() {
    const catList = document.getElementById('cat_list');
    const index = catList.selectedIndex;

    const outputSpan = document.getElementById('output');

    let output = `<h2>${catArray[index].name}</h2>`;
    output += `<img src='${catArray[index].image.url}'><br>`;
    output += `<h3>Description</h3><p>${catArray[index].description}</p>`

    outputSpan.innerHTML = output;
}//end handleButtonClick

window.onload = start;