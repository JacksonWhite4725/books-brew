import React from 'react';
import { Link } from 'react-router-dom';

/*
PSUEDOCODE QUIZ:

First, we need variables to track when user's enter data in the quiz:
- SRM (Light to dark) [1-40]: Numerical
- IBU (Bitterness) [1-120]: Numerical
- ABV (Alcohol content) [1-13]: Numerical
- Sour: Boolean

Next, we need a series of questions to determine user's interest in certain beers based on taste. I think it's important to categorize user's that are more knowledgable about beer and those that are relatively new.

Question 1: How much beer experience would you say you've had? [Rephrase later]
* None at all
* A little bit
* Quite a bit
* A lot

IF user answers "None" or "Little", send them down the beginner pipeline. Make results a little more broad to provide a box that's more diverse for exploration.

IF user answers "Quite a bit" or "Lots", send them down the expert pipeline. Questions are more specific to various beers.

Question 2 - Beginner Path: 
*/