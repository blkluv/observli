import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

export function Snapshot({ analytics }) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={analytics}>
                <Bar
                    dataKey="value"
                    fill="#84bed2"
                    stroke="#6495af"
                    radius={[6, 6, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
