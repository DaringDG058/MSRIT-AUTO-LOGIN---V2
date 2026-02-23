chrome.storage.local.get(['usn', 'day', 'month', 'year'], (data) => {
    if (data.usn) {
        document.getElementById('usn').value = data.usn;
        document.getElementById('day').value = data.day;
        document.getElementById('month').value = data.month;
        document.getElementById('year').value = data.year;
    }
});

document.getElementById('save').addEventListener('click', () => {
    const details = {
        usn: document.getElementById('usn').value,
        day: document.getElementById('day').value,
        month: document.getElementById('month').value,
        year: document.getElementById('year').value
    };

    chrome.storage.local.set(details, () => {
        alert('Details saved! Refreshing the page...');
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.reload(tabs[0].id);
        });
    });
});