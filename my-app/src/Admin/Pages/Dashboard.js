import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height
    plugins: {
      legend: {
        position: "top", // Customize legend position
      },
    },
  };
  
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointRadius: 4,
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Mens", "Womens", "LatestCollections", "KIds", "Executive offiers"],
    datasets: [
      {
        label: "Revenue by Category ($)",
        data: [15000, 10000, 8000, 12000, 5000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Processed Orders", "Pending Orders", "Cancelled Orders"],
    datasets: [
      {
        label: "Order Distribution",
        data: [70, 20, 10],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel. Manage your e-commerce platform here.</p>
      </header>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h2>1200</h2>
          <p>Products</p>
        </div>
        <div className="stat-card">
          <h2>$50,000</h2>
          <p>Revenue</p>
        </div>
        <div className="stat-card">
          <h2>800</h2>
          <p>Orders</p>
        </div>
      </section>

      <section className="dashboard-charts">
        <div className="chart">
          <h2>Monthly Sales Overview</h2>
          <Line data={lineData} options={options} />
        </div>

        <div className="chart">
          <h2>Revenue by Category</h2>
          <Bar data={barData} options={options} />
        </div>

        <div className="chart">
  <h3>Order Distribution</h3>
  <div style={{ height: "680px" }}> {/* Adjust height here */}
    <Pie data={pieData} options={pieOptions} />
  </div>
</div>


      </section>
    </div>
  );
};

export default Dashboard;
