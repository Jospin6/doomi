import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les éléments nécessaires
Chart.register(...registerables);

const ServicesChart: React.FC = () => {
    const data = {
        labels: ['Photographie', 'Service traiteur', 'Maître de cérémonies'],
        datasets: [
            {
                label: 'Services les plus demandés',
                data: [10, 15, 5],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            },
        ],
    };

    return <Pie data={data} />;
};

export default ServicesChart;