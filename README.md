# Sv-Front challenge

## Getting Started For Local Development
### Prerequisites
- Get Dependencies
```bash
npm install
```
### Run the development Server on local:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Tests Locally
```bash
npm run test
```

### Run StoryBook
```bash
npm run storybook
```
Open [StoryBook URL](http://localhost:6006/) with your browser to see the result.

### Generate a Build for production but locally
```bash
npm run build
```
This will generate a .next folder with the build files.
then run:
```bash
npm start
```

## Docker Build
### Build Docker
```bash
docker build -t sv-front .  
```

### Run Docker
```bash
docker run -p 3000:3000 sv-front 
```
-------

# Project information
1. Followed the Figma design provided
2. Used TypeScript and Next.js 14 for the project with app router
3. Used Emotion CSS-in-JS library for styling
4. Used *Javascript* with Jest/React Testing Library for testing

# To be Improved
- Improve spacing and alignment in the card component
- Migrate test from Javascript to Typescript.
  - Couldn't config Typescript with Jest and React Testing Library