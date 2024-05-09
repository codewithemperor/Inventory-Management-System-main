const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart2');
const ctx2 = document.getElementById('myChart3');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 10, 17, 9, 12],
          borderWidth: 1
        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: '',
          data: [12, 19, 10, 17, 9, 12, 1, 11, 14, 22, 12, 18],
          backgroundColor: '#bb2d3b'
        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sale',
          data: [12, 19, 10, 17, 9, 12, 1, 11, 14, 22, 12, 18],
          // backgroundColor: '#bb2d3b'
        }, {
          label: 'Product',
          data: [12, 19, 10, 17, 9, 12, 1, 11, 14, 22, 12, 18],
          // backgroundColor: '#bb2d3b'
        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });