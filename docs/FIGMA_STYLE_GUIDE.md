# Figma Style Guide

This guide documents the Figma-specific classes and configurations implemented in the project.

## Tailwind CSS Configuration

### Fonts
- `font-figtree` - Figtree (400, 500, 600)
- `font-manrope` - Manrope (400, 500, 600, 700)
- `font-roboto-mono` - Roboto Mono (400)
- `font-ibm-plex` - IBM Plex Sans (400, 500, 600, 700)

### Colors
- `accent-1` - #5C4F3A (Accent/Accent 1)
- `accent-3` - #AAE8FD (Accent/Accent 3)
- `background-1` - #461A4C (Background/Background 1)
- `background-2` - #FFFFFF (Background/Background 2)
- `background-3` - #EDEDED (Background/Background 3)
- `background-4` - #AAE8FD (Background 4)
- `background-5` - #777777 (Background 5)
- `text-heading` - #394508 (Text/Heading)
- `text-paragraph` - #777777 (Text/Paragraph 2)
- `text-black` - #000000
- `text-white` - #FFFFFF
- `divider` - #E9E9E9 (Divider Lines)
- `link-default` - #D2FD9C (Link default)
- `link-hover` - #77EDFF (Link hover)
- `purple-figma` - #5C137E (Figma-specific Purple)

### Spacing
- `figma-xs` - 8px
- `figma-sm` - 10px
- `figma-md` - 14px
- `figma-lg` - 17px
- `figma-xl` - 20px
- `figma-2xl` - 22px
- `figma-3xl` - 24px
- `figma-4xl` - 30px
- `figma-5xl` - 50px
- `figma-6xl` - 74px
- `figma-7xl` - 100px

### Dimensions
- `figma-container` - 1200px
- `figma-content` - 1160px
- `figma-button` - 133.33px
- `figma-icon` - 30px
- `figma-image` - 174px

### Heights
- `figma-container` - 2226.95px
- `figma-label` - 62px
- `figma-button` - 120px
- `figma-icon` - 30px
- `figma-image` - 174px
- `figma-text` - 14px
- `figma-heading1` - 38px
- `figma-heading2` - 31px
- `figma-heading3` - 22px
- `figma-paragraph` - 17px
- `figma-link` - 13px

### Typography
- `text-figma-xs` - 11.5px (115% line-height, -0.02em letter-spacing)
- `text-figma-sm` - 12px (120% line-height, -0.02em letter-spacing)
- `text-figma-base` - 16px (109.01% line-height)
- `text-figma-lg` - 20px (109.01% line-height, -0.02em letter-spacing)
- `text-figma-xl` - 28px (109.01% line-height, -0.02em letter-spacing)
- `text-figma-2xl` - 36px (105.81% line-height, -0.02em letter-spacing)

### Borders
- `border-figma-thin` - 1px
- `border-figma-medium` - 2px
- `rounded-figma-sm` - 4px
- `rounded-figma-md` - 5px
- `rounded-figma-lg` - 10px
- `rounded-figma-xl` - 20px

## Component Classes

### Main Container
```html
<div class="figma-container">
  <!-- Main content -->
</div>
```

### Typography
```html
<h1 class="figma-heading-1">Heading 1</h1>
<h2 class="figma-heading-2">Heading 2</h2>
<h3 class="figma-heading-3">Heading 3</h3>
<p class="figma-paragraph">Paragraph text</p>
<a class="figma-link">Link text</a>
<label class="figma-label">Label text</label>
```

### Buttons
```html
<button class="figma-button-default">
  <div class="figma-icon"></div>
  <span class="figma-button-text">Button Text</span>
</button>

<button class="figma-button-hover">
  <div class="figma-icon"></div>
  <span class="figma-button-text">Button Text</span>
</button>
```

### Links
```html
<a class="figma-link-default">Default Link</a>
<a class="figma-link-hover">Hover Link</a>
```

### Icons
```html
<div class="figma-icon"></div>
```

### Images
```html
<div class="figma-image"></div>
<a class="figma-image-link">Image Link</a>
```

### Dividers
```html
<div class="figma-divider">
  <span>Section Title</span>
</div>
```

### Color Samples
```html
<div class="figma-color-purple"></div>
<div class="figma-color-white"></div>
<div class="figma-color-background-1"></div>
<div class="figma-color-accent-3"></div>
<div class="figma-color-background-5"></div>
<div class="figma-color-black"></div>
```

## Responsive Utilities

```html
<div class="desktop-only">Only visible on desktop</div>
<div class="mobile-only">Only visible on mobile</div>
```

## Full Usage Example

```html
<div class="figma-container">
  <!-- Section divider -->
  <div class="figma-divider">
    <span class="figma-label">Text Styles</span>
  </div>
  
  <!-- Text content -->
  <div class="flex flex-col gap-figma-5xl w-figma-content h-[321px]">
    <h1 class="figma-heading-1">Heading 1</h1>
    <h2 class="figma-heading-2">Heading 2</h2>
    <h3 class="figma-heading-3">Heading 3</h3>
    <p class="figma-paragraph">Paragraph text</p>
    <a class="figma-link">Link text</a>
  </div>
  
  <!-- Section divider -->
  <div class="figma-divider">
    <span class="figma-label">Color</span>
  </div>
  
  <!-- Color palette -->
  <div class="flex gap-figma-lg">
    <div class="figma-color-purple"></div>
    <div class="figma-color-white"></div>
    <div class="figma-color-background-1"></div>
    <div class="figma-color-accent-3"></div>
    <div class="figma-color-background-5"></div>
    <div class="figma-color-black"></div>
  </div>
  
  <!-- Section divider -->
  <div class="figma-divider">
    <span class="figma-label">Buttons</span>
  </div>
  
  <!-- Buttons -->
  <div class="flex gap-figma-2xl">
    <button class="figma-button-default">
      <div class="figma-icon"></div>
      <span class="figma-button-text">Button</span>
    </button>
    <button class="figma-button-hover">
      <div class="figma-icon"></div>
      <span class="figma-button-text">Button</span>
    </button>
  </div>
</div>
```

## Important Notes

1. **Fonts**: Make sure the fonts are loaded correctly.
2. **Dimensions**: Dimensions are based on the 1200px wide Figma design.
3. **Responsive**: Use the `desktop-only` and `mobile-only` classes to control visibility.
4. **Colors**: All colors match the Figma palette exactly.
5. **Spacing**: Spacing is based on the Figma scale.

## Main Container Structure

The main Figma container has the following properties:
- `display: flex`
- `flex-direction: column`
- `align-items: flex-start`
- `padding: 30px 20px 100px`
- `gap: 74px`
- `position: relative`
- `width: 1200px`
- `height: 100%`
- `background: #FFFFFF`

This is implemented with the `figma-container` class. 