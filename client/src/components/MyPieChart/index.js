import React from 'react';
import { Cell, PieChart, Pie, ResponsiveContainer } from 'recharts';

const MyPieChart = props => {
	const RADIAN = Math.PI / 180;                    
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x  = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy  + radius * Math.sin(-midAngle * RADIAN);

		return (
				<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
					<tspan x={x} dy='1em'>{props.data[index].name}</tspan>
					<tspan x={x} dy='1em'>{`${(percent * 100).toFixed(0)}%`}</tspan>
				</text>
		);
	};

	const colors = [
		'#43ad8b',
		'#72C8AD',
		'#FFB6C2',
		'#FFCCD4'
	];

	return (
		<div style={{height: '500px'}}>
			<div>{ props.name }</div>
			<ResponsiveContainer>
				<PieChart>
					<Pie 
						data={ props.data } 
						fill="#8884d8"
						label={renderCustomizedLabel}
						labelLine={false}
						>
						{
							props.data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)
						}
					</Pie>

				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default MyPieChart;
