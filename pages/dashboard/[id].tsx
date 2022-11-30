import Sidebar from "../../components/sidebar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
import Flys from "../../Flys";
import Link from "next/link";

ChartJS.register(...registerables);

export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } },
      { params: { id: '3' } },{ params: { id: '4' } },{ params: { id: '5' } }],
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context: any) {
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
}

export default function Dashbord() {
    const router = useRouter()
    const { id } = router.query;

    const [temperatureChartData, setTemperatureChartData] = useState({
        labels: Flys[parseInt(id as string) - 1].flyData.map((data) => data.time),
        datasets: [
            {
                data: Flys[parseInt(id as string) - 1].flyData.map(data => data.temperature),
                backgroundColor: [
                    'rgba(0, 0, 0)'
                ],
                borderWidth: 1,
            }
        ]
    })

    const [pressureChartData, setPressureChartData] = useState({
        labels: Flys[parseInt(id as string) - 1].flyData.map((data) => data.time),
        datasets: [
            {
                data: Flys[parseInt(id as string) - 1].flyData.map(data => data.pressure),
                backgroundColor: [
                    'rgba(0, 0, 0)'
                ],
                borderWidth: 1,
            }
        ]
    })

    const [heightChartData, setHeightChartData] = useState({
        labels: Flys[parseInt(id as string) - 1].flyData.map((data) => data.time),
        datasets: [
            {
                data: Flys[parseInt(id as string) - 1].flyData.map(data => data.height),
                backgroundColor: [
                    'rgba(0, 0, 0)'
                ],
                borderWidth: 1,
            }
        ]
    })

    const [luminosityChartData, setLuminosityChartData] = useState({
        labels: Flys[parseInt(id as string) - 1].flyData.map((data) => data.time),
        datasets: [
            {
                data: Flys[parseInt(id as string) - 1].flyData.map(data => data.luminosity),
                backgroundColor: [
                    'rgba(0, 0, 0)'
                ],
                borderWidth: 1,
            }
        ]
    })

    const [airQualityChartData, setAirQualityChartData] = useState({
        labels: Flys[parseInt(id as string) - 1].flyData.map((data) => data.time),
        datasets: [
            {
                data: Flys[parseInt(id as string) - 1].flyData.map(data => data.airQuality),
                backgroundColor: [
                    'rgba(0, 0, 0)'
                ],
                borderWidth: 1,
            }
        ]
    })

    return (
        <div className="p-3 h-screen w-screen flex bg-primary-100">
            <Sidebar />
            <div className="px-6 w-full">

                <div className="text-primary-500 font-bold w-full h-20 
                                align-middle text-4xl flex items-center
                                tracking-wide">
                    <h1 className="">Bem vindo ao AtmosXplore!</h1>
                </div>

                <div className="grid grid-rows-2 grid-flow-col gap-4 w-44">
                    <div>
                        <Line className="" data={temperatureChartData}
                            options={{
                                plugins: {
                                    title:{
                                        display: true,
                                        text: "Temperature"
                                    } 
                                }
                            }}
                        />
                    </div>
                    <div>
                        <Line className="" data={pressureChartData}
                            options={{
                                plugins: {
                                    title:{
                                        display: true,
                                        text: "Pressure"
                                    } 
                                }
                            }}
                        />
                    </div>
                    <div>
                        <Line className="" data={heightChartData}
                            options={{
                                plugins: {
                                    title:{
                                        display: true,
                                        text: "Height"
                                    } 
                                }
                            }}
                        />
                    </div>
                    <div>
                        <Line className="" data={luminosityChartData}
                            options={{
                                plugins: {
                                    title:{
                                        display: true,
                                        text: "Luminosity"
                                    } 
                                }
                            }}
                        />
                    </div>
                    <div>
                        <Line className="" data={airQualityChartData}
                            options={{
                                plugins: {
                                    title:{
                                        display: true,
                                        text: "Air Quality"
                                    } 
                                }
                            }}
                        />
                    </div>
                </div>
            <Link href="/dashboard">
                <button>Voltar</button>
            </Link>
            </div>
        </div>
    )
}