const modelApiData = (data) => {
  return data.map((d) => ({
    id: `e${d.id}`,
    title: d["title"],
    description: d["description"],
    location: d["location"],
    date: d["date"],
    image: d["image"],
    isFeatured: d["isFeatured"],
  }));
};
export const getAllEvents = async () => {
  const response = await fetch("http://localhost:8080/api/events");
  const data = await response.json();
  const modeledEvents = modelApiData(data.events);
  // console.log("the model: ", modeledEvents);

  return modeledEvents;
};
export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured == 1);
};

export const getEventById = async (id) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
