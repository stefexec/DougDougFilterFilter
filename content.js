console.log("Thank you for using DougDoug Chat Filter v1.0")

function wordFilter(value, index, self) {
    // remove obvious stuff
    if (['', 'rigged', 'doug', 'lmao', 'r i g g e d', 'morb'].includes(value)) {
        return false;
    }
    // remove numbers
    if (/^\d+$/.test(value)) {
        return false;
    }
    // remove single char msgs
    if (value.length === 1) {
        return false;
    }
    // remove mentions
    if (value.charAt(0) === '@') {
        return false;
    }
    // remove word spam
    return self.indexOf(value) === index;
}

// hide sub messages
document.arrive('.user-notice-line', function() {
    $(this).hide();
});

document.arrive('.vod-message--user-notice', function() {
    $(this).parent().hide();
});

// Stream
chrome.storage.sync.get(['key_e'], function(result) {
    console.log('Live filtering is set to ' + result.key_e);

    if(result.key_e){
        switchState = result.key_e;
        console.log("DougDoug Chat filtering enabled!");
        document.arrive('.chat-line__message', function() {
            var $msgElem = $(this);
            var msgText  = $msgElem.text().trim().toLowerCase();
            var msgWords = msgText.split(' ').filter(wordFilter);
            if(msgWords.length <= 2) {
                $msgElem.hide();
    }
});
    }
    else{
        console.log("DougDoug Chat filtering disabled!");
        switchState = result.key_e;
        console.log('Chat filtering is set to: ' + switchState);
        }
        
});

// VOD
chrome.storage.sync.get(['key_v'], function(result) {
    console.log('VOD filtering is set to ' + result.key_v);

    if(result.key_v){
        switchState2 = result.key_v;
        console.log("DougDoug VOD Chat filtering enabled!");
        document.arrive('.vod-message > div:nth-child(2)', function() {
            var $msgElem = $(this);
            var msgText  = $msgElem.text().replace(/:/, ': ').trim().toLowerCase();
            var msgWords = msgText.split(' ').filter(wordFilter);
            if(msgWords.length <= 2) {
                $msgElem.parent().parent().hide();
    }
});
    }
    else{
        console.log("DougDoug VOD Chat filtering disabled!");
        switchState2 = result.key_v;
        console.log('Chat filtering is set to: ' + switchState2);
        }
        
});
