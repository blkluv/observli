import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
    {
        label: "Jan",
        total: Math.floor(Math.random() * 5) + 1,
    },
    {
        label: "Feb",
        total: Math.floor(Math.random() * 5) + 1,
    },
    {
        label: "Mar",
        total: Math.floor(Math.random() * 5) + 1,
    },
    {
        label: "Apr",
        total: Math.floor(Math.random() * 5) + 1,
    },
    {
        label: "May",
        total: Math.floor(Math.random() * 5) + 1,
    },
    {
        label: "Jun",
        total: Math.floor(Math.random() * 5) + 3,
    },
    {
        label: "Jul",
        total: Math.floor(Math.random() * 5) + 1,
    },
];

export function Snapshot({ analytics }) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <Bar
                    dataKey="total"
                    fill="#84bed2"
                    stroke="#6495af"
                    radius={[6, 6, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
