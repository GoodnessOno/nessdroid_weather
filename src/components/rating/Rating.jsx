import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import './rating.css'

const Rate = () => {
	const [rate, setRate] = useState(0);
	return (
        <div className="rating">
            <h1>RATE YOUR EXPERIENCE ON NESSDROID WEATHER APP</h1>
		<Container>
			{[...Array(5)].map((item, index) => {
				const givenRating = index + 1;
				return (
					<label>
						<Radio
							type="radio"
							value={givenRating}
							onClick={() => {
								setRate(givenRating);
								alert(
									`Are you sure you want to give 
									${givenRating} stars ?`
								);
							}}
						/>
						<Rating>
							<FaStar
								color={
									givenRating < rate || givenRating === rate
										? "000"
										: "rgb(192,192,192)"
								}
							/>
						</Rating>
					</label>
				);
			})}
		</Container>
        </div>
	);
};

export default Rate;
