// it tested by me
function updateXDrawer() {
      // you've to use sections rendering api = "/sections=demo-section-one,demo-section-two" for getting data like .text() => JSON.parse(_) => obj['_']
      fetch("/?sections=x-cart")
            .then(res => res.text())
            .then(result => {
              const html = document.createElement("div");

              // Parse the JSON response to get the actual HTML string
              let json =  JSON.parse(result)
              // extranting original HTML from the json-html-string
              let finalHTML = json['x-cart']
              
              html.innerHTML = finalHTML;
              
              const newBox = html.querySelector("#x-cart-section").innerHTML;
            
              document.querySelector("#x-cart-section").innerHTML = newBox;
            })
            .catch(err => err)
}
