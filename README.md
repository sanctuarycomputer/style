# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## Introduction

At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that display purpose and intent can be challenging. In addition, creating new class names for components can lead to naming conflicts and dead CSS, which results in a bloated codebase. So, instead of writing monolithic chunks of CSS, we prefer to write small, unique, immutable utility classes that we can use to form more significant components. This approach to writing CSS sets the foundation for our team to build robust design systems. It's the Functional Programmer's approach to styling!

---

<br>

## CSS Composability Style

Write verbose HTML over verbose CSS. (It's easier to maintain one
file than two!). Think of your CSS like little Lego bricks, rather
than complex, hard-to-find identities.

Optimize for composability over semantics.

**Good:**

```html
<div
  class="small-12 medium-3 large-2 columns background-color-mid-green padding-top text-center"
>
  <h6 class="uppercase letter-spacing">Hello World!</h6>
</div>
```

In this example, I can visualize exactly how the file will look purely from
reading the HTML, and I can remove an add an attribute simply by removing a
Class.

**Bad:**

```html
<div class="hello-world-wrapper">
  <h6>Hello World!</h6>
</div>
```

Here I have no idea what `.hello-world-wrapper` will look like, and making
changes means I have to search the codebase for its definition.

---

<br>

## Composability with Tailwind

We recently adopted the utility-first CSS framework Tailwind to help us compose and standardize our utility classes. Tailwind bundles a variety of base utility classes like _flex_, _mt-4_, _overflow-hidden_, _items-center_ and _bg-white_. We can use these utility classes to build any design directly in our markup.

As developers, we spend a significant amount of time thinking of class names rather than applying them. Unfortunately, we overcomplicate this process by creating extensive naming conventions that we use seldomly or disregard completely. Tailwind remedies this process by offering us a whole suite of well-composed utility class names that work right out of the box. Check it out!

<br>

### Code:

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

**Result:**

<br>

![alt text](chat.png "Title")

<br>

Tailwind's intuitive naming conventions allow us to visualize how this component will appear in our HTML. To remove or add an attribute, we just have to append or remove a class name. For example, if we wanted to change the background colour and give the sanctuary logo a border radius, we would append the following class names: `bg-darkest-grey` and `rounded-full` to our previously built ChatAppNotifcation component.

<br>

### Code:

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

### Result:

<br>

![alt text](chat1.png "Title")

This approach enables us to implement a completely custom component design without writing verbose and non-reusable class names. Let's try writing the exact `ChatAppNotifcation` component using semantic CSS

```html
<!-- ChatAppNotifcation.tsx -->

<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img
      class="chat-notification-logo"
      src="asset/sanc.png"
      alt="ChitChat Logo"
    />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">Sanctuary Chat App</h4>
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

At first glance, I have no idea what `.chat-notification `will look like, and if we decide to make changes to this component, we have to search the codebase for its location and related definitions. In addition, zigzagging between an HTML/JSX and a CSS file to make sweeping changes through a codebase is hard, and when our codebase starts to scale, we will have to spend a significant amount of time trying to learn to reproduce these styles.

<br>

## CSS file structure and extending tailwind

Even though we love tailwind - there are many occasions where we still need to write and maintain CSS conventions rather than just relying on tailwind to do all the heavy lifting. We only create a CSS class for components that have styling needs that aren't possible by inlining tailwind classes. Just be sure to only use a semantic class when you’re styling it from a CSS file.

Use `components`, `atoms`, `blocks`, and `elements` folders in your
CSS file structure:

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

  ```
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
  Sometimes we confuse atoms with `blocks` and `components`. To avoid making this mistake, try to categorize atoms as entities that have a single side effect to them. Think of them as small resuable pieces: Buttons, Links and Images.

- `/elements`
  To put simply an element is a single part of a larger group: _Icons_ and _InlineLinks_

- `/blocks`
  Blocks are related to content data coming from a CMS or a data source. There functionallity is tied data and are not as composable as components

- `fonts.scss`
  This is where we import and categorize our various font families

- `vars.scss`
  This file is where we store global variables to access them in any given scope of our application. We usually put height properties in here. In the past we would include color variables but we now handle that in our taildwind configuration:
  <br>

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

## React and Tailwind 


At sanctuary we prefer stable technologies over new shiny ones.



When appending utility class names - use the package `classnames`.



### Conditional classnames

 Dont

```js
import React from "react";

const Banner = ({ active, children, active, isError }) => (
  <div
    className={`banner large ${!active ? "hidden" : ""} ${
      isError ? "bg-red" : ""
    }`}
  >
    {children}
  </div>
);

export default Banner;
```

## DO!

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

more here ....

## React Native and Tailwind

more here ....
