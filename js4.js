/*fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // ba3ed ma t5ales fetch jebli bas json data
      .then(json => {
        let users=document.getElementById('select');
        json.forEach(element => {
            let user=document.createElement('option');
            user.innerHTML=element.name;
            users.appendChild(user);

          
            
        });
      })*/

       fetch('https://restcountries.com/v3.1/all')
       .then(response => response.json()) // ba3ed ma t5ales fetch jebli bas json data
       .then(json => {
         let countries=document.getElementById('countries');
         json.forEach(element => {
             let country=document.createElement('div');
             country.innerHTML=element.name.common;
             let flag=document.createElement('img');
             flag.src=element.flags.png;
             flag.style="width:200px;height:100px";
             country.appendChild(flag);
             countries.appendChild(country);
             flag.addEventListener('click',()=>{
                 let population=document.createElement('div');
                 population.innerHTML=`Population: ${element.population}`;
                country.appendChild(population); })


         });
      })
   /* fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json()) // Fetch and parse the JSON data
    .then(json => {
        let countries = document.getElementById('countries');
        json.forEach(element => {
            let country = document.createElement('div');
            country.innerHTML = element.name.common;
            
            let flag = document.createElement('img');
            flag.src = element.flags.png;
            country.appendChild(flag);
            
            countries.appendChild(country);
            
            // Add click event listener to the flag
            flag.addEventListener('click', () => {
                let population = document.createElement('div');
                population.innerHTML = `Population: ${element.population}`;
                country.appendChild(population); // Append to the specific country div
            });
        });
    })
        */
    


     
   
      

