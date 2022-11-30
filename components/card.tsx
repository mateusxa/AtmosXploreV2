import React from "react"
import Image from "next/image"
import Drone from "../public/drone.svg"

export default function Card({title, footer}: {title: string, footer: string}) {
    return (
        <div className="bg-white rounded-2xl p-4 drop-shadow-lg h-fit cursor-pointer
                        hover:scale-105 ease-in-out duration-300">
            <Image src={Drone} alt="Teste" className="w-13"/>
            <div className="pt-3 text-4xl font-bold text-primary-500">
                {title}
            </div>
            <div className="text-sm text-gray-400">
                {footer}
            </div>
        </div>
    )
}
