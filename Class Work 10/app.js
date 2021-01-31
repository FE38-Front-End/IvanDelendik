const addTitle = ({ title }) => {
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  document.body.append(titleElement);
};

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then(addTitle);

console.log("12345");
