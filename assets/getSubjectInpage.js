var test = document.querySelectorAll('*[id]')
var list = document.getElementById('tableSubject')



for (var entry of test.entries()) {
    const tag = entry[1].localName;
    const id = entry[1].id;
    if(tag == "h2"){
        var newStart = document.createElement("ul");
        var newLink = document.createElement("li");
        var newA = document.createElement("a");
        list.appendChild(newStart);
        newStart.appendChild(newLink);
        newA.setAttribute('href', '#'+id)
        text = document.createTextNode(id)
        newA.appendChild(text)
        newLink.appendChild(newA);
    }
    if(tag == "h3"){
        startH2 = newLink.appendChild(document.createElement("ul"))
        linkH2 = startH2.appendChild(document.createElement("li"))
        aH2 = linkH2.appendChild(document.createElement("a"))
        aH2.href = '#'+id
        text = document.createTextNode(id)
        aH2.appendChild(text)
        linkH2.appendChild(aH2)
    }
    if(tag == "h4"){
        startH4 = linkH2.appendChild(document.createElement("ul"))
        linkH4 = startH4.appendChild(document.createElement("li"))
        aH4 = linkH4.appendChild(document.createElement("a"))
        aH4.href = '#'+id
        text = document.createTextNode(id)
        aH4.appendChild(text)
        linkH4.appendChild(aH4)
    }
    
}