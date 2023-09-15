const res = fetch("https://jsonplaceholder.typicode.com/users");
res
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
      console.log(data1[i]);
      const div = document.createElement("div")
      div.innerHTML=` <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
    
      <div class="card-body">
         
        <p class="card-text"><b>Name:${data1[i].name}</b> </p>
        <p class="card-text"><b>Email:${data1[i].email}</b></p>
        <p class="card-text"><b>Street:${data1[i].street}</b></p>
        <p class="card-text"><b>City:${data1[i].city}</b></p>
      </div>
    </div>`
    document.body.append(div);
      
    }
  });
