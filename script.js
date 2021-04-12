function selectAll(){

    var elements = document.getElementsByClassName('checkbox-icon');

    if (document.getElementById('checkAllBox').classList.contains('unchecked')){
        for (i = 0; i < elements.length; i++){
            elements[i].classList.remove('unchecked');
            elements[i].classList.add('checked');
        }
        return;
    }
    if (document.getElementById('checkAllBox').classList.contains('checked')){
        for (i = 0; i < elements.length; i++){
            elements[i].classList.remove('checked');
            elements[i].classList.add('unchecked');
        }
    }
}

function checkBox(boxId){

    document.getElementById('checkAllBox').classList.remove('checked');
    document.getElementById('checkAllBox').classList.add('unchecked');

    if (document.getElementById(boxId).classList.contains('unchecked')){
        document.getElementById(boxId).classList.remove('unchecked');
        document.getElementById(boxId).classList.add('checked');
        return;
    }
    if (document.getElementById(boxId).classList.contains('checked')){
        document.getElementById(boxId).classList.remove ('checked');
        document.getElementById(boxId).classList.add('unchecked');
    }
}

function toggleModal(modalId){
    document.getElementById(modalId).classList.toggle('hidden');
}

function deleteBadgeInfo(){
    var badgeFields = ['first-name','preferred-first','last-name','company','onsite-badge-holders','onsite-aux','check-in-time'];
    for (i = 0; i < badgeFields.length; i++){
        document.getElementById(badgeFields[i]).innerHTML = "";
    }
}