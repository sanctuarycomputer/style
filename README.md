# Sanctuary Computer Code Styleguide

![yup](http://i.giphy.com/xTiTntB8WSMsSDZIDm.gif)

## CSS

Our CSS style is designed to optimize for easy maintainability and
tweakability directly from the HTML.  Zigzagging between a HTML and
a CSS file to make sweeping changes through a codebase is hard, and
because CSS is usually *append only*, you'll often end up with bloated
CSS files full of dead code.

Instead, we use basic CSS classes that add just a single attribute or
two.  These are used like building blocks together in a div to quickly
style and maintain the codebase.  Make a small change to a class, and 
see that change propagate neatly throughout your app.  It's the Functional
Programmer's approach to styling!

---

### CSS File Structure

Use `global`, `routes`, `components`, and `extensions` folders in your
CSS file structure:

```
-- styles
    |-- app.scss
    |-- foundation.scss
    |-- settings.scss
    |-- global
        |-- _variables.scss
        |-- _colors.scss
        |-- _styleguide.scss
        |-- _buttons.scss
        |-- _inputs.scss
        |-- _utils.scss
    |-- routes
        |-- _homepage.scss
        |-- _posts.scss
        |-- _posts-show.scss
        |-- _posts-index.scss
    |-- components
        |-- _comment-box.scss
    |-- extensions
        |-- _masonry.scss
```

- `app.scss`
    Require all of your SCSS files here.

- `foundation.scss` and `settings.scss` (optional)
    When using the `ember-cli-foundation-scss` addon for grids, 
    these files will be installed on the top level here.

- `global/`
    This is where "always present" CSS lives.  Typography, HTML
    elements, colors, transition speeds and utility classes.

- `routes/`
    Every Route Template in an app should be wrapped in an ID
    corresponding to the route's name.  This ID then corresponds
    to a SCSS file.  **Important:** A Route Level Template and 
    route level SCSS file must entirely wrapped at the ID level.

- `components/`
    Should you need specific styling for a component that doesn't
    make sense to do inline, you can use a component level SCSS file.
    The component should have a top level class that corresponds to it's
    name, and that Class should correspond to a file in the
    components directory.  **Important:** If you need to make a 
    component look different on a route basis, style it generically here,
    then use the corresponding route file to override it in that view.

- `extensions/`
    Use this folder to override the appearance of CSS from external
    libraries.

### CSS Composability Style

Write verbose HTML over verbose CSS.  (It's easier to maintain one
file than two!).  Think of your CSS like little Lego bricks, rather
than complex, hard-to-find identities.

Optimize for composability over semantics.

**Good:**
```html
<div class='small-12 medium-3 large-2 columns background-color-mid-green padding-top text-center'>
  <h6 class='uppercase letter-spacing'>Hello World!</h6>
</div>
```

In this example, I can visualize exactly how the file will look purely from
reading the HTML, and I can remove an add an attribute simply by removing a
Class.

**Bad:**

```html
<div class='hello-world-wrapper'>
  <h6>Hello World!</h6>
</div>
```

Here I have no idea what `.hello-world-wrapper` will look like, and making
changes means I have to search the codebase for its definition.

### Only use IDs for Route Level Selectors

```html
<div id='homepage'>
  <!-- Nothing on this template is outside of this ID -->
</div>
```

```css
#homepage {
  // Nothing in this file is outside of this wrapper!
}
```

### Use a SCSS Grid that can handle breakpoints from HTML only.

It's important to bake responsive layouts into HTML.  Rearranging a
Layout for mobile is painstaking work, and it's even harder from CSS.

**Good:**
```html
<div class='small-12 medium-6 large-3 small-only-text-center hide-for-xlarge-up columns'></div>
```

**Bad:**
```html
<div class='12-columns other-styling-done-from-css'></div>
```

Some nice grids are:
- http://foundation.zurb.com/grid.html
- http://www.basscss.com/

### Frameworks *aren't* bad!

CSS Frameworks get a bad rap.  Why use a big, bloated CSS framework
when I can roll my own ninja-shit?  Here's some good reasons:

- Grid Frameworks give you a battle-tested way of handling Responsive layouts
- There's often Cross Browser CSS problems that Frameworks have already solved
- It's (basically) a myth that a CSS framework will slow down the browser.
- CSS Frameworks are designed to reduce complexity, making maintenance (way) easier!
- You can always "not" use the grid for pages that don't make sense gridded!

TLDR; You should almost always use a framework.  It saves time and helps
the team over a longer timeline.

