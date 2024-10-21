import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les éléments nécessaires
Chart.register(...registerables);

const SalesChart: React.FC = () => {
    const data = {
        labels: ['Tomates', 'Téléphones', 'Jus', 'Pains'],
        datasets: [
            {
                label: 'Produits les plus vendus',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return <Bar data={data} />;
};

export default SalesChart;