const ways = [
  {
    title: "Tram, then a short walk",
    time: "32 min",
    reason: "Misses the jams and stays dry.",
    leave: "Leave by 7:28",
    recommended: true,
  },
  {
    title: "Bus",
    time: "36 min",
    reason: "Same idea, a bit slower.",
  },
  {
    title: "Tram, then a bus",
    time: "44 min",
    reason: "If the direct tram is packed.",
  },
  {
    title: "Bolt",
    time: "40 min",
    reason: "Faster once it moves, plus the wait. Costs more.",
  },
  {
    title: "Uber",
    time: "40 min",
    reason: "Same shape as Bolt.",
  },
  {
    title: "Taxi",
    time: "40 min",
    reason: "Hailed or called. Same kind of wait.",
  },
  {
    title: "City bike",
    time: "16 min",
    reason: "Fast, but it is raining.",
  },
  {
    title: "On foot",
    time: "50 min",
    reason: "Raining the whole way.",
  },
];

const list = document.getElementById("list");

for (const way of ways) {
  const card = document.createElement("article");
  card.className = "card";

  if (way.recommended) {
    const badge = document.createElement("p");
    badge.className = "badge";
    badge.textContent = "Recommended";
    card.append(badge);
  }

  const main = document.createElement("div");
  main.className = "card-main";

  const title = document.createElement("h2");
  title.textContent = way.title;

  const time = document.createElement("p");
  time.className = "time";
  time.textContent = way.time;

  main.append(title, time);

  const reason = document.createElement("p");
  reason.className = "reason";
  reason.textContent = way.reason;

  card.append(main, reason);

  if (way.leave) {
    const leave = document.createElement("p");
    leave.className = "leave";
    leave.textContent = way.leave;
    card.append(leave);
  }

  list.append(card);
}
