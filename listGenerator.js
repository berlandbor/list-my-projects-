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

  createListItem(item) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.appendChild(document.createTextNode(item.text));
    link.href = item.link;

    li.appendChild(link);

    return li;
  }
}

export { ListGenerator };