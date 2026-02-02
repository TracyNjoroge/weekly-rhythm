const habitName = document.querySelector(".habit-name");
const containerEl = document.querySelector(".checkbox-container");

const habit = {
        name: "Exercise",
        days: [false, false, false, false, false, false,false]
};


habitName.textContent = habit.name;

const days = habit.days;
console.log(days);

days.forEach((day, index) => {
    const dayEl = document.createElement("input");
    dayEl.type = "checkbox";
    dayEl.dataset.dayIndex = index;

    containerEl.appendChild(dayEl);

    dayEl.addEventListener("change", function(e) {
        let dayIndex = e.target.dataset.dayIndex;
        days[dayIndex] = !days[dayIndex];

    console.log(days)

    })

});






