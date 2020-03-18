# Loop Shortcode

Omnis Theme includes advanced loop shortcode, which allows creating an unlimited amount of post/project/product/page grids with many different layouts and settings.

###### Table of content

[[toc]]

## Loop - [loprd_loop]

::: wrapper Basic Loop Shortcode

``` php
[vc_row][vc_column][loprd_loop][/vc_column][/vc_row]
```

---

![loprd_loop](/omnis-docs/images/loop/loprd-loop.jpg)
:::

##### Loop Settings

::: grid 3

![Loop Settings](/omnis-docs/images/loop/loprd-loop_settings.jpg)
*Loop General Settings*

![Loop Layout](/omnis-docs/images/loop/loprd-loop_settings-layout.jpg)
*Loop Layout Settings*

![Loop Styling](/omnis-docs/images/loop/loprd-loop_settings-styling.jpg)
*Loop Styling Settings*

![Loop Filters](/omnis-docs/images/loop/loprd-loop_settings-filters.jpg)
*Loop Filters Settings (enabled)*

![Loop Expand](/omnis-docs/images/loop/loprd-loop_settings-expand.jpg)
*Loop Expand Settings*

![Loop Animations](/omnis-docs/images/loop/loprd-loop_settings-animations.jpg)
*Loop Animations Settings*

![Loop Images](/omnis-docs/images/loop/loprd-loop_settings-images.jpg)
*Loop Images Settings*

![Loop CSS](/omnis-docs/images/loop/loprd-loop_settings-css.jpg)
*Loop CSS Settings*

:::

### Loop Query Settings

Loop shortcodes comes with **advanced query settings**. You can arrange grid by Custom Post Types (default: Posts), categories, tags, taxonomies or even by singular posts or authors.  
Advances Loop Settings include options like *offset* - which is number of post to displace or pass over and *Exclude displayed posts* - which is great for pages with multiple loops - it ommit already displayed items.

![Loop Query](/omnis-docs/images/loop/loprd-loop_query.jpg)

### Pagination

Ominis Loop Shortcode include extensive paginations settings. You can select from a few different options:

