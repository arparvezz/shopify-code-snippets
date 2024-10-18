// pagination with js 
fetch('https://demostore.myshopify.com/collections/all?page=2')
.then(data => data.text())
.then(rawData => {
    let parser = new DOMParser()
    let resp = parser.parseFromString(rawData, 'text/html')
    let targetData = resp.querySelector('.collection-page-grid').innerHTML;
    document.querySelector('.collection-page-grid').innerHTML = targetData;
    // changing the url
    window.history.replaceState(null,null,'?page=2')
})
