daptive timer for the site "Black Friday" using html, css, javascript. Easy to integrate and customize to fit your needs.

# Set date

You can set the date in the attribute: **data-timer-time**

### Example

`<div class="web-timer-black-friday" data-timer-time="`**2019.11.07 22:02:3+03:00**`">`

# Resize

In the tag _class="web-timer-black-friday"_ add class _web-timer-black-friday_size-big_

### Example

`<div class="web-timer-black-friday web-timer-black-friday_size-big">`

# Template

In the tag _class="web-timer-black-friday"_ add class:

_**web-timer-black-friday_black-cyan**_ (Black and cyan)

_**web-timer-black-friday_red-white**_ (Red and white)

_**web-timer-black-friday_black-white**_ (Black and white)

### Example
`<div class="web-timer-black-friday web-timer-black-friday_black-cyan">`

`<div class="web-timer-black-friday web-timer-black-friday_red-white">`

`<div class="web-timer-black-friday web-timer-black-friday_black-white">`

# Configuration

You may or may not show the button to close the timer. At the same time, you can indicate whether you want the banner to close forever or appear again when the page is refreshed

**In web-timer-black-friday.js**

configuration = {
            closeButton: true, //Show button to close
            closeSave: true, //Save banner close
            }
