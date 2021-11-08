# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## CSS


At Sanctuary Computer,  we are constantly striving to find new ways to write scalable and maintainable CSS. Unfortunately, writing semantic class names that radiate purpose and intent can be challenging across developer teams. In addition, the process of coming up with new class names for components can lead to naming conflicts, dead CSS, and overall a bloated codebase. So, instead of writing monolithic chunks of CSS, we write small, unique, immutable property classes that can be shared and utilized to form larger components. It's the Functional Programmer's approach to styling
<br>


## Why the functional way?
<br>


<h2>Resuability</h2>
  Writing "quick" and "easy" CSS class selectors to make our markup look lean and free of classes is an everyday struggle for developers.  When writting pure css , we approach styling our markup with  good intentions of trying to explain the purpose and intent of every element/selector:
  <br>
  <br>

```
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
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

