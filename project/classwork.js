// let student = {
//     name: "kartik",
//     age: 25
// };

// let jsonData = JSON.stringify(student);

// console.log(jsonData);
// output:
// {"name","kartik","age";25}


// let numbers = [1, 2, 3, 4, 5];

// for(let value of numbers){
//     console.log(value);
// }


function getdata(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("data received");
        },2000); 
    } );

    
}

async function showData(){
   
    let data=await getdata();
    console.log(data);
}


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data));


        
