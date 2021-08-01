console.log("ll");
// const url = "hello.txt";
// console.log(url);
fetch('https://swapi.dev/api/people/1/')
  .then((response) => {
      console.log(response);
    //   console.log(response.json());
    return response.json();
  })
  .then((data) => {
    console.log(data.name); 
  });
