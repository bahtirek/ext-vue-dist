
window.bugReportextention = {
    screenshot: '',
    reports: [],
    dynamicDomFlow: false,
    currentProject: {},
    projects: [],
    selectedElement: '',
    selectedElementRect: '',
    currentElementInlineStyle: ''
};

chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(message, sender, sendResponse) {
    /**
     * message: inject - turns on the extension and displays the extension UI.
     * Triggered on extention button click.
     *  */ 
    if (message === 'inject') {
        const ext = getElementById("ui-br-ext-extension-container");
        if(extention) {
            extention.remove();
        } else {
            document.body.insertAdjacentHTML('beforeend', `<div id="ui-br-ext-extension-container"></div>`);
        }
    }

    /**
     * message: triger_select
     * Key combo: Cntr-Shift-S
     * Triggers the onSelect() function, which enables element hover and selection (red outline).
     * Used for dynamic elements such as drop downs.
     */
    if (message == "trigger_select") {
        window.selectButtonComponent.toggleSelectButton();        
    }

    /**
     * message: get_screenshot
     * Key combo: Cntr-Shift-U
     * Used to take screenshot of dynamic elements.
     */
    if (message == "get_screenshot") {
        window.selectButtonComponent.getScreenshot();
        // turn on report bug
    }

    if (message == "stop-video-recording") {
        console.log('turn video off');
        window.stopRecordButton.stopRecord();
    }
    sendResponse('success');
}