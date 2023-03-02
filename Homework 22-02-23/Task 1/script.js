function getData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      }, 1000);
    });
  }

  function getData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      }, 2000);
    });
  }

  function getData3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      }, 3000);
    });
  }

async function printOnLoad(){

    let sectionOne = await getData1();
    console.log('Data 1 is loaded!');
    console.log(sectionOne[0]);

    
    let sectionTwo = await getData2();
    console.log('Data 2 is loaded!');
    console.log(sectionOne[1]);

    
    let sectionThree = await getData3();
    console.log('Data 3 is loaded!');
    console.log(sectionOne[2]); 
}

printOnLoad();
