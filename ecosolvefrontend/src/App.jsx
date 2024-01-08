import React from "react";
import "./styles.css";
import NavBarComp from "./Components/NavBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBox from "./Components/InputBox/inputBox";
import Divider from '@mui/material/Divider';
import MetricTemplate from "./Components/MetricTemplate/MetricTemplate";
import axios from 'axios';

var api="http://0.0.0.0:8999/";

const App=() => {
    const [analyzed,setAnalyzed]=React.useState(false);
    const [IdeaAnalysis,setIdeaAnalysis]=React.useState(null);
    const [EnvironmentAnalysis,setEnvironmentAnalysis]=React.useState(null);
    const [VentureCapital,setVentureCapital]=React.useState(null);
    const [MarketAnalysis,setMarketAnalysis]=React.useState(null);
    const [SustainabilityAnalysis,setSustainabilityAnalysis]=React.useState(null);
    const [FinancialAnalysis,setFinancialAnalysis]=React.useState(null);
    const [Summary,setSummary]=React.useState(null);
    const [loading,setLoading]=React.useState(false);
    const [value,setValue]=React.useState(0);

    const array=[
        SwitchToIdeaAnalysis,
        SwitchToMarketAnalysis,
        SwitchToFinancialAnalysis,
        SwitchToEnvironmentAnalysis,
        SwitchToSustainabilityAnalysis,
        SwitchToVentureCapital,
        SwitchToSummary,
    ]

    function SwitchToIdeaAnalysis(){
        setValue(0);
    }

    function SwitchToMarketAnalysis(){
        setValue(1);
    }

    function SwitchToFinancialAnalysis(){
        setValue(2);
    }

    function SwitchToEnvironmentAnalysis(){
        setValue(3);
    }

    function SwitchToSustainabilityAnalysis(){
        setValue(4);
    } 

    function SwitchToVentureCapital(){
        setValue(5);
    } 

    function SwitchToSummary(){
        setValue(6);
    } 


    const [metric,setMetric]=React.useState(<MetricTemplate val={0} onClickArray={array} title={'Idea Analysis'} analyzed={analyzed} loading={loading} content={IdeaAnalysis}/>)

    async function MakeAPICalls(doc){
        setLoading(true);
        axios.post(api+'analysisEngine/', {
            problem: doc['Problem Statment'],
            solution: doc['Suggested Solution']
          })
          .then((response) => {
            setIdeaAnalysis(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            console.log(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            setAnalyzed(true);
            setLoading(false);
          }, (error) => {
            console.log(error);
          });


        axios.post(api+'marketAnalysis/', {
            problem: doc['Problem Statment'],
            solution: doc['Suggested Solution']
          })
          .then((response) => {
            setMarketAnalysis(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            console.log(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            setAnalyzed(true);
            setLoading(false);
          }, (error) => {
            console.log(error);
          });

        //   axios.post(api+'financialAnalysis/', {
        //     problem: doc['Problem Statment'],
        //     solution: doc['Suggested Solution']
        //   })
        //   .then((response) => {
        //     setFinancialAnalysis(JSON.parse(response.data.replace("False","false").replace("True","true")));
        //     console.log(JSON.parse(response.data.replace("False","false").replace("True","true")));
        //     setAnalyzed(true);
        //     setLoading(false);
        //   }, (error) => {
        //     console.log(error);
        //   }); 

          axios.post(api+'envAnalysis/', {
            problem: doc['Problem Statment'],
            solution: doc['Suggested Solution']
          })
          .then((response) => {
            setEnvironmentAnalysis(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            console.log(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            setAnalyzed(true);
            setLoading(false);
          }, (error) => {
            console.log(error);
          });


          axios.post(api+'envMetrics/', {
            problem: doc['Problem Statment'],
            solution: doc['Suggested Solution']
          })
          .then((response) => {
            setVentureCapital(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            console.log(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            setAnalyzed(true);
            setLoading(false);
          }, (error) => {
            console.log(error);
          });


          


          axios.post(api+'envFeatures/', {
            problem: doc['Problem Statment'],
            solution: doc['Suggested Solution']
          })
          .then((response) => {
            setSustainabilityAnalysis(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            console.log(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            setAnalyzed(true);
            setLoading(false);
          }, (error) => {
            console.log(error);
          });


          axios.post(api+'summaryScore/', {
            problem: doc['Problem Statment'],
            solution: doc['Suggested Solution']
          })
          .then((response) => {
            setSummary(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            console.log(JSON.parse(response?.data.replace("False","false").replace("True","true")));
            setAnalyzed(true);
            setLoading(false);
          }, (error) => {
            console.log(error);
          });
    };

    return <>
    <NavBarComp />
    <InputBox AnalyzeButtonClick={MakeAPICalls} analyzed={analyzed} />
    <Divider variant="middle" component="li" />
    {(value === 0) && <MetricTemplate val={0} onClickArray={array} title={'Idea Analysis'} analyzed={analyzed} loading={loading} content={IdeaAnalysis}/>}
    {(value === 1) && <MetricTemplate val={1} title={'Market Analysis'} onClickArray={array} analyzed={analyzed} loading={loading} content={MarketAnalysis}/>}
    {(value === 2) && <MetricTemplate val={2} title={'Financial Analysis'} onClickArray={array} analyzed={analyzed} loading={loading} content={null}/>}
    {(value === 3) && <MetricTemplate val={3} title={'Environment Analysis'} onClickArray={array} analyzed={analyzed} loading={loading} content={EnvironmentAnalysis}/>}
    {(value === 4) && <MetricTemplate val={4} title={'Sustainability Analysis'} onClickArray={array} analyzed={analyzed} loading={loading} content={SustainabilityAnalysis}/>}
    {(value === 5) && <MetricTemplate val={5} title={'Venture Capital'} onClickArray={array} analyzed={analyzed} loading={loading} content={VentureCapital}/>}
    {(value === 6) && <MetricTemplate val={6} title={'Summary Score'} onClickArray={array} analyzed={analyzed} loading={loading} content={Summary}/>}
    </>
};

export default App;