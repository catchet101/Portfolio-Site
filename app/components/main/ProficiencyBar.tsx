import React from 'react';

const ProficiencyBar = (props: { barColor: string; percentage: number; }) => {
    const { barColor, percentage } = props;
    
    return (
        <div className='h-4 w-full bg-slate-500 rounded-lg'>
            <div className='h-full' style={{ width: `${percentage}%`, backgroundColor: barColor, borderRadius: 'inherit'}}>
            </div>
        </div>
    );
};

export default ProficiencyBar