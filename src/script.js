const containerEl = document.querySelector(".container");
const wrapperEl = document.querySelector(".wrapper");


const habit1 = {
        name: "Exercise",
        days: [false, false, false, false, false, false,false]
};

const habit2 = {
        name: "Drink Water",
        days: [false, false, false, false, false, false,false]
};

const habit3 = {
        name: "Meditation",
        days: [false, false, false, false, false, false, false]
};

const habit4 = {
        name: "Morning pages",
        days: [false, false, false, false, false, false, false]
};

const habits = [habit1, habit2, habit3, habit4];


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






