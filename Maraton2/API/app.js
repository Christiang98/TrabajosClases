// 3) Vamos a crear una app para que cada vez que aprete un botón, me muestre un usuario aleatorio utilizando la siguiente API: https://randomuser.me/api
// Mostrar 3 o 4 datos del usuario.
let makeRequest = ()=>{
 fetch(`https://randomuser.me/api/`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      })
    }