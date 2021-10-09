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
					<div>
					<h3>questions and answers about <br /></h3>
					<h2>hogwarts</h2>
					<h4><em>school of witchcraft and wizardry</em></h4>
					</div>
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
