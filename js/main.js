let bookMarkNameInput = document.getElementById("BookMarkName");
let webSiteURLInput = document.getElementById("WebSiteURL");
let clearInput = document.getElementsByClassName("form-control");
let btnAdd = document.getElementById('btnAdd'); 
let bookmarkList = [];
if( JSON.parse(localStorage.getItem('bookmarkData') != null))
{
 bookmarkList = JSON.parse(localStorage.getItem('bookmarkData'));
DisplayData();
};
btnAdd.onclick = function (){
    addBookmark() ;
    DisplayData();
    clearData(); 
} 
///////// Adding function

function addBookmark(){
    let bookmark = {
        name: bookMarkNameInput.value,
        url: webSiteURLInput.value,
    }
    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarkData", JSON.stringify(bookmarkList))
}

function DisplayData() {
    let temp = "";
    for (var i = 0; i < bookmarkList.length; i++) {
        temp += `<tr>
        <td> ${i}</td>
        <td>${bookmarkList[i].name}</td>
        <td>${bookmarkList[i].url}</td>
        <td>
          <a href="${bookmarkList[i].url}"  target="_blank" class="btn btn-outline-warning pe-3 ps-3" onclick = "visited(${i})">visit</a>
        </td>
        <td>
            <button class="btn btn-outline-danger" onclick ="deletebookmark(${i})">delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp;
}

function deletebookmark(index) {
    bookmarkList.splice(index, 1)
    localStorage.setItem("bookmarkData", JSON.stringify(bookmarkList))
    DisplayData();
}

function visited(index) {
 bookmarkList[i].url = webSiteURLInput.value;
}
function clearData() {
    for (var i = 0; i < clearInput.length; i++) {
        clearInput[i].value = '';
    }
}
/// Rejacx productNameInput && productPrice
bookMarkNameInput.onkeyup = function (){
    let nameRejax = /^[A-Za-z]{8,14}$/;
     if (nameRejax.test(bookMarkNameInput.value)) {
         bookMarkNameInput.classList.add('is-valid');
        bookMarkNameInput.classList.remove('is-invalid');
     } else {
        bookMarkNameInput.classList.add('is-invalid');
     }
}
webSiteURLInput.onkeyup = function (){
    let urlRejax = (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
     if (urlRejax.test(webSiteURLInput.value)) {
        webSiteURLInput.classList.remove('is-invalid');
        webSiteURLInput.classList.add('is-valid');
     } else {
        webSiteURLInput.classList.add('is-invalid');
     }
}