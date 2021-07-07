const getData = document.getElementById('getData');

/*const fetchData = () => {
    fetch('https://randomuser.me/api/')
    .then(res =>{
        if(res.status === 200){
            console.log("success")}
        console.log(res);
    })
    .catch(e => console.log(e))
}*/

const fetchData = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))
}

getData.addEventListener('click', fetchData);