- Classic Pagination
- Classic Pagination (ajax) - item loaded withou reloading page
- Infinite Pagination - items appends to grid
- Paginate for Filters - allow to [filter](#filters) items from all query data

![Loop Pagination](/omnis-docs/images/loop/loprd-loop_pagination.jpg)

### Filters

Filters enable **filter** list which to filter grid items by categories.

![Loop Filters](/omnis-docs/images/loop/loprd-loop_filters.jpg)

## Layouts

### Grid Layout

Omnis Loops includes four main grid layouts:

![Grid Layout](/omnis-docs/images/loop/loop_grid-layout.jpg)

###### Grid

- [Blog – One Column](https://demo.loprd.pl/omnis/blog-one-column/)
- [Blog – Grid (2 Cols)](https://demo.loprd.pl/omnis/blog-grid-2-cols/)
- [Blog – Grid Equal](https://demo.loprd.pl/omnis/blog-grid-equal/)
- [Blog – Grid Baseline (5 Cols)](https://demo.loprd.pl/omnis/blog-grid-baseline/)
- [Blog – Grid Centered (2 Cols)](https://demo.loprd.pl/omnis/blog-grid-centered-2-cols/)
- [Blog – Grid Centered (3 Cols)](https://demo.loprd.pl/omnis/grid-centered/)
- [Blog – Reveal Thumb](https://demo.loprd.pl/omnis/blog-reveal-thumb/)
- [Blog – Grid Slim](https://demo.loprd.pl/omnis/blog-grid-slim/)
- [Blog – Minimal/Classic One Column](https://demo.loprd.pl/omnis/blog-minimal-classic/)
- [Works – Grid Rounded](https://demo.loprd.pl/omnis/works-grid-rounded/)
- [Works – Wide Expanded Grid](https://demo.loprd.pl/omnis/works-wide-expanded-grid/)
- [Works – Simple Grid](https://demo.loprd.pl/omnis/works-simple-grid/)

###### Masonry

- [Blog – Default](https://demo.loprd.pl/omnis/blog-default/)
- [Blog – Classic Masonry](https://demo.loprd.pl/omnis/blog-classic-masonry/)
- [Blog – Masonry Wide](https://demo.loprd.pl/omnis/blog-masonry-wide/)
- [Blog – Masonry Large/Full (2 Columns)](https://demo.loprd.pl/omnis/blog-masonry-large-full-2-columns/)
- [Blog – Side Masonry Thumbnails](https://demo.loprd.pl/omnis/blog-side-masonry-thumbnails/)
- [Works – Masonry Metro](https://demo.loprd.pl/omnis/works-masonry-metro/)

###### Slider

- [Blog – Slider (3 Cols)](https://demo.loprd.pl/omnis/blog-slider-3cols/)
- [Blog – Slider Overlapped](https://demo.loprd.pl/omnis/blog-slider-overlapped/)
- [Blog – Slider Tall](https://demo.loprd.pl/omnis/blog-tall/)
- [Works – Slider Scaled](https://demo.loprd.pl/omnis/works-slider-scaled/)

###### Textual

- [Blog – Textual Inline](https://demo.loprd.pl/omnis/blog-textual-inline/)
- [Blog – Textual Block](https://demo.loprd.pl/omnis/blog-textual-block/)
- [Works – Textual Categories](https://demo.loprd.pl/omnis/works-textual-categories/)

### Post Layout

For Post Layout you can pick one of three options:

![Post Layout](/omnis-docs/images/loop/loop_post-layout.jpg)

###### Text under Image

- [Blog – Default](https://demo.loprd.pl/omnis/blog-default/)
- [Blog – Grid Equal](https://demo.loprd.pl/omnis/blog-grid-equal/)

###### Text over Image

- [Blog – Side Masonry Thumbnails](https://demo.loprd.pl/omnis/blog-side-masonry-thumbnails/)
- [Works – Masonry Metro](https://demo.loprd.pl/omnis/works-masonry-metro/)
- [Blog – Reveal Thumb](https://demo.loprd.pl/omnis/blog-reveal-thumb/)

###### Lateral - Image and Text in a Row

- [Blog – Lateral Blocks](https://demo.loprd.pl/omnis/blog-lateral-blocks/)
- [Blog – Lateral Large Thumb](https://demo.loprd.pl/omnis/blog-lateral-large-thumb-dark/)
- [Blog – Lateral Wide](https://demo.loprd.pl/omnis/blog-lateral-wide/)
- [Blog – Simple w/Large Heading](https://demo.loprd.pl/omnis/blog-simple-w-large-heading/)

### Content Layout

There is also extended options for content layout. You can easily pick which elements you want to display inside grid item and arrange them in desired order.

![Content Layout](/omnis-docs/images/loop/loop_content-layout.jpg)

::: tip Post Meta
Post meta items supports built-in shortcodes.

[Read more about built-in shortcodes.](/omnis-docs/docs/omnis-core.html#build-in-shortcodes)
:::

### Expanded Items

Omnis Loops include unique feature - **expanded items**. It allows you to **feature** selected items in a grid, for example make selected items wider or larger.  

Items can be select items to be expanded in two ways - by [Selector](#selector) or by **Page Options**.

::: grid 2

![Expand in Page Options](/omnis-docs/images/loop/loop_expand-page-opt.jpg)
*Expand in Page Options*

![Selector](/omnis-docs/images/loop/loop_expand-selector.jpg)
*Selector*

:::

#### Selector

With selector you can pick single item, selected items or more by using special formula known from CSS *:nth-child()* selector - `(an + b)` where a represents a cycle size, n is a counter (starts at 0), and b is an offset value.

Selector formula examples:

::: wrapper First Item Only
`1`
:::

::: wrapper First Three Items
`1,2,3`
:::

::: wrapper Even Items
`2n`
:::

::: wrapper Odd Items
`2n+1`
:::

::: wrapper Every Third Item
`3n`
:::

::: wrapper Every Third Item starting from First
`3n+1`
:::

###### Grids with expanded items

- [Blog – Reveal Thumb](https://demo.loprd.pl/omnis/blog-reveal-thumb/)
- [Blog – Classic Masonry](https://demo.loprd.pl/omnis/blog-classic-masonry/)
- [Blog – Masonry Wide](https://demo.loprd.pl/omnis/blog-masonry-wide/)
- [Blog – Slider Overlapped](https://demo.loprd.pl/omnis/blog-slider-overlapped/)
- [Works – Wide Expanded Grid](https://demo.loprd.pl/omnis/works-wide-expanded-grid/)
- [Works – Masonry Metro](https://demo.loprd.pl/omnis/works-masonry-metro/)