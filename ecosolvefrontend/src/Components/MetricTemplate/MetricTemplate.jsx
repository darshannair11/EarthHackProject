import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import "./styles.css";
import {CardTemplate,MarketCardTemplate} from "./CardTemplate";
import { Card } from "@mui/material";
import LinearProgress from '@mui/joy/LinearProgress';

const Loader = (() => {
    return <div className="loader-body"><div class="scene">
    <div class="shadow"></div>
    <div class="jumper">
      <div class="spinner">
        <div class="scaler">
          <div class="loader">
            <div class="cuboid">
              <div class="cuboid__side"></div>
              <div class="cuboid__side"></div>
              <div class="cuboid__side"></div>
              <div class="cuboid__side"></div>
              <div class="cuboid__side"></div>
              <div class="cuboid__side"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
    
})

const ContentIdeaAnalysis=({content}) => {
    console.log(content);
    return <div className="metric-content">
    <p className="metric-content-summary">Idea Summary And Review</p>
    <p className="metric-content-summary-text">
        Problem Summary - {content.problemSummary} <br /><br />
        Solution Summary - {content.solutionSummary} <br /><br />
    </p>
        {content.keyPoints.map((points) => {
            return <><p className="metric-content-summary-text">- {points} </p> <br /></>; 
        })}
    <p className="metric-content-summary">Technical Breakdown</p>
    <div className="breakdown-table">
        {Object.keys(content.ratings).map((title,idx) => {
            return <CardTemplate key={idx} title={title} score={content.ratings[title].score} rationale={content.ratings[title].rationale}/>
        })}
    </div>
    </div> 
}

const ContentEnvironmentAnalysis=({content}) => {
    console.log(content);
    return <div className="metric-content">
    <p className="metric-content-summary">Solution Type : {content.SolutionName}</p>
    <p className="metric-content-summary">Technical Breakdown</p>
    <div className="breakdown-table">
        {Object.keys(content.Ratings).map((title,idx) => {
            return <CardTemplate key={idx} title={title} score={content.Ratings[title].Score} rationale={content.Ratings[title].Explanation}/>
        })}
    </div>
    </div> 
}

const ContentVentureCapital=({content}) => {
    console.log(content);
    return <div className="metric-content">
    <p className="metric-content-summary">Solution Type : {content.SolutionName}</p>
    <p className="metric-content-summary">Technical Breakdown</p>
    <div className="breakdown-table">
        {Object.keys(content.Ratings).map((title,idx) => {
            return <CardTemplate key={idx} title={title} score={content.Ratings[title].Score} rationale={content.Ratings[title].Explanation}/>
        })}
    </div>
    </div> 
}

const ContentMarketAnalysis = ({content}) => {
    console.log(content);
    return <div className="metric-content">
       <p className="metric-content-summary">Industry - {content.MarketSize.Industry}</p>
       <p className="metric-content-summary">Market Size</p>
       <p className="metric-content-summary-text">US : {content.MarketSize.TotalAddressableMarket.US}</p>
       <p className="metric-content-summary-text">International : {content.MarketSize.TotalAddressableMarket.International}</p><br /><br />
       <p className="metric-content-summary-text">Sources:{content.MarketSize.DataSources}</p>
       <p className="metric-content-summary">Frequency</p>
       <p className="metric-content-summary-text">{content.Frequency.Occurrences+content.Frequency.Insights}</p><br /><br />
       {content.Frequency.DataSources && <p className="metric-content-summary-text">Sources:{content.Frequency.DataSources}</p>}
       <p className="metric-content-summary">Technical Breakdown</p>
       <div className="breakdown-table">
            <MarketCardTemplate title={"Urgency"} level={content.Urgency.Level} rationale={content.Urgency.Description}/>
            {Object.keys(content.MarketAnalysisFinancials).map((title,idx) => {
                return <MarketCardTemplate key={idx} title={title} rationale={content.MarketAnalysisFinancials[title]} />
            })}
        </div> 
    </div>
};

