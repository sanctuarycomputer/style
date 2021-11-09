# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## Introduction

At Sanctuary Computer, we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that radiate purpose and intent can be challenging. In addition, the process of coming up with new class names for components can lead to naming conflicts, dead CSS, and overall a bloated codebase. So, instead of writing monolithic chunks of CSS, we prefer to write small, unique, immutable utility classes that can be used to form larger components. This also helps our team build robust design systems with our code. It's the Functional Programmer's approach to styling!

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

As of recent, we adopted a utility-first CSS framework called [Tailwind](https://tailwindcss.com/) to help us compose and standardize our utility classes. Tailwind is bundled with many utility classes like: `flex`, `mt-4`, `overflow-hidden`, `items-center` and `bg-white`. These utility classes can be used to build any design directly in our mark up.
<br>

As developers, we spend a great amount of time thinking of class names rather than actually applying them. Tailwind remedies this cognitive load by offering an abdunance of intutive class names that allow us to easily build components with just a handeful of utility classes.

:white_check_mark: **Good**

![alt text](chat.png "Title")

```html
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/asset/sanc.png" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">Sanctuary Chat Ap</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

<br>

Tailwinds intutive naming conventions help us visualize exactly how this component will appear in our html. If we also want to remove or add an atribute, all we have to do is append or remove a class name. This approach allows us to implement a completely custom component design without having to rely on writing verbose and non-composable class names like we do in the example bellow:

:x: **Bad:**

![alt text](chat.png "Title")

```html
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

<!--
Resources
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
https://levelup.gitconnected.com/im-finally-giving-functional-css-a-chance-a9ab284dde12 --> -->
<!-- https://medium.com/geekculture/css-approaches-for-2021-semantic-and-non-semantic-styling-for-the-current-state-of-web-development-1581916ca1c0 -->
