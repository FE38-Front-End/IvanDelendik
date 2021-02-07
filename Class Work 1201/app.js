const addTitle = ({ title }) => {
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  document.body.append(titleElement);
};

const showNotes = (notes) => {
  addTitle({ title: "Список заметок" });
  const notesContainer = document.createElement("ul");
  const noteElements = notes.map((note) => {
    const noteElement = document.createElement("li");
    noteElement.textContent = note.title;
    return noteElement;
  });
  notesContainer.append(...noteElements);
  document.body.append(notesContainer);
};

const showError = ({ message }) => {
  const errorElement = document.createElement("h1");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  document.body.append(errorElement);
};

(async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.status >= 400 && response.status < 600) {
      throw Error("Error");
    }
    const res = await response.json();
    showNotes(res);
  } catch (error) {
    showError(error);
  }
})();
