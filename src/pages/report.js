import React from 'react'
import 'chart.js/auto';
import { Pie,Bar } from 'react-chartjs-2';
import { ReportCanvas } from '../styled/report.styled';
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const Report = () => {
  return (
    <ReportCanvas>
      <Bar
        data={{
          labels: ['Zemen', 'Habesha', 'Sheger', 'Anbesa', 'Golden', 'Yegna'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
              barThickness:20,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            // xAxes: [{ticks: {min: 40, max:160}}],
            // yAxes: [{ticks: {min: 6, max:16}}],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </ReportCanvas>
  )
}

export default Report