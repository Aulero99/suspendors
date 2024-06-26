<p align="center">
    <img src="https://raw.githubusercontent.com/Aulero99/small_grid/453667cbe78886d5a1186b2eae901eed03a15e25/src/assets/img/logo.svg" alt="Suspendors Logo" width="200" height="200">
</p>

<h1 align="center">Suspendors</h1>

<p align="left">
    Lightweight framework with easily integrated callbacks and easily configurable breakpoint logic that doesn't break scrolling between screen sizes and different devices.
</p>

## Suspendors 1.6

<p>
    The goal of this project was to eliminate common framework issues that anyone who has worked in a framework has inevitably encountered. Issues such as scroll locking or jumping are eliminated when using the integrated cvh and cvw functions and work nearly identically as vh and vw but across practically all devices not just the newer ones. Needing to integrate different logic such as different tools between desktop and mobile platforms are now easily implemented by registering the startup functions with Suspendors and letting it handle the thinking. It is also easy to track orientation with suspendors by utilizing the native support and functions can be registered to trigger with an orientation flip as needed.   
</p>

## Installation
<p>
To install Suspendors there are currently 2 options:

- Clone the repo: `https://github.com/Aulero99/suspendors.git`
- Install with [npm](https://www.npmjs.com/): `npm install suspendors`
</p>

<p>
After installation you need to import the grid to the root of your project's scss stylesheet:

`@import "suspendors";`

This will give your project access to the scss grid of suspendors and all the goodness that comes with that (see 'Using the Grid' below).
</p>

<p>
Then you need to import the javascript to the root of your project (see 'Using the Javascript Events' below):

`import { suspendors } from 'suspendors';`

then import each suspendors module as needed (coming soon)
</p>

## Using the Grid

<p>
Suspendors behaves similarly to bootstrap (or any other css framework using min-width for the @media rules) however with the following breakpoints by default:

- xxs: 480px;
- xs: 600px;
- sm: 768px;
- md: 992px;
- lg: 1200px;
- xl: 1400px;
- xxl: 1900px;

anything with a `bp` modifier kick when above those points with a default taking priority in whenever under that breakpoint. You can change this behavior by changing the min/max-width variable in the `_variables.scss` file or by providing your own variables by the same name as Suspendors adds `default` to all editable variables. 

Unlike Bootstrap or many other css frameworks, Suspendors, as of 1.6 builds the grid system on top of custom html tags instead of classes. Custom html tags have been technically supported for a very long time, yet have not been widely adapted into many css frameworks, however suspendors tries to make things easier to develop in by making developers utilize these custom tags, which increases readability and functionality awareness. By default these can;t be used as classes, however this can be changed to also be used as classes by setting the `$grid-as-class` variable to true. 

The parent of the grid is `<s-container>` or a derived container tag with each section of the grid requiring an `<s-row>`, after that you can implement a grid by using `<s-col-x>` or `<s-col-fill>` with the ability to utilize a `bp-x` attribute to the tag replacing `bp` being replaced by the corresponding breakpoint and `x` being replaced with 1-12 and col-fill will just fill in the available x-space available.

All classes included are:

### Grid

- `<s-container>` The parent of the 'grid' with width set to 100%
    * `<s-container bp>` as of 1.5.1 sets max width of the corresponding breakpoint
    * `<s-container-solid>` as of 1.5.1 with max-width set a point below breakpoint
    * `<s-container-solid bp>` sets the max width of container to the bp
    * `<s-container-shift bp>` as of 1.5.1 switches behavior from solid to standard at given bp
- `<s-row>` each row of the grid
    * `<... gx-bp-x>`,`<... gy-bp-x>`, & `<... g-bp-x>` will adjust gutter spacing as of 1.5.1
        * NOTE - gutters, padding and margin all match each other.
    * `<s-row cols-bp-x>` as of 1.5.1 sets all `<s-col>` elements within to behave like `<s-col-x bp-x>` classes
- `<s-row cols-bp-x>` / `<s-col-x>` designates a column in the row
    * `x` between 1-12
- `<s-col-fill>` fills the available space in the row
    * ex: a row with a col-3 and a col-fill will have the col-fill act like a col-9, and if that col-3 becomes a col-6 after a bp the col-fill will then act as a col-6

## Gutters
    NOTE - since gutters can only be applied to rows to space objects inside them, they are set as attributes to be applied to <s-row> tags

- `<... g-bp-x>` Adjusts x and y gutters
- `<... gx-bp-x>` Adjusts x gutter
- `<... gy-bp-x>` Adjusts y gutter
    * Modifiers for `x` are 0-5

## Vertical Masonry
In addition to the grid system implemented in framework, Suspendors also comes pre installed with a vertical masonry layout.
- `<s-masonry>` The containing tag of the masonry layout
    * `<... cols-bp-x>` sets the number of columns
        * modifier for x is 1-12
    * `<... gap-bp-x>` sets the gap for the columns, sizing is identical to the gutters in `<s-row>`
        * modifiers for x are 1-5

## Utility Classes
Outside of the grid, Suspendors comes with a spattering of useful utility classes. By default, these can't also be set as attributes, however if you would like to instead be able to apply utility classes as attributes you can change the `$utility-as-attribute` scss variable to true.

### Volume
- `.vol-bp-x`/`[data-vol-bp-x]`/`[vol-bp-x]`
    - Sets the height of the element using javascript controlled height to limit scroll locking and jumping 
    - modifiers for x are 1-12
    - NOTE: this tag may be set as either a class or an attribute using either the `data-vol` on non-custom elements or without on custom elements, all three ways are scheduled to remain active for the time being.

### Padding
- `.p-bp-x` Padding All
- `.pt-bp-x` Padding Top
- `.pb-bp-x` Padding Bottom
- `.ps-bp-x` Padding Start
- `.pe-bp-x` Padding End
- `.px-bp-x` Padding X
- `.py-bp-x` Padding Y
    * Modifiers for `x` are 0-5

### Margin 
- `.m-bp-x` Margin All
- `.mt-bp-x` Margin Top
- `.mb-bp-x` Margin Bottom
- `.ms-bp-x` Margin Start
- `.me-bp-x` Margin End
- `.mx-bp-x` Margin X
- `.my-bp-x` Margin Y
    * Modifiers for `x` are 0-5

### Flexbox

- `.flex-bp-row` Implements display flex with flex-row
- `.flex-bp-col` Implements display flex with flex-col
- `.grow-bp-1` Implements flex-grow: 1;
- `.align-bp-x`/`.align-items/content-bp-x` Sets flex alignment
    * Modifiers for `x`:
    *  `-start`
    * `-end`
    * `-center`
    * `-between`
    * `-around`
    * `-even`
- `.justify-bp-x`/`.justify-items/content-bp-x` Sets flex justify
    * Modifiers for `x`:
    *  `-start`
    * `-end`
    * `-center`
    * `-between`
    * `-around`
    * `-even`
- `.grow-bp-1` sets the flex grow to 1

### Other Utility Classes

- `.fill-bp` sets height and width to 100% and grow to 1
- `.fill-bp-x` sets width to 100%
- `.fill-bp-y` sets height to 100%
- `.d-bp-none` sets element to display none
- `.d-bp-flex` sets element to display flex
- `.d-bp-block` sets element to display block
    - as of 1.6.1 all display ustility classes are set to !important
- `.e-bp-x` adds a box shadow to the element
    - NOTE - `.elevation-bp-x` slated for removal as of 1.6.1 

## Skeleton Loader

Suspendors, as of 1.6.1 comes with a built in skeleton loader. By default, the loader will only apply under 2 circumstances, either if the element is completely empty (including white space) or if the element contains an element with the `data-src` attribute applied to it and will continue to apply until that attribute is removed. 

The skeleton loader will do a few things: First, it will give a minimum display height set to `16px`. Last it will apply one of 3 types of loader backgrounds: the default that will just apply a background to the loading element, circle which will fill the element with the largest circle it can, and as bars which will apply 4 bars to the element like unloaded text.

To apply the skeleton loader to an element you can either use one of the listed names as either a class name, an unmodified attribute (for elements like the `<s-col-x>` tags) or with a `data-` modifier for all default tags (like in a div). It isn't recommended to apply a skeleton loader to an element with an inline default (like spans), since you need height and width to display the loading element. 

- `skeleton`
- `skeleton-circle`
- `skeleton-bars`

## Other Implementations

In addition to the utility and grid classes, Suspendors also comes with some custom units to be used in custom styles. These units are what the grid uses for its own styles and are activated by the `suspendors.setup()` function, and when used properly will stop the locking and jumping issues from standard vh and vw units. 
    
    NOTE - If suspendors.setup() does not run either because dom never finished loading or was never called, these units default to vh/vw units respectively and scroll locking and jumping will continue to occur.

- `vol(x)` works exactly like `.vol-x`
- `col(x)` works exactly like `.col-x`
    * Both `vol(x)` & `col(x)` only work with values 1-12, any other values are liable to break the grid system.
    * Neither `vol(x)` & `col(x)` implement breakpoint logic
- `height(x)` works exactly like `lvh` but across everything using absolute pixel values and logic to fix scroll locking and jumping
- `width(x)` works exactly like `lvw` but uses absolute pixel values
- `pad(x)` works exactly like `.p-x`
- `mar(x)` works exactly like `.m-x`

</p> 

## Using the Javascript Events

<p>

If you are looking to utilize the Events of Suspendors, you have 2 options, either to set up an event listener, or use the `registrar` module (currently in beta) to register the functions you want to call at each breakpoint. 

The event names you can listen to are as follows:

- `sm`
- `md`
- `lg`
- `xl`
- `xxl`
- `over`*
- `under`*
- `portrait`
- `landscape`

<br/>

    * NOTE - that the over and under events are dependant on the mode of suspendors set by the minmax variable. By default minmax is set to min-width, which sets the behavior of the grid to use min-width to determine its breakpoints and apply the -bp classes when ABOVE the breakpoint. You can configure this behavior by setting the minmax variable to the chosen value. 

To set up an event listener use standard javascript event listener syntax like this:


`window.addEventListener("sm", (e) => {function}, false)`

</p>

<p>

Once you have your event listeners set up you can either have your project wait to call them, or at any point check with suspendors to call the events using the following:

- `suspendors.triggerAll()`
- `suspendors.triggerOrientation()`
- `suspendors.triggerScreen()`


You can also get the environment with some callback functions that will return the breakpoint or orientation accordingly:

- `suspendors.returnScreen()`
- `suspendors.returnOrientation()`
</p>

## Modules
As of 1.6.1 2 modules are currently in beta: Loaders and Registrar. 

The Registrar module allows you to call `registrar.bp(function)` where bp is the breakpoint you want to initiate your code and the function is the code you want to run.

The other module in beta is the loaders module. The loaders module currently has 2 functions (names subject to change) `loaders.loadAllImg()` which will find all img tags with a `data-src` attribute applied and lazy load them in as well as `loaders.loadAllImgInId(id)` which will take an element id and look for all images within it and lazy load all of them with a `data-src` attribute applied. Note that any img element with a `data-src` attribute applied will have a skeleton loader applied until the script finishes loading the img so make sure this function is called whenever a new element with that attribute is generated.

## Changelog

- 1.2 - Implemented callbacks for Javascript Events
- 1.3 - changed callbacks to be triggered at breakpoints instead of at every screen size change. 
    * 1.3.2:
        * Added `.flex-col` support to rows
        * Added `setupSizerOnly()` as a function to bypass `setup()` if you only the grid to function and didn't want the callbacks to trigger.
- 1.4 - changed listeners from `clip_` to `tie_` for future features
    * 1.4.1
        * Fixed bug with functions not being called after load
        * Added auto start for event broadcasters
        * Added in manual triggers for event broadcasters
        * Added return functions that return the breakpoint and orientation state
    * 1.4.2
        * Cleaned up code, fixed mistake on var file still having dev enabled
    * 1.4.3
        * added `cvh-X` and `cvw-X` utility classes
    * 1.4.4
        * fixed bug where styles would not dynamically apply and override the previous breakpoint
    * 1.4.5
        * changed default background color to 000 to make rotations on mobile look better
        * fixed bug where iphone would not update vh appropriately
        * renamed custom scss units to `tie_` to better match the naming convention of the javascript names
        * renamed the `cvh-X` & `cvw-X` utility classes to `vh-X` and `vw-X` for better naming conventions
        * added tie_p & tie_m as units based on gutter variable that can be used in custom styles with values identical to p-x and m-x utility classes
        * changed the padding calcs from 1/6 to 1/5 to eliminate padding/margin jump on p-4 to p-5
    * 1.4.6
        * changed variables from json file to js file for expandability in the future
- 1.5 - Module support added
    * 1.5.1
        * fixed glitch with `:root` elements making duplicates from `@import`
        * changed `gutter` to `spacer` for better naming conventions
        * fixed glitch with event listeners not removing themselves properly
        * fixed glitch where `minmax` variable being set to 'min-width' would not change behavior to match bootstraps
        * fixed oversight where return functions would return incorrectly or nothing
        * added gutter logic,`.g-bp-x` styles for `.row` classes
            * all gutter classes are responsive to screen size like all other sizes
        * added the `.cols-x` class to rows to make all child `.col` elements into appropriate col-x classes
        * changed `.vh` class to `.vol` for more pleasing syntax
            * expanded the `.vol` class to use same conventions of `.col` with a 1-12 convention instead of a percent conversion
        * added `container-bp`,`container-solid`, and `container-shift`
        * removed `.vw` class as it conflicted with the `.col` classes and is irrelevant with `.fill` for the most part
        * added `.elevation`/`.e` and `.order`/`.o` classes
        * changed sass functions to different names for better readability
            * `tie_` prefix removed
            * `vh` now called `vol` or `height` for better naming conventions
            * `tie_p` now called `pad`
    * 1.5.2
        * All grid classes changed to also support custom tags, Grid classes scheduled to be eliminated in 1.6.1
- 1.6 - Custom HTML Grid Classes
    * 1.6.1
        * grid classes changed to custom tags (see usage notes)
        * `.elevation-bp-x` removed, now just `.e-bp-x`
        * implemented responsive text, margin and padding.
    * 1.6.2
        * Added vertical masonry layout option
        * added `round-` classes to utility classes 
    * 1.6.3
        * Fixed issue with display block on skeleton classes interfering with implementation
    * 1.6.4
        * changed package file structure for more support in tree shaking and bundling
        * added support for modals (see implementation details) 
