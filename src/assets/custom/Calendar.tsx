import { TProps } from "./type";

function CalendarIcon(props: TProps) {
    const { isActive, className } = props;
    return (
        <div className={className}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={isActive ? "white" : "#434B74"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" stroke={isActive ? "white" : "#434B74"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="2" x2="8" y2="6" stroke={isActive ? "white" : "#434B74"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="10" x2="21" y2="10" stroke={isActive ? "white" : "#434B74"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="14" width="3" height="3" fill={isActive ? "white" : "#434B74"} />
                <rect x="14" y="14" width="3" height="3" fill={isActive ? "white" : "#434B74"} />
            </svg>
        </div>
    );
}

export default CalendarIcon;
