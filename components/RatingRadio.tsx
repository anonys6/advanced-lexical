"use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';

const RatingRadio: React.FC = () => {
    const [selectedRating, setSelectedRating] = useState<string | null>(null);
    const [averageRating, setAverageRating] = useState<number>(0);
    const [userCount, setUserCount] = useState<number>(0);

    useEffect(() => {
        // Retrieve the stored rating from local storage when the component mounts
        const storedRating = localStorage.getItem('selectedRating');
        if (storedRating) {
            setSelectedRating(storedRating);
        }

        // Fetch the initial rating data from the backend
        const fetchRatingData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rating-get`);
                if (!response.ok) {
                    throw new Error('Failed to fetch rating data');
                }
                const data = await response.json();
                setAverageRating(data.averageRating);
                setUserCount(data.count);
            } catch (error) {
                console.error('Error fetching rating data:', error);
            }
        };

        fetchRatingData();
    }, []);

    const handleRatingChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const rating = event.target.value;
        setSelectedRating(rating);

        // Check if the rating is already stored in local storage
        const storedRating = localStorage.getItem('selectedRating');
        if (!storedRating) {
            localStorage.setItem('selectedRating', rating); // Store the rating in local storage

            // Send the rating to the backend
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/increase-one`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userRate: rating }),
                });

                if (!response.ok) {
                    throw new Error('Failed to send rating');
                }

                const data = await response.json();
                setAverageRating(data.averageRating);
                setUserCount(data.count);
            } catch (error) {
                console.error('Error sending rating:', error);
            }
        } else {
            // Update the local storage without sending the request to the backend
            localStorage.setItem('selectedRating', rating);
        }
    };

    return (
        <StyledWrapper>
            <div className="rating">
                {[...Array(5)].map((_, i) => {
                    const value = (i + 1).toString();
                    return (
                        <React.Fragment key={value}>
                            <input
                                type="radio"
                                id={`star-${value}`}
                                name="star-radio"
                                value={value}
                                checked={selectedRating === value}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor={`star-${value}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                </svg>
                            </label>
                        </React.Fragment>
                    );
                })}
            </div>
            <p>
                <strong>{averageRating.toFixed(1)}</strong> out of <strong>5.0</strong> by <strong>{userCount}</strong> users
            </p>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .rating {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.3rem;
    --stroke: #666;
    --fill: #ffc73a;
  }

  .rating input {
    appearance: unset;
  }

  .rating label {
    cursor: pointer;
  }

  .rating svg {
    width: 2rem;
    height: 2rem;
    overflow: visible;
    fill: transparent;
    stroke: var(--stroke);
    stroke-linejoin: bevel;
    stroke-dasharray: 12;
    animation: idle 4s linear infinite;
    transition: stroke 0.2s, fill 0.5s;
  }

  @keyframes idle {
    from {
      stroke-dashoffset: 24;
    }
  }

  .rating label:hover svg {
    stroke: var(--fill);
  }

  .rating input:checked ~ label svg {
    transition: 0s;
    animation: idle 4s linear infinite, yippee 0.75s backwards;
    fill: var(--fill);
    stroke: var(--fill);
    stroke-opacity: 0;
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
  }

  @keyframes yippee {
    0% {
      transform: scale(1);
      fill: var(--fill);
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke: var(--stroke);
      stroke-dasharray: 10;
      stroke-width: 1px;
      stroke-linejoin: bevel;
    }

    30% {
      transform: scale(0);
      fill: var(--fill);
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke: var(--stroke);
      stroke-dasharray: 10;
      stroke-width: 1px;
      stroke-linejoin: bevel;
    }

    30.1% {
      stroke: var(--fill);
      stroke-dasharray: 0;
      stroke-linejoin: miter;
      stroke-width: 8px;
    }

    60% {
      transform: scale(1.2);
      fill: var(--fill);
    }
  }
`;

export default RatingRadio;
