const addEvent = async (event) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  };
  fetch("/events/add", requestOptions)
    .then((response) => response.json())
    .then((data) => this.setState({ postId: data.id }));
};

const searchEvents = async (options) => {
  //Need a router that searches for an event by name
}

export default {
  addEvent,
  searchEvents
}