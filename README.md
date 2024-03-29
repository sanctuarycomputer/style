# Sanctuary Computer CSS Best Practices

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## Introduction

At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that display purpose and intent can be challenging. In addition, creating new class names for components can lead to naming conflicts and dead CSS, which results in a bloated codebase. So, instead of writing monolithic chunks of CSS, we prefer to write small, unique, immutable utility classes that we can use to form more significant components. This approach to writing CSS sets the foundation for our team to build robust design systems. It's the Functional Programmer's approach to styling!

---

<br>

## Style 1: Utility Style (Preferred)

The primary style of CSS that we use is called "Utility Style". As a convention, we generally prefer verbose HTML over verbose CSS. (It's easier to maintain one file than two!). Think of your CSS like little Lego bricks, rather than complex, hard-to-find identities.

Optimize for composability over semantics.

**:thumbsup: Good:** 

```html
<!-- ChatAppNotifcation.tsx -->
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/asset/sanc.png" alt="Sanctuary Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">Sanctuary Chat Ap</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

In this example, I can visualize exactly how the file will look purely from reading the HTML, and I can remove an add an attribute simply by removing a Class.

**:thumbsdown: Less Good:**

```html
<div class="hello-world-wrapper">
  <h6>Hello World!</h6>
</div>
```

Here, we have no idea what `.hello-world-wrapper` will look like, and making
changes means I have to search the codebase for its definition.

---

<br>

### Using Tailwind with Utility Style

We recently adopted the utility-first CSS framework Tailwind to help us compose and standardize our utility classes. Tailwind bundles a variety of base utility classes like `flex`, `mt-4`, `overflow-hidden`, `items-center` and `bg-white`. We can use these utility classes to build any design directly in our markup.

As developers, we spend a significant amount of time thinking of class names rather than applying them. Unfortunately, we overcomplicate this process by creating extensive naming conventions that we use seldomly or disregard completely. Tailwind remedies this process by offering us a whole suite of well-composed utility class names that work right out of the box. Check it out!

<br>

_Code:_

```html
<!-- ChatAppNotifcation.tsx -->
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/asset/sanc.png" alt="Sanctuary Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">Sanctuary Chat Ap</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

_Result:_

![alt text](chat.png "Title")

<br>

Tailwind's intuitive naming conventions allow us to visualize how this component will appear in our HTML. To remove or add an attribute, we just have to append or remove a class name. For example, if we wanted to change the background colour and give the sanctuary logo a border radius, we would append the following class names: `bg-darkest-grey` and `rounded-full` to our previously built ChatAppNotifcation component.

<br>

_Code:_

<br>

```html
<div
  class="p-6 max-w-sm mx-auto bg-darkest-grey rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0 rounded-full">
    <img class="h-12 w-12" src="/asset/sanc.png" alt="ChitChat Logo" />
    .....
  </div>
</div>
```

_Result:_

![alt text](chat1.png "Title")

This approach enables us to implement a completely custom component design without writing verbose and non-reusable class names.

<br>

## Style 2: Object Style Markup & CSS (Use sparingly)

Even though we love Tailwind - there are many occasions where we still need to write and maintain CSS conventions rather than just relying on tailwind to do all the heavy lifting. That's when we use "Object Style".

Here's the guidelines for Object Style:
- We only create a CSS class for components that have styling needs that aren't possible by inlining tailwind classes (like setting a hardcoded `width`). 
- Every component will have it's component name in the first wrapping element (like `.Card` for `components/Card/index.tsx`).
- Each component will only ever have a single CSS file (`styles/components/Card.scss` for `components/Card/index.tsx`).
- Each component CSS file will only ever have a single "top-level" class (sibling classes should be nested with SCSS and [BEM](https://css-tricks.com/bem-101/), ensuring that styles don't unintentionally leak).
- Each CSS declaration will only declare things that can't be decribed in "Utility Style" (mixing Utility Style with Object Style means **your HTML is as legible as possible**).

<br>

_Component JS Code:_

```
// This file is declared in /src/components/Card/index.tsx

import React, { FC } from 'react';
import cx from 'classnames';

export type Props = {
  title: string;
  style:
    | 'black-background'
    | 'white-background-with-cta-long'
    | 'white-background-with-cta';
};

const Card: FC<Props> = ({
  title,
  style,
}) => {
  return (
    <div className={cx('Card', `Card--${style}`)}>
      <div className="p-4 laptop:p-6">
        {title && (
          <span
            className={cx('font-primary block', {
              'text-primary-mobile-7xl tablet:text-primary-8xl':
                style === 'black-background',
              'text-primary-mobile-4xl tablet:text-primary-4xl':
                style === 'white-background-with-cta-long' ||
                style === 'white-background-with-cta',
            })}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
```

_Corresponding CSS Code:_

```
// This file is declared in src/styles/components/Card.scss

.Card {
  &--black-background {
    width: 60rem;
    background: theme('colors.black');
    color: theme('colors.white');
  }

  &--white-background-with-cta-long {
    width: 37.5rem;
    background: theme('colors.white');
    color: theme('colors.black');
  }

  &--white-background-with-cta {
    width: 23.4375rem;
    background: theme('colors.white');
    color: theme('colors.black');
  }
}
```

## CSS Folder Structure

Use `components`, `atoms`, `blocks`, and `elements` folders in your CSS file structure in tandem with your desired Tailwind configuration:

```
-- dirroot
    |-- src
        |-- styles
            |-- blocks
              |-- index.sccs
              |-- FullText.scss
              |-- Hero.scss
              ...
            |-- atoms
              |-- index.sccs
              |-- Button.scss
              |-- Link.scss
             ....
            |-- components
              |-- index.sccs
              |-- Card.scss
              |-- Nav.scss
              ...
            |-- elements
            index.scss
              |-- Icon.scss
              |-- LinkDescriptions.scss
          |-- vars.scss
          |-- font.scss
          |-- global.scss
          |-- utilities.scss
    |-- package.json
    |-- yarn.lock
    |-- tailwind.config.js

```

- `index.scss` - Require all of your SCC files here, including default tailwind imports

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import "./fonts";
  @import "./utilities";
  @import "./vars";
  @import "./global";
  @import "./styles";
  ```

- `tailwind.config.js`
  After setting up tailwind CSS for your application - you should see a file in the root directory called **tailwind.config.js**. By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.

  ```js
    const colors = require('tailwindcss/colors')
    module.exports = {
      theme: {
        colors: {
          gray: colors.coolGray,
          blue: "#FFFFF,
          red: colors.rose,
          pink: colors.fuchsia,
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      ...........
    }

  ```

- `/components`
  Should you need specific styling for a Component that doesn't make sense to use *tailwind *or _inline styles_, you can use a component level SCSS file. Components are more complex and usually compose multiple atoms and elements together

- `/atoms`
  Sometimes we confuse atoms with `blocks` and `components`. To avoid making this mistake, try to categorize atoms as entities that have a single side effect to them. Think of them as small resuable pieces like : _Buttons_, _Links_ and _Images_.

- `/elements`
  To put simply an element is a single part of a larger group: _Icons_ and _InlineLinks_

- `/blocks`
  Blocks are related to content data coming from a CMS or a data source. There functionallity is tied to data.

- `fonts.scss`
  This is where we import and categorize our various font families

- `vars.scss`
  This file is where we store global variables to access them in any given scope of our application. We usually put height properties in here. In the past we would include color variables but we now handle that in our taildwind configuration:
  <br>

- `global.scss`

  ```css
  <!-- vars.scss -->

  $nav-height: 3.75rem;
  $desktop-nav-height: 3.75rem;
  $notification-bar-height: 3.75rem;
  $desktop-notification-bar-height: 3.75rem;
  $nav-notification-bar-height: 7.5rem;
  $desktop-nav-notification-bar-height: 7.5rem;
  $subnav-height: 2.9375rem;
  $desktop-subnav-height: 4.25rem;
  ```

    <br>

Real life examples that utilize this folder and file structure at Sanctuary.

- [Rootine - Next.JS](https://github.com/sanctuarycomputer/rootine)
- [Index Space - Next.JS](https://github.com/sanctuarycomputer/index-space)

<br>

---

## Tips & Gotchas!

In this section, we have included common anti-patterns that exist when a new developer is being onboarded to a Tailwind and React project.

<br>

### **1. Conditional class names**

<br>

When applying conditional classnames inline to our components, stray away from using ternary operators and instead use the [classnames](https://github.com/JedWatson/classnames) package.

**:thumbsup: Good:** 

```js
import React from "react";
import cx from "classnames";

const Banner = ({ active, children, isError }) => (
  <div
    className={cx("bg-primary-blue flex flew-row", {
      hidden: !active,
      "bg-red": isError,
    })}
  >
    {children}
  </div>
);

export default Banner;
```

**:thumbsdown: Less Good:**

```js
import React from "react";

const Banner = ({ active, children, active, isError }) => (
  <div
    className={`bg-primary-blue flex flew-row ${!active ? "hidden" : ""} ${
      isError ? "bg-red" : ""
    }`}
  >
    {children}
  </div>
);

export default Banner;
```

<br>

### **2. Avoid inline styles**

<br>

When styling components, do not rely on inline style objects because you couldn't find a convenient utility class in your tailwind configuration. Developers also tend to do this when they feel like writing a CSS file for a single line of code is a waste of time.

**:thumbsdown: Not Great:**


```js
const ProfileCard = ({ name, profileDescription, imageSrc }) => (
  <div
    style={{ backgroundColor: "#F2EBCA", maxWidth: "41.666667vw" }}
    className={"flex flew-col p-6 ml-auto mr-auto "}
  >
    <div style={{ marginTop: "3.75rem", marginBottom: "3.75rem" }}>
      <h6 className="text-xl font-medium text-black">{name}</h6>
      <p class="text-gray-500">{profileDescription}</p>
    </div>
    <img className="w-full" src={imageSrc} />
  </div>
);
```

Instead, extend your `tailwind.config.js` to include the base styles you want! Then we can re-use these bases styles in tailwind for later purposes

**:thumbsup: Good:** 

```js
module.exports = {
  theme: {
    colors: {
        beige: '#f3f2ed',
      ....,

    },
    extend: {
      spacing: {
        15: "3.75rem",
        '5/12-screen': '41.666667vw',
        ...,
      },
    },
  },
....
};
```

<br>

Then remove inline styles and add new utillity classes :thumbsup:

```js
const ProfileCard = ({ name, profileDescription, imageSrc }) => (
  <div
    className={"bg-beige flex flew-col p-6 ml-auto mr-auto max-w-5/12-screen"}
  >
    <div className="my-15">
      <h6 className="text-xl font-medium text-black">{name}</h6>
      <p class="text-gray-500">{profileDescription}</p>
    </div>
    <img className="w-full" src={imageSrc} />
  </div>
);
```

<br>

Occassionaly we are forced to use react inlineStyles. For example, when we have to change a height of a div based on a window dom parameter or an event listener. When you run into this scenerio, it's ok to get creative with inline styles :)

### **3. Don't obscure Tailwind classes in Object Style classes**

<br>

**:thumbsdown: Not Great:**

```css
.AuthPanelButtonsWrapper {
  @apply absolute bottom-0 left-0 px-2.5 py-5 md:p-5 w-full grid grid-cols-2 gap-x-3 md:gap-x-14;
}
```

There's no need to do this, as it unnecessarily obscures CSS (and has potential to become CSS tech debt: what if you delete this div, but forgot to delete this CSS declaration?). Instead, just inline the classes in the DOM. It makes visualizing the component from markup much easier for you and your team!

---

## What about styled-components?

[styled-components](https://styled-components.com/) is cool, but we don't generally reach for it, because a) it can only be used with React (and we write views in Rails, Liquid, Elixir Phoenix, and many other rendering pipelines), and b) it adds a bit of overhead upfront, given that it kinda forces you to "build a design framework", rather than start styling straight away.

As such, we tend to only use styled-components on projects that need a rigid design system or UIKit, like the [LightOS](https://github.com/sanctuarycomputer/light-two/tree/main/LightOS), or the [Swell Docs](https://swell.store/docs/api/#introduction).

## React Native and Tailwind

Comming soon...



