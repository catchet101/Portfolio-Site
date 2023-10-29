import React from "react";

const ProficiencyBar = (props: { bgcolor: string; percentage: number; }) => {
    const { bgcolor, percentage } = props;
    
    return (
        <div className="h-4 w-full bg-slate-500 rounded-lg">
            <div className="h-full" style={{ width: `${percentage}%`, backgroundColor: bgcolor, borderRadius: 'inherit'}}>
                <span> </span>
            </div>
        </div>
    );
};

export default ProficiencyBar;