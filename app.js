unread = document.querySelectorAll(".item--unread");

document.querySelector(".panel__clear").addEventListener("click", readAllItems);
for (i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", readItemIfNonanchorClicked);
}

function readItem(item) {
  item.classList.remove("item--unread");
  item.removeEventListener("click", readItemIfNonanchorClicked);
}

function readItemIfNonanchorClicked(event) {
  if (
    !(event.target instanceof HTMLAnchorElement) &&
    !(event.target.parentNode instanceof HTMLAnchorElement)
  ) {
    readItem(this);
  }
}

function readAllItems() {
  for (i = 0; i < unread.length; i++) {
    readItem(unread[i]);
  }
}
