let currentChart = null;

function renderOrUpdateChart(chartData) {
    const ctx = document.getElementById('regionChart').getContext('2d');

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 12, font: { size: 10 } }
                }
            }
        }
    });
}