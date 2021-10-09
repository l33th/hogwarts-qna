import React, { useState } from "react";
import data from "../data";
import SingleQuestion from "./Question";

const HogwartsQs = () => {
	const [questions, setQuestions] = useState(data);
	return (
		<>
			<div>
				<h1>hogwarts q's setup</h1>
			</div>
			<main>
				<div className='container'>
					<h3>questions and answers about hogwarts</h3>
					<section className='info'>
						{questions.map((question) => (
							<SingleQuestion key={question.id} {...question} />
						))}
					</section>
				</div>
			</main>
			;
		</>
	);
};

export default HogwartsQs;
