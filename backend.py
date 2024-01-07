from fastapi import FastAPI, Request
from openai import OpenAI
import os
import uvicorn
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.output_parsers import ResponseSchema
from langchain.output_parsers import StructuredOutputParser

app = FastAPI()
import os
from dotenv import load_dotenv  

#connecting to GPT model
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

def gpt_completion(prompt,model = 'gpt-3.5-turbo'):
   completion = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}]
        )
   return completion.choices[0].message.content

#communicating with the LLM
@app.post("/analysisEngine/")
async def orders(request: Request):
	
	try:
		body = await request.json()
		problem = body.get("problem", "")
		solution = body.get("solution", "")
		print(problem)
		print(solution)		
		llm = ChatOpenAI(api_key=api_key,temperature = 0.2)
		template = """
		Develop a decision support tool specifically for investors and venture capitalists in the circular economy. The tool will evaluate problems and their solutions given below in this sector. The workflow is as follows:

		1. **Spam Detection**: Initially, assess if the problem and solution given below are related to the circular economy. Set irrevelant entries as spamFlag=True.

		2. **Summaries**: For relevant content:
		- Draft a concise summary of the problem in up to 20 words.
		- Create a detailed summary of the solution in approximately 50 words.

		3. **Key Selling Points and Insights**: Identify 8-10 major unique selling points or crucial insights and facts from the solution.

		4. **Evaluative Ratings and Analysis**: Evaluate and rate the following elements on a 1 to 5 scale (5 being highest):
		- Innovation Level
		- Technology Level and Maturity
		- Feasibility
		- Market Potential and Scalability
		- Social Impact
		
		Provide a 2-3 sentence rationale for each rating.

		5. **Output Format**: Present all data, including the spam flag, in JSON format. A sample output could look like this:

		{{
		"spamFlag": True if solution or problem is a spam or irrelevant to circular economy, else False,
		"problemSummary": "Short description of the problem in 20 words.",
		"solutionSummary": "Detailed description of the solution in 50 words.",
		"keyPoints": ["Point 1", "Point 2", ...],
		"ratings": {{
			"InnovationLevel": {{
			"score": 4,
			"rationale": "Explanation for the innovation level rating."
			}},
			"TechnologyLevelAndMaturity": {{
			"score": 3,
			"rationale": "Explanation for the technology level and maturity rating."
			}},
			"Feasibility": {{
			"score": 5,
			"rationale": "Explanation for the feasibility rating."
			}},
			"MarketPotentialAndScalability": {{
			"score": 4,
			"rationale": "Explanation for the market potential and scalability rating."
			}},
			"SocialImpact": {{
			"score": 5,
			"rationale": "Explanation for the social impact rating."
			}}
		}}
		}}

		problem: {problem}
		solution: {solution}

		Strictly Make sure that the spamFlag is set to True if the problem or solution is irrelevant to the circular economy. If the problem or solution is relevant, set spamFlag to False.

		"""
		print("done template")
		
		prompt_template = ChatPromptTemplate.from_template(template)
		messages = prompt_template.format_messages(
                    problem=problem,
                    solution=solution)
		response = llm(messages)
		print(response.content)
		return response.content

		# return data_json
	except Exception as e:
		return {"error": str(e)}
	

@app.post("/marketAnalysis/")
async def orders(request: Request):
	
	try:
		body = await request.json()
		problem = body.get("problem", "")
		solution = body.get("solution", "")
		print(problem)
		print(solution)		
		llm = ChatOpenAI(api_key=api_key,temperature = 0.2)
		template = """
		As a decision support tool for investors to conduct market and financial analysis, please provide a comprehensive evaluation for the solution proposed to the problem given based on the following metrics. For each metric,  provide estimates and potential values with numerical data. ALSO STRICTLY PROVIDE URL OF DATA SOURCE FOR EVERY METRIC.

		1. **Market Size**: Analyze the industry related to the problem and estimate the total addressable market size both in the US and internationally. Include relevant data or projections from the proposed solution.

		2. **Urgency**: Assess the urgency of solving the problem. Quantify or describe the immediate need.

		3. **Frequency**: Determine the frequency of the problem. Provide insights into how often it occurs in the target market.

		4. **Market Analysis + Financials**:
			- **Market Potential**: Evaluate the market potential for the proposed solution.
			- **Target Audience**: Define and describe the target customer segment.
			- **Competitive Landscape**: Analyze main competitors and compare with the proposed solution.
			- **Barriers to Entry**: Evaluate the barriers to entry in this market.

		Each section should include a 'DataSources' field to reference any data sources used for the analysis.

		Sample JSON output format:

		{{
		"MarketSize": {{
			"Industry": "",
			"TotalAddressableMarket": {{
			"US": "",
			"International": ""
			}},
			"DataSources": ""
		}},
		"Urgency": {{
			"Level": "",
			"Description": "",
			"DataSources": ""
		}},
		"Frequency": {{
			"Occurrences": "",
			"Insights": "",
			"DataSources": ""
		}},
		"MarketAnalysisFinancials": {{
			"MarketPotential": "",
			"TargetAudience": "",
			"CompetitiveLandscape": "",
			"BarriersToEntry": "",
			"DataSources": ""
		}}
		}}

		Here is the problem and the proposed solution:
		problem: {problem}
		solution: {solution}
		"""


		print("done template")
		
		prompt_template = ChatPromptTemplate.from_template(template)
		messages = prompt_template.format_messages(
                    problem=problem,
                    solution=solution)
		response = llm(messages)
		print(response.content)
		return response.content

		# return data_json
	except Exception as e:
		return {"error": str(e)}
	


