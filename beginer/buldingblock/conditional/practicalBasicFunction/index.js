var displayMessage = (mes1, mes2) => {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = mes1;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'close';
    closeBtn.setAttribute('class', 'closeBtn');
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.removeChild(msg);
    }

    var displayBtn = document.createElement('button');
    displayBtn.textContent = 'display';
    displayBtn.setAttribute('class', 'displayBtn');
    panel.appendChild(displayBtn);


    displayBtn.onclick = function() {
        msg.textContent = mes2;
        panel.appendChild(msg);
    }

    var panel1 = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel1);
    panel1.appendChild(msg);
};
displayMessage('oanh', 'hi pham van oanh');
