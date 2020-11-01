let section3 = document.getElementById('up');
let section4 = document.getElementsByClassName("rightside")[0];
let section5 = document.getElementsByClassName("downblock")[0];
let inputUserText = document.getElementById('inputUserText');
let Submit = document.getElementById('Submit');
let btnSubmit = document.getElementById('Submitbtn');
let checkBtn = document.getElementById('checkBtn');

let a = 12, b = 7;

function loadColor() {
    document.cookie.split(';').map(item => {
        if (item.includes('_blockColor')) {
            section5.style = item.substring(item.indexOf('=') + 1, item.length);
        }
    });
};

function loadText() {
    document.cookie.split(';').map(item => {
        if (item.includes('_savedText')) {
            inputUserText.value = item.substring(item.indexOf('=') + 1, item.length);
        }
    });
};

let task1 = () => {
    let tmp = section4.innerHTML;
    section4.innerHTML = section5.innerHTML;
    section5.innerHTML = tmp;
};

let task2 = () => {
    let s = Math.PI*a*b;
    section3.getElementsByTagName('p')[0]
        .innerHTML += '<p>The area is: ' + s + '</p>';
}

let deleteAllCookies = () =>
{
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
let task3 = () => {

    Submit.onclick = () => {
        let str = document.getElementsByClassName('text-area');
        const count = (str[0].innerText || str[0].value).split(/\s+/).length
        alert(count);
        document.cookie ="Counter" + count;
    }

    if(document.cookie.includes('Counter')){
        alert(document.cookie);
        alert("Cookies will be deleted permanently");
        deleteAllCookies();
        document.getElementById('InputForm').remove();
    }

};

let task4 = () => {


    checkBtn.onclick = () => {
        localStorage.align = "left";
    };
    document.getElementsByClassName("rightside")[0].style.justifyContent = localStorage.align ? "flex-end" : "flex-start";


};

let task4_1 = () => {


    checkBtn1.onclick = () => {
        localStorage.align = "left";
    };
    document.getElementsByClassName("downblock")[0].style.justifyContent = localStorage.align ? "flex-end" : "flex-start";
    localStorage.clear();

}

let task4_2 = () => {


    checkBtn1.onclick = () => {
        localStorage.align = "left";
    };
    document.getElementById('up').style.justifyContent = localStorage.align ? "flex-start" : "flex-end";

}

let task5 = () => {
    window.addEventListener('dblclick', event => {
        alert('dblclick event completed');
    });

};

const initEditableBlocks = () => {
    Array.from(document.getElementsByClassName('editArea')).map((area) => {
        area.addEventListener('change', (event) => {
            const newContent = event.target.value;
            localStorage.setItem(`${event.target.parentNode.id}Content`, newContent);
// zamena teksta
            event.target.parentNode.children[0].innerHTML = newContent;
        })
    })
    Array.from(document.getElementsByClassName('editBtn')).map((btn) => {
        btn.addEventListener('click', (event) => {
            localStorage.removeItem(`${event.target.parentNode.id}Content`);
            document.location.reload();
        })
    })
}
const makeEditableBlock = (blockId) => {
    const content = localStorage.getItem(`${blockId}Content`) ?
        localStorage.getItem(`${blockId}Content`) :
        document.getElementById(blockId).innerHTML;
    document.getElementById(blockId).innerHTML = content;
    document.getElementById(blockId).insertAdjacentHTML('beforeend',
        `<textarea class="editArea">${content}</textarea>
    <button type="submit" class="editBtn">Return default</button>`)
}
let task6 = () => {
    document.addEventListener('DOMContentLoaded', () =>
    {
        makeEditableBlock("editblck");
        initEditableBlocks();
        makeEditableBlock("editblock");
        initEditableBlocks();
    })


};

loadColor();
loadText();
task1();
task2();
task3();
task4();
task5();
task6();