@app.post("/financialAnalysis/")
async def orders(request: Request):
	
	try:
		body = await request.json()
		problem = body.get("problem", "")
		solution = body.get("solution", "")
		print(problem)
		print(solution)		
		llm = ChatOpenAI(api_key=api_key,temperature = 0.2)
		template = """
		As a decision support tool for investors to conduct market and financial analysis, please evaluate the Business Model and Financial aspects of the proposed solution to the problem. For each metric, check if any detail is provided in the proposed solution. If details are given, analyze and validate them with numerical facts. If no information is provided for a metric in the solution, strictly state 'NIL'.

		1. **Business Model**:
			- **Monetization Strategy**: Examine the monetization strategy and revenue generation as detailed in the solution.
			- **Cost Structure**: Review and detail the expected cost structure as provided in the solution.
			- **Revenue Streams**: Identify and describe potential revenue sources mentioned in the solution.

		2. **Financials**:
			- **Financial Projections**: Present and analyze realistic revenue and growth projections as included in the solution.
			- **Burn Rate**: Provide an assessment of the realistic burn rate projections mentioned in the solution.


		Sample JSON output format:

		{{
		"BusinessModel": {{
			"MonetizationStrategy": "",
			"CostStructure": "",
			"RevenueStreams": "",
		}},
		"Financials": {{
			"FinancialProjections": "",
			"BurnRate": "",
		}}
		}}

		Here is the problem and the proposed solution:
		problem: {problem}
		solution: {solution}
		"""


		print("done template")
		
		prompt_template = ChatPromptTemplate.from_template(template)
		messages = prompt_template.format_messages(
                    problem=problem,
                    solution=solution)
		response = llm(messages)
		print(response.content)
		return response.content

		# return data_json
	except Exception as e:
		return {"error": str(e)}
	


@app.post("/envAnalysis/")
async def orders(request: Request):
	
	try:
		body = await request.json()
		problem = body.get("problem", "")
		solution = body.get("solution", "")
		print(problem)
		print(solution)		
		llm = ChatOpenAI(api_key=api_key,temperature = 0.2)
		template = """
		You are a decision support tool for venture capitalists and investors specializing in the circular economy. Your task is to evaluate proposed solutions to problems in this domain. For each solution, rate it on a scale of 1 to 5 based on the following metrics, and provide a brief explanation (2-3 sentences) for each rating.

		Metrics to Evaluate:

		1. **Energy Efficiency:** 
		- Description: Assess the energy efficiency of the solution. 
		- Task: Make assumptions about the energy consumption per unit of output and provide your projections. Evaluate how the solution minimizes energy usage and compares in efficiency to other competitors in the same space.

		2. **Carbon Footprint:** 
		- Description: Evaluate the solution's carbon footprint.
		- Task: Make assumptions about the carbon footprint per unit of output and provide your projections. Assess how the solution minimizes the carbon footprint in achieving its results compared to other competitors.

		3. **Supply Chain Sustainability:** 
		- Description: Analyze the sustainability of the solution's supply chain.
		- Task: Make assumptions about the environmental impact of suppliers per unit of output and provide your projections. Evaluate the efforts to ensure the supply chain aligns with sustainable practices and how the solution maximizes sustainability compared to competitors.

		Output Format: 

		Your response should be in JSON format, structured as follows:

		```json
		{{
		"SolutionName": "Name of the Solution",
		"Ratings": {{
			"Energy Efficiency": {{
			"Score": 1-5,
			"Explanation": "Brief explanation for the rating"
			}},
			"Carbon Footprint": {{
			"Score": 1-5,
			"Explanation": "Brief explanation for the rating"
			}},
			"Supply Chain Sustainability": {{
			"Score": 1-5,
			"Explanation": "Brief explanation for the rating"
			}}
		}}
		}}
		```

		Here is the problem and the proposed solution:
		problem: {problem}
		solution: {solution}
		"""


		print("done template")
		
		prompt_template = ChatPromptTemplate.from_template(template)
		messages = prompt_template.format_messages(
                    problem=problem,
                    solution=solution)
		response = llm(messages)
		print(response.content)
		return response.content

		# return data_json
	except Exception as e:
		return {"error": str(e)}

	





if __name__ == "__main__":
	uvicorn.run(app, host="0.0.0.0", port=8999)
