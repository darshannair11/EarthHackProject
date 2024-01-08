import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { useCountUp } from 'use-count-up';
import { useIntersection } from "../Utils/visibility";
import "./styles.css";

export const CardTemplate = ({title,score,rationale}) => {
    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 1,
        start: 0,
        end: (score/5)*100,
      });

    const triggerRef = React.useRef(null);
    const isVisible = useIntersection(triggerRef, "0px");

    React.useEffect(() => {
        if (isVisible) {
          reset(); // Trigger a function when the div is visible on view port
        }
      }, [reset, isVisible]);
    
    return <div className="card-container">
        <p className="card-container-title">{title}</p>
        <div ref={triggerRef} className="circle-progress-container"><CircularProgress size="lg" determinate value={value2}>
          <Typography>{value2}%</Typography>
        </CircularProgress></div>
        <p className="card-container-text">{rationale}</p>
    </div>
}

export const MarketCardTemplate = ({title,level,rationale}) => {

    
    
    return <div className="card-container">
        <p className="card-container-title">{title}</p>
        {level && <p className="level-container">{level}</p>}
        <p className="card-container-text">{rationale}</p>
    </div>
}

