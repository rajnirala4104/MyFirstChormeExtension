chrome.tabs.onUpdated.addListener((tabId, tab)=>{
    if(tab.url && tab.url.includes("geeksforgeeks.org/*")){
        const articaleTitle = document.querySelector('.gfg_home_page_search_heading')   
        articaleTitle.innerHTML = `<h1>This is Raj Nirala</h1>`;
    }
})