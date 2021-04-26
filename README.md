# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the component depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Hide/Show the answer to a question when the question is clicked

### Screenshot

<image src='./src/images/desktop-view.png' width='600' >
<image src='./src/images/mobile-view.png' height='615'>

### Links

-   Solution URL: [Add solution URL here](https://github.com/MiggyMike/faq-accordian-card)
-   Live Site URL: [Add live site URL here](fm-faq-mjj.netlify.app)

## My process

### Built with

-   HTML
-   CSS/Sass
-   Bootstrap
-   [React](https://reactjs.org/) - JS library

### What I learned

Utilizing Bootstrap and it's components was helpful, regarding the CustomToggle component. I was able to manipulate that to handle some stylistic changes that needed to occur with certain actions.

```
    <Card.Header
            type='link'
            style={{
                fontWeight: isCurrentEventKey ? 'bold' : '',
                borderBottom: isCurrentEventKey ? 'none' : '',
            }}
            onClick={decoratedOnClick}>
            {children}
            <div
                className='icon'
                style={{
                    transform: isCurrentEventKey ? ' rotate(180deg)' : '',
                    transition: isCurrentEventKey ? '1000ms' : '',
                }}
                onClick={decoratedOnClick}>
                {<IconSvg />}
            </div>
        </Card.Header>
    );
```

I did have issues for the longest time tryign to make the background-pattern work with clips and such. After doing a ton of searches and finding what I thoght would be complete solutions, I then discovered I could just make it the bg-image ofthe card itself. >\_<

### Continued development

I would definitely like to revamp this using react styled components. Also simplfying my code by breaking things into components for simplicity.

### Useful resources

The internets. I'll do a better job of tracking resources utilized in finding solutions.

## Author

-   Website - [Portfolio](https://github.com/MiggyMike)
-   Frontend Mentor - [@MiggyMike](https://www.frontendmentor.io/profile/MiggyMike)
-   Twitter - [@imikey_irock](https://www.twitter.com/imikey_irock)

## Acknowledgments

The vast internet! Thanks!
