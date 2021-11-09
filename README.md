# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## Introduction

At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that radiate purpose and intent can be challenging. In addition, the process of coming up with new class names for components can lead to naming conflicts, dead CSS, and overall a bloated codebase. So, instead of writing monolithic chunks of CSS, we prefer to write small, unique, immutable utility classes that can be used to form larger components. This also helps our team build robust design systems with our code. It's the Functional Programmer's approach to styling!

---

<br>

## CSS Composability Style

It is important to write verbose HTML over verbose CSS. Think of your CSS like little Lego bricks, rather than complex, hard-to-find identities. As of recent, we adopted a utility-first CSS framework called [Tailwind](https://tailwindcss.com/) to help us compose and scafold our style classes in a functional way. Tailwind is bundled with many utility classes like: `flex`, `mt-4`, `overflow-hidden`, `items-center` and `bg-white`. These utility classes can be used to build any design directly in our mark up.
To demonstrate the advantages of using Tailwind, lets compare the two approaches of **Using Tailwind** to writing **Pure semantic CSS**

<br>

:nail_care: **The Tailwind Way**

As developers, we spend a great amount of time thinking of class names rather than actually applying them. Tailwind remedies this cognitive load by offering an abdunance of intutive class names that allow us to easily build components with just a handeful of utility classes.



<br>

```html
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```
<br>

When looking at the markup above, we can visualize exactly how this file will appear in our HTML. If we also want to remove or add an atribute, all we have to do is append or remove a class. This approach allows us to implement a completely custom component design without having to rely on writing verbose and non-composable class names like : `chat-notication` and `chat-notification-logo-wrapper`.

<!-- In terms of mainatanbility and onboarding



The uniform class names that Tailwind provides allow for speedy maintainer onboarding. This can be especially useful in large companies where developers may come and go regularly. A custom CSS system will require a varying amount of time to learn and reproduce.
 -->


<!--
<br>

:x: **Pure Semantic CSS:**

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img
      class="chat-notification-logo"
      src="/img/logo.svg"
      alt="ChitChat Logo"
    />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

In the above example, their is no idication of what `.chat-notifications` will look like
Here I have no idea what `.chat-notifcations` will look like, and making
changes means I have to search the codebase for its definition. One can argue that this looks better when it comes to semantics but in terms of composition and reusability it's simply not.

 It adds no real value to the structure of the page and gives no clue how it should look. This can lead to bugs as its purpose and scope are unclear. -->

<!--








## Semantic CSS vs Functional CSS

<br>
The approach to writing semantic CSS is to write classes that are easy to read and that showcase element hierarchy. The intention of this is to help one understand where a module begins or ends. In shorter words, the Semantic approach trys to sell you on readability!
<br>
<br>

```

const Hero = ({ headline, tagline }: { headline: string, tagline?: string }) => {
  return (
    <div className="hero">
      <h1 className="hero-title">Heading</h1>
      <p className="hero-tagline">Tagline</p>
    </div>
  );
};

```

<br>

### What is the actual problem of using Semantic CSS then ?

<br>

The above example looks fine! So whats the problem then? Let's give another example of a component that you will commonly come across in a codebase.
<br>
<br>

`./article.css`

```










<!-- Semantic CSS -->
<!--
  .article {
    width: 800px;
    border: 1px solid #ddd;
    background-color: rgba(236, 253, 245);
    padding: 20px;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 5px #999;
  }

  .article__title {
    font-size: 32px;
    color: rgba(120, 53, 15);
    margin-bottom: 10px;
  }

  .article__publicationDate {
    color: rgba(180, 83, 9);
    font-weight: bold;
  }

  .article__content {
    color: #555;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-family: Verdana;
  }

```

`./ArticleCard.jsx`

``` -->

<!-- JSX Component using Semantic CSS -->

<!-- import React from "react";
import "./article-card.css";

export function ArticleCard() {
  return (
    <article class="article">
      <h1 class="article__title">Functional Programing: The CSS Way </h1>
      <div class="article__publicationDate">10th April, 2021</div>
      <div class="article__content">
        <p>At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that radiate purpose and intent can be challenging across developer teams.</p>
      </div>
    </article>
  );
} -->

<!--
Resources
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
https://levelup.gitconnected.com/im-finally-giving-functional-css-a-chance-a9ab284dde12 --> -->
<!-- https://medium.com/geekculture/css-approaches-for-2021-semantic-and-non-semantic-styling-for-the-current-state-of-web-development-1581916ca1c0 -->
