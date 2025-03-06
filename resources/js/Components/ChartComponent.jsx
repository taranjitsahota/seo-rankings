import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const ChartComponent = () => {
    const [chartData, setChartData] = useState({
        series: [],
        options: {
            chart: {
                type: "line",
                height: 350,
            },
            xaxis: {
                categories: [],
            },
        },
    });

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/projects/keywords")
            .then((response) => {
                const projects = response.data;

                const seriesData = projects.map((project) => ({
                    name: project.name,
                    data: project.data,
                }));

                setChartData({
                    series: seriesData,
                    options: {
                        chart: { type: "bar" },
                        xaxis: { categories: projects[0]?.data.map((_, index) => `Keyword ${index + 1}`) || [] },

                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: "10%",
                            },
                        },
                    },
                });
                
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="p-4 bg-white rounded shadow">
            <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
    );
};

export default ChartComponent;
