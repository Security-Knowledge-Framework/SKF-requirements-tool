function filterResults() {
    let input, filter, cards, i;
    input = document.getElementById('myInput');
    filter = input.value;
    cards = document.getElementsByClassName("card");

    // Remove existing highlights
    let highlightedItems = document.getElementsByClassName("highlighted");
    while(highlightedItems[0]) {
        highlightedItems[0].outerHTML = highlightedItems[0].innerHTML;
    }

    if (!filter) return; // If search field is empty, stop here.

    for (i = 0; i < cards.length; i++) {
        let card = cards[i];
        highlightMatches(card, filter);
        let isMatch = card.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1;
        card.style.display = isMatch ? "" : "none";
    }
}

function highlightMatches(element, match) {
    let nodes = Array.from(element.childNodes);

    nodes.forEach(node => {
        if (node.nodeType === 3) { // We have a text node. If it matches our search term, highlight it
            let nodeText = node.nodeValue;
            let matchIndex = nodeText.toUpperCase().indexOf(match.toUpperCase());

            if (matchIndex >= 0) { // We have a match!
                let matchText = nodeText.substr(matchIndex, match.length);
                let beforeText = nodeText.substr(0, matchIndex);
                let afterText = nodeText.substr(matchIndex + match.length);

                let highlightHTML = document.createElement("mark");
                highlightHTML.textContent = matchText;
                highlightHTML.className = "highlighted";

                let fragment = document.createDocumentFragment();
                fragment.append(document.createTextNode(beforeText), highlightHTML, document.createTextNode(afterText));

                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === 1 && node.childNodes && !/(style|script)/i.test(node.tagName)) {
            highlightMatches(node, match); // Recurse into child nodes
        }
    });
}