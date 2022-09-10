const xValues = ["امروز", "دیروز", "۳ روز قبل", "۴ روز قبل", "۵ روز قبل", "۶ روز قبل", "۷ روز قبل"];
const yValues = [97, 97, 97, 97, 97, 97, 97, 0];
const barColors = ["#2ECC71", "#2ECC71", "#2ECC71", "#2ECC71", "#2ECC71", "#2ECC71", "#2ECC71", "#2ECC71"];

new Chart("myChartjs", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true
        },
        scales: {
            xAxes: [{
                barPercentage: 0.5
            }]
        }
    }
});