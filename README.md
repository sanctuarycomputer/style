# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## CSS

At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that radiate purpose and intent can be challenging across developer teams. In addition, the process of coming up with new class names for components can lead to naming conflicts, dead CSS, and overall a bloated codebase. So, instead of writing monolithic chunks of CSS, we write small, unique, immutable property classes that can be shared and utilized to form larger components. It's the Functional Programmer's approach to styling
<br>

## The Journey to functional CSS?

<br>

Writing "quick" and "easy" CSS class selectors to make our markup look lean and free of classes is an everyday struggle for developers. When writing Semantic CSS, we style our markup with the intention that the person who is studying it will understand its intent and purpose. However, it usually leads to an accumulation of verbose and immutable styles that become hard to re-use across our projects.
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
      <h1 class="article__title">Function and Utility first CSS </h1>
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
