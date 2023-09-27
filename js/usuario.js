
const graf = document.getElementById('chart');
const graf2 = document.getElementById('chart2');
const data1 = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun', 'Jul', 'Ago'],
        datasets: [
            {
                label: 'Mobile',
                data: [10, 3, 7, 8, 5, 9, 11, 2],
                backgroundColor:'#ff0062b6',
                borderWidth: 1
            },
            {
                label: 'Web',
                data: [3, 7, 5, 4, 6, 7, 9, 7],
                backgroundColor: '#1B9C85b6',
                borderWidth: 1
            },
            {
                label: 'UI UX',
                data: [7, 5, 6, 7, 10, 8, 5, 8],
                backgroundColor: '#6C9BCFb6',
                borderWidth: 1
            }
        ]
}

const data2 = {
    labels: [
        'Mobile',
        'Web',
        'UI UX'
    ],
      datasets: [{
        label: 'My First Dataset',
        data: [6, 5, 10],
        backgroundColor: [
          '#ff0062b6',
          '#1B9C85b6',
          '#6C9BCFb6'
        ],
        hoverOffset: 4
    }]
}

new Chart(graf, {
    type: 'bar',
    data: data1,
    options: {
        Responsive: true,
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
})

new Chart(graf2, {
    type: 'pie',
    data: data2,
    options: {
        maintainAspectRatio: false,
        Responsive: true,
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
})