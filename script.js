const departures = [
  {
    id: 1,
    destination: "Newcastle",
    departure_time: "09:00"
  },
  {
    id: 2,
    destination: "Gateshead",
    departure_time: "09:30"
  },
  {
    id: 3,
    destination: "Sunderland",
    departure_time: "10:00"
  }
];

const renderDepartures = () => {
  const ul = document.querySelector("ul");
  departures.forEach((departure) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const button = document.createElement("button");

    a.href = `https://www.nexus.org.uk/metro/timetables-and-stations/south-shields/timetable?departure=${departure.id}`;
    a.textContent = departure.destination;

    button.textContent = "GET REFUND";

    li.appendChild(a);
    li.appendChild(button);

    ul.appendChild(li);
  });
};

window.onload = renderDepartures;

// This code adds the ability to filter the departures by destination
const filterDepartures = (destination) => {
  const filteredDepartures = departures.filter((departure) => {
    return departure.destination === destination;
  });

  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  filteredDepartures.forEach((departure) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `https://www.nexus.org.uk/metro/timetables-and-stations/south-shields/timetable?departure=${departure.id}`;
    a.textContent = departure.destination;

    li.appendChild(a);

    ul.appendChild(li);
  });
};

const destinationInput = document.querySelector("#destinationInput");
destinationInput.addEventListener("input", (event) => {
  const destination = event.target.value;
  filterDepartures(destination);
});

const destinationInput = document.querySelector("input");
destinationInput.addEventListener("input", (event) => {
  const destination = event.target.value;
  filterDepartures(destination);
});