const ContentFinancialAnalysis = ({content}) => {
    console.log(content);
    return <div className="metric-content">
       
       <p className="metric-content-summary">Business Model</p>
       <div className="breakdown-table">
            {Object.keys(content.BusinessModel).map((title,idx) => {
                return <MarketCardTemplate key={idx} title={title} rationale={content.BusinessModel[title]=== "NIL" ? "Insufficiant Information to provide financial breakdown." : content.BusinessModel[title]} />
            })}
        </div>
        <div className="breakdown-table">
            {Object.keys(content.Financials).map((title,idx) => {
                return <MarketCardTemplate key={idx} title={title} rationale={content.Financials[title]=== "NIL" ? "Insufficiant Information to provide financial breakdown." : content.Financials[title]} />
            })}
        </div>  
    </div>
};

const ContentSustainabilityAnalysis = ({content}) => {
    console.log(content); 
    return <div className="metric-content"><p className="metric-content-summary">Solution : {content.Solution}</p>
    <p className="metric-content-summary-text"> 
        {content.SustainabilityInsights.map((I) => {
            return I.Insight
        })}
    </p></div>
}

const ContentSummary = ({content}) => {
    console.log(content); 
    return <div className="metric-content"><p className="metric-content-summary">Idea Evaluation</p>
    <div className="breakdown-table">
        <div className="level-container" style={{width:"100%"}}>Total Score : 95 / 100</div>
         <MarketCardTemplate key={1} title={"Market And Financial Potential"} level={content.IdeaEvaluation.MarketAndFinancialPotential.Score+"/40"} rationale={content.IdeaEvaluation.MarketAndFinancialPotential.Explanation}/>
         <MarketCardTemplate key={2} title={"Environment And Social Potential"} level={content.IdeaEvaluation.EnvironmentAndSocialPotential.Score+"/40"} rationale={content.IdeaEvaluation.EnvironmentAndSocialPotential.Explanation}/>
         <MarketCardTemplate key={3} title={"Overall Idea"} level={content.IdeaEvaluation.OverallIdea.Score+"/20"} rationale={content.IdeaEvaluation.OverallIdea.Explanation}/>
    </div>
    </div>
}


const MetricTemplate= ({title,content,analyzed,loading,onClickArray,val}) => {
    var MetricContent=<ContentIdeaAnalysis content={content} />;
    console.log(content);
    if(val===0){
        MetricContent=<ContentIdeaAnalysis content={content} />;
    }else if(val === 1){
        MetricContent=<ContentMarketAnalysis content={content} />
    }else if(val === 2){
        MetricContent=<ContentFinancialAnalysis content={content} />
    }else if(val === 3){
        MetricContent=<ContentEnvironmentAnalysis content={content} />
    }else if(val === 4){
        MetricContent=<ContentSustainabilityAnalysis content={content} />
    }else if(val === 5){
        MetricContent=<ContentVentureCapital content={content} />
    }else if(val === 6){
        MetricContent=<ContentSummary content={content} />
    }

    return <>
    <div className="metric-header"><p className="metric-header-text">{title}</p>
    <div className="metric-spacer"></div>
    <div className="metric-header-dropdown"><SplitButton
            key={"Secondary"}
            id={`dropdown-split-variants-${"Secondary"}`}
            variant={"Secondary".toLowerCase()}
            title={"Choose Desired Metric"}
            className="metric-header-dropdownbox"
            style={{zIndex:"1"}}
          >
            <Dropdown.Item eventKey="1" onClick={onClickArray[0]} active>Idea Analysis</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={onClickArray[1]}>Market Analysis</Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={onClickArray[2]}>Financial Analysis</Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={onClickArray[3]}>Environmental Analysis</Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={onClickArray[4]}>Sustainability Insights</Dropdown.Item>
            <Dropdown.Item eventKey="6" onClick={onClickArray[5]}>Venture Capital</Dropdown.Item>
            <Dropdown.Item eventKey="7" onClick={onClickArray[6]}>Summary Score</Dropdown.Item>
            <Dropdown.Item eventKey="8" onClick={null}>Pros & Cons</Dropdown.Item>
          </SplitButton></div>
    </div>
    {content ? MetricContent : (loading ? <Loader /> :<div className="empty-content">No Input to Analyze</div>)}
    </>
};

export default MetricTemplate;
