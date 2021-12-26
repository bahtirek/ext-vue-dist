
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
        document.body.insertAdjacentHTML('beforeend', `<div id="ui-br-ext-extension-container"></div>`);
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
        window.reportBugComponent.getScreenshot();
        // turn on report bug
    }
    
    return true;
}