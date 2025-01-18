This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Created by Evander Mendonca for Stackline. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Areas for Improvement

There are some definite areas that could be improved and that I didn't get to because I ran out of time. I ended up over-engineering the backend a bit, and as such didn't get to work on the frontend as much as I wanted. 

Areas that could be improved: 
- Graph - I was unable to get to the graph which shouldn't have been hard. If given more time, I would've used a library like [recharts](https://recharts.org/en-US/). 
- Sales pagination - I don't like that that the table is so tall/long. If given more time, I would've added pagination on the backend to only fetch 10-20 records at time. I then would've added arrows to the table so the user can flip back and forth between pages. 
- Sales sorting - The screenshot provided had arrows on the table so that you can sort the results by column. This is something that also should've been added in my deployed version of this and is an area for improvement.
- Improved sales dates - The dates are currently stored as strings. I did not get a chance to format the dates. This would've also made sorting easier.  

## Deployed Environment

This project is deployed on Vercel and can be found at [Vercel Deployed Environment](https://stackline-assessment-ashen.vercel.app/)
