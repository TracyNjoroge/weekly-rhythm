const containerEl = document.querySelector(".container");

const habits = [
    {
        name: "Exercise",
        days: [false, false, false, false, false, false,false]
    },

    {
        name: "Drink Water",
        days: [false, false, false, false, false, false,false]
    },

    {
        name: "Meditation",
        days: [false, false, false, false, false, false, false]
    },

    {
        name: "Morning pages",
        days: [false, false, false, false, false, false, false]
    }
]


habits.forEach(habit => {
    const wrapperEl = document.createElement("div");
    const nameEl = document.createElement("p");

    wrapperEl.appendChild(nameEl);
    containerEl.appendChild(wrapperEl);

    nameEl.textContent = habit.name;

    const days = habit.days;
    // console.log(days)

    days.forEach((day, index) => {
        const dayCheckboxEl = document.createElement("input");
        dayCheckboxEl.type = "checkbox";
        dayCheckboxEl.dataset.dayIndex = index;

        wrapperEl.appendChild(dayCheckboxEl);

        dayCheckboxEl.addEventListener("change", function(e){
            let dayIndex = e.target.dataset.dayIndex;
            days[dayIndex] = !days[dayIndex];

            console.log(days)

        })
    })


})






