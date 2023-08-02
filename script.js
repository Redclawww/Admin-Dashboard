const ctx = document.getElementById('bar-graph').getContext('2d');

const data = {
  labels: ["20","","25","","30","","35","","40","","60","","65"],
  datasets: [
    {
      label: 'Employer',
      backgroundColor: "#0800a3",
      data: [20,30,40,50,60,70,80,90,100,110,120,130,140],
    },
    {
      label: 'Employee',
      backgroundColor: "#4935ff",
      data: [30,40,50,60,70,80,90,100,110,120,130,140,150],
    },
    {
      label: 'Total Interest',
      backgroundColor: "#82acfa",
      data: [40,50,60,70,80,90,100,110,120,130,140,150,160],
    }
  ]
};

const options = {
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    },
},responsive:true,
barThickness: 15,
maintainAspectRatio:true,
};

const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});


const tl = gsap.timeline();

tl.from('nav',{
  y:-500,
  duration:.5
})


tl.from(".feed , .analytics , .last",{
  y:500,
  opacity:0,
  duration: .3,
  stagger:.5
})


