// listGenerator.js

class ListGenerator {
  constructor(containerId) {
    this.containerId = containerId;
    this.listContainer = document.getElementById(containerId);
  }

  generateList(items) {
    const ul = document.createElement("ul");

    items.forEach(item => {
      const li = this.createListItem(item);
      ul.appendChild(li);
    });

    this.listContainer.appendChild(ul);
  }

  /*createListItem(item) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.appendChild(document.createTextNode(item.text));
    link.href = item.link;
    link.target = "_blank"; /*добавляем    атрибут target для открытия ссылки в новой вкладке*/
    li.appendChild(link);

    return li;
  }*/
createListItem(item) {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.appendChild(document.createTextNode(item.text));
  link.href = item.link;
  link.addEventListener("click", function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение ссылки
    window.open(item.link, "_blank"); // открываем ссылку в новой вкладке
  });

  li.appendChild(link);

  return li;
}
}

export { ListGenerator };