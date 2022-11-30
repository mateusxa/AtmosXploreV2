import Sidebar from "../../components/sidebar";
import React from "react";
import Card from "../../components/card";
import Flys from "../../Flys";
import Link from "next/link";

export default function Dashbord() {
    return (
        <div className="p-3 h-screen w-screen flex bg-primary-100">
            <Sidebar />
            <div className="px-6 w-full">

                <div className="text-primary-500 font-bold w-full h-20 
                                align-middle text-4xl flex items-center
                                tracking-wide">
                    <h1 className="">Bem vindo ao AtmosXplore!</h1>
                </div>

                <div className="grid grid-rows-1 grid-flow-col gap-4 max-w-5xl h-48">
                    {Flys.map(
                        (fly, index) => {
                            return(
                                <Link key={index} href={`/dashboard/${index + 1}`} >
                                    <Card key={index} title={String(fly.id)} footer={fly.data}/>
                                </Link>
                                
                            )
                        }
                    )}
                </div>
                <div className="my-6 flex">
                    <div className="w-1/4">
                        <div className="bg-white rounded-2xl p-5 drop-shadow-lg mr-6 h-fit mb-4">
                            <h1 className="text-xl font-bold">Total de Voos</h1>
                            <p className="text-5xl font-bold mt-3">{"0" + String(Flys.length)}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 drop-shadow-lg mr-6 h-fit">
                            <h1 className="text-xl font-bold">Localizacao</h1>
                            <p className="text-4xl font-bold mt-3">Biritiba mirim</p>
                        </div>
                    </div>
                    <div className="brightness-75 bg-[url('../public/sitio.png')] 
                            bg-black/25 rounded-2xl drop-shadow-lg w-3/4 
                            h-72 cursor-pointer ease-in-out duration-300
                            hover:brightness-50"
                    ></div>
                </div>

            </div>
        </div>
    )
}
