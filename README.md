![Screenshot](screenshot.png "bootstrap-spin.js")

Very simple, fast and lightweight (> 3K) jQuery plugin with Bootstrap support for number input more user-friendly.
This is an improved version of a wpic's [bootstrap-number-input](https://github.com/wpic/bootstrap-number-input).

## Usage

Add `input` element with `type="number` into your HTML-code with `value`, `min`, `max` and `step` (optional) attributes:

```html
<input class="form-control" type="number" value="1" min="1" max="10" />
```

Initialize plugin with

```javascript
$(selector).bootstrapNumber({
	center: true/false,
	upClass: 'class-name' (success/primary/danger/warning/default),
	downClass: 'class-name' (success/primary/danger/warning/default),
	useStaticMarkup: true/false
});
```

The `useStaticMarkup` option allows you to use generated plugin's markdown instead of simple `input`-element.

```html
<div class="input-group">
    <span class="input-group-btn">
        <button type="button" class="btn btn-danger">-</button>
    </span>
    <input id="colorful" class="form-control" type="text" value="1" min="1" max="10">
    <span class="input-group-btn">
        <button type="button" class="btn btn-success">+</button>
    </span>
</div>
```