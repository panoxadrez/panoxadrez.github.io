function elementStatusChange(elementID, status1, status2, buttonCheck)
{
    var element = document.querySelector("div#".concat(elementID));
    var button = document.querySelector("button#".concat(elementID));
    var elementStatus = element.style.display;
    var elementStatusOutput = null;

    elementStatusOutput = elementStatusChanger(elementStatus, status1, status2);
    element.style.display = elementStatusOutput;

    if (buttonCheck) {
        if (elementStatusOutput != "none") {
            button.classList.add('minus');
            button.classList.remove('plus');
        } else{
            button.classList.add('plus');
            button.classList.remove('minus');
        }
            
    }
}


function elementStatusChanger(status, status1, status2) {
    if (status == status1) {
        return status2
    } else
        return status1
}