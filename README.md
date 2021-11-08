# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## Introduction

At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that radiate purpose and intent can be challenging. In addition, the process of coming up with new class names for components can lead to naming conflicts, dead CSS, and overall a bloated codebase. So, instead of writing monolithic chunks of CSS, we write small, unique, immutable utility classes that can be utilized to form larger components. This also helps our team build robust design systems with our code. It's the Functional Programmer's approach to styling!

<br>

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

```

<!-- JSX Component using Semantic CSS -->

import React from "react";
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
}

```

<!-- In the example above, we defined four unique classes within this componet. Lets say we wanted to re-use this component on another feature: display a preview of anarticle in a card layout.

Resources
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
https://levelup.gitconnected.com/im-finally-giving-functional-css-a-chance-a9ab284dde12 -->
<!-- https://medium.com/geekculture/css-approaches-for-2021-semantic-and-non-semantic-styling-for-the-current-state-of-web-development-1581916ca1c0 -->
