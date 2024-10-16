// collection product filter

  window.addEventListener('load', () => {
    
  const filterForm = document.querySelector('.collection-filter-form'); // Adjust the selector as needed
  const productGridContainer = document.querySelector('#collectionContainer');

  filterForm.addEventListener('change', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const queryString = new URLSearchParams(new FormData(filterForm)).toString();
    
    fetch('/collections/{{ collection.handle }}?' + queryString)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const htmlDiv = document.createElement('div');
        htmlDiv.innerHTML = data;

        // change the html data
        let htmlDom = htmlDiv.querySelector('#collectionContainer').innerHTML;
        document.querySelector('#collectionContainer').innerHTML = htmlDom;

        // Update URL without refreshing the page
        history.replaceState(null, null, '?' + queryString);
      })
      .catch(error => console.error('Error:', error));
  });
});
