export function getEvents() {
  try {
    return fetch("/api").then((data) => data.json());
  } catch (e) {
    alert(e);
  }
}

export function addEvent(event) {
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(event),
  };
  fetch("http:localhost:3000/api", reqOptions)
    .then((response) => response.json())
    // .then((data) => this.setState({ postId: data.id }));
}
