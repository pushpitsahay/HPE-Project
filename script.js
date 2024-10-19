// script.js
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("viewsChart").getContext("2d");
  
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: "Views",
          data: [50, 34, 18, 14, 8, 70, 100],
          backgroundColor: "#87CEEB",
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  });

 
        $(document).ready(function () {  
            $('.dropdown-toggle').dropdown();  
        });  

  