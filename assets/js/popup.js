restoreOptions();

document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('switch_1').addEventListener('change', changeHandler);
        document.getElementById('switch_2').addEventListener('change', changeHandler);
  });


function changeHandler(){

if(switch_1.checked){
    switchState = switch_1.checked;
    chrome.storage.sync.set({key_e: switchState}, function() {
    console.log('Value is set to ' + switchState);
    });
}
else{
    switchState = switch_1.checked;
    chrome.storage.sync.set({key_e: switchState}, function() {
    console.log('Value is set to ' + switchState);
    });
    }


if(switch_2.checked){
    switchState2 = switch_2.checked;
    chrome.storage.sync.set({key_v: switchState2}, function() {
    console.log('Value is set to ' + switchState2);
    });
}
else{
    switchState2 = switch_2.checked;
    chrome.storage.sync.set({key_v: switchState2}, function() {
    console.log('Value is set to ' + switchState2);
    });
    }
}

function restoreOptions() {
    chrome.storage.sync.get({
        // initial settings
        key_e : true,
        key_v : false,
    }, function (items) {
        document.getElementById('switch_1').checked = items.key_e;
        document.getElementById('switch_2').checked = items.key_v;
    });
}