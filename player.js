const buttonWarning = () => {
    const inputValue = document.getElementById('search-input').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => playerDisplay(data.player))


}
const playerDisplay = players => {
    for (const player of players) {
        console.log(player);


        const main = document.getElementById('players-div')
        const div = document.createElement('div')

        div.innerHTML = `  <div class="card" style="width: 18rem;">
        <img class="card-img-top w-50" src="${player.strThumb}"  alt="...">
        <div class="card-body">
        <h3>name:${player.strPlayer}</h3>
        <h>country:${player.strNationality}</h4>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" onclick="details('${player.idPlayer}')" class="btn btn-primary">Details</a>
        </div>
      </div>
 
 `;
        main.appendChild(div)


    }

}

const details = (info) => {
    console.log(info);
}