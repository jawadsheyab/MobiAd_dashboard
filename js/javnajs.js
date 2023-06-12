/*global document, window*/

// ============================================ myOverviewChart =========================================

var ctx = document.getElementById('myOverChart').getContext('2d');

var myValues = [25, 10, 5, 2, 20, 30, 40, 11, 10, 5, 2, 20, 30, 40, 13]; // Values Of Small Circles, Array Of Values, Must Be Dynamic Depends The Data Comes From Where.

var chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["04Jan", "05Jan", "06Jan", "07Jan", "08Jan", "09Jan", "10Jan", "11Jan", "12Jan", "13Jan", "14Jan", "15Jan", "16Jan", "17Jan", "18Jan"], // Values Of X-axis, Must Be Dynamic Depends The Data Comes From Where.
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: '#622e90',
            data: myValues,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 5,
            pointBorderWidth: 2
        }]
    },

     options:
    {
       legend: {
        display: false
    },
        scales:
        {
            yAxes: [{
                display: false,
                ticks: {
                beginAtZero: true,
                max: 50
                 }
            }],     
        }
    }
});



// =============================================== myViewChart ================================================

var ctx1 = document.getElementById('myViewChart').getContext('2d');

var myValues1 = [25, 10, 5, 2, 20, 30, 40, 11, 10, 5, 2, 20, 30, 40, 13]; // Values Of Small Circles, Array Of Values, Must Be Dynamic Depends The Data Comes From Where.
var secondValues = [4, null, null, null, null, 25, null, null, 13, null, null, null, null, null, null, 22];

var chart1 = new Chart(ctx1, {
    type: 'line',

    data: {
        labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        datasets: [{
          label: "value ",
            backgroundColor: 'transparent',
            borderColor: '#f7941c',
            data: myValues1,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 1,
            pointBorderWidth: 10
        },
                  {
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: '#91919d',
            data: secondValues,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 0,
            pointBorderWidth: 2,
            spanGaps: true
            
        }]
    },

     options:
    {
      tooltips: {
        backgroundColor: '#8D8D8D',
        bodyFontColor: '#efefef',
        displayColors: false,
        cornerRadius: 7,
        yPadding: 10,
        xPadding: 10
      },
       legend: {
        display: false
    },
        scales:
        {
            yAxes: [{
                display: false,
                ticks: {
                beginAtZero: true,
                max: 50
                 }
            }], 
          xAxes: [{
                 gridLines: {
                    display:false
                }
            }],    
        }
    }
});



// =============================================== myClicksChart ================================================

var ctx2 = document.getElementById('myClicksChart').getContext('2d');

var myValues2 = [15, 5, 10, 20, 16, 20, 40, 11, 10, 5, 2, 20, 30, 40, 13]; // Values Of Small Circles, Array Of Values, Must Be Dynamic Depends The Data Comes From Where.
var secondValues1 = [4, null,null,null,null,30,null,null,15,null,null,null,null,null,null,10];

var chart2 = new Chart(ctx2, {
    type: 'line',

    data: {
        labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu",],
        datasets: [{
          label:"value ",
            backgroundColor: 'transparent',
            borderColor: '#c56897',
            data: myValues2,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 1,
            pointBorderWidth: 10
        },
                  {
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: '#91919d',
            data: secondValues1,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 0,
            pointBorderWidth: 2,
            spanGaps: true
            
        }]
    },

     options:
    {
      tooltips:{
        backgroundColor: '#8D8D8D',
        bodyFontColor: '#efefef',
        displayColors: false,
        cornerRadius: 7,
        yPadding:10,
        xPadding:10
      },
       legend: {
        display: false
    },
        scales:
        {
            yAxes: [{
                display: false,
                ticks: {
                beginAtZero: true,
                max: 50
                 }
            }], 
          xAxes: [{
                 gridLines: {
                    display:false
                }
            }],    
        }
    }
});



// =============================================== mySharesChart ================================================

var ctx3 = document.getElementById('mySharesChart').getContext('2d');

var myValues3 = [15, 5, 10, 20, 16, 20, 40, 11, 10, 5, 2, 20, 30, 40, 13]; // Values Of Small Circles, Array Of Values, Must Be Dynamic Depends The Data Comes From Where.
var secondValues2 = [0, null,null,null,null,0,null,null,0,null,null,null,null,null,null,0];

var chart3 = new Chart(ctx3, {
    type: 'line',

    data: {
        labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu",],
        datasets: [{
          label:"value ",
            backgroundColor: 'transparent',
            borderColor: '#0b7ec1',
            data: myValues3,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 1,
            pointBorderWidth: 10
        },
                  {
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: '#91919d',
            data: secondValues2,
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 0,
            pointBorderWidth: 2,
            spanGaps: true
            
        }]
    },

     options:
    {
      tooltips:{
        backgroundColor: '#8D8D8D',
        bodyFontColor: '#efefef',
        displayColors: false,
        cornerRadius: 7,
        yPadding:10,
        xPadding:10
      },
       legend: {
        display: false
    },
        scales:
        {
            yAxes: [{
                display: false,
                ticks: {
                beginAtZero: true,
                max: 50
                 }
            }], 
          xAxes: [{
                 gridLines: {
                    display:false
                }
            }],    
        }
    }
});


// =============================================== Progress Bar ================================================

var canvas  = document.getElementById('canvas'); 
var ctx4    = canvas.getContext('2d'); 
var color   = '#2af';
var width   = canvas.width ;
canvas.height  = width + 50; 	
var height = canvas.height;
var amount = 963.720;
var percent = (amount/10000)*100;
var counter = 0;
var status = "AMOUNT SPENT"

function baseCir(){
ctx4.beginPath();
ctx4.lineWidth = width/14;
ctx4.strokeStyle ="#e2e2e2";
ctx4.arc(width/2 ,width/2, width/3, 0, Math.PI*2);
ctx4.stroke();
ctx4.closePath();
}

 window.setTimeout(function draw(){
	
	var angle = Math.PI*1.5  + Math.PI *2* counter /100;
	ctx4.clearRect(0,0,width,height);
	baseCir();
	ctx4.beginPath();
	ctx4.lineWidth = width/14;
	ctx4.arc(width/2 ,width/2 ,width/3,1.5*Math.PI ,angle);
	ctx4.strokeStyle = color;
	ctx4.stroke();
	ctx4.closePath();
     
     
	ctx4.fillStyle = color;
	ctx4.font = "18px Arial";
	ctx4.textAlign = 'center';
    ctx4.textBaseline = 'middle';
    ctx4.fillStyle = "#000";
    ctx4.fillText(amount + "$", width / 2, width / 2);
    ctx4.fillStyle = "#999";
    ctx4.fillText(status ,width/2, height/2 +5);
	counter++;
     
	if (counter <= percent) {
    window.setTimeout(draw ,20);
  }
},20);