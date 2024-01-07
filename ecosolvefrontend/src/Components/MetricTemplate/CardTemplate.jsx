import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { useCountUp } from 'use-count-up';
import { useIntersection } from "../Utils/visibility";
import "./styles.css";

const CardTemplate = () => {
    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 1,
        start: 0,
        end: 75,
      });

    const triggerRef = React.useRef(null);
    const isVisible = useIntersection(triggerRef, "0px");

    React.useEffect(() => {
        if (isVisible) {
          reset(); // Trigger a function when the div is visible on view port
        }
      }, [reset, isVisible]);
    
    return <div className="card-container">
        <p className="card-container-title">Success Probability</p>
        <div ref={triggerRef} className="circle-progress-container"><CircularProgress size="lg" determinate value={value2}>
          <Typography>{value2}%</Typography>
        </CircularProgress></div>
        <p className="card-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
}

export default CardTemplate;