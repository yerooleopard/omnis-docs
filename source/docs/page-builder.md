# Page Builder

Omnis Theme is compatible and fully integrated with [WPBakery Page Builder](/docs/plugins.html#wpbakery-page-builder-64) which is most popular WordPress drag and drop page builder. It allows you to build any layout you can imagine with no programming knowledge.

With theme comes many unique customized shortcodes like [Loop](/docs/loops-creation/) or [Carousel](#carousel-shortcode).

###### Table of content

[[toc]]

## How to use Page Builder

To enable Page Builder go to **Page Edit** (also work for Posts, Portfolio, Product Pages and more) and click **WPBakery Page Builder** Button (Gutenberg Mode), or **Backend Editor** Button (Classic Mode).

::: grid auto
![Page Builder in Gutenberg Mode](/omnis-docs/images/page-builder/page-builder_enable-gutenberg.jpg)
*Page Builder Button in Gutenberg Mode*

![Page Builder in Classic Mode](/omnis-docs/images/page-builder/page-builder_enable-classic.jpg)
*Page Builder Button in Classic Mode*
:::

![Page Builder in Classic Mode](/omnis-docs/images/page-builder/page-builder_editor.jpg)
*Page Builder Editor*

## Shortcodes

Omnis Theme comes with a *custom made*, *specially tailored and styled* WPBakery Page Builder **shortcodes**.

![Shortcodes](/omnis-docs/images/page-builder/shortcodes.jpg)
*List of shortcodes available in Omnis Theme*

### Row shortcode - [vc_row]

[vc_row] is a basic content structural shortcode. It is a wrapper for *Content* all other *Shortcodes* (except [Section Shortcode](#section-shortcode-vc-section)).

::: wrapper Basic Row Structure

``` php
[vc_row][vc_column][/vc_column][/vc_row]
```

---

![vc_row](/omnis-docs/images/page-builder/vc-row.jpg)
:::

###### Row Settings

::: grid 3

![Row Settings](/omnis-docs/images/page-builder/vc-row_settings.jpg)
*Row General Settings*

![Row Settings](/omnis-docs/images/page-builder/vc-row_settings-styling.jpg)
*Row Styling Settings*

![Row Settings](/omnis-docs/images/page-builder/vc-row_settings-animation.jpg)
*Row Animations Settings*

![Row Settings](/omnis-docs/images/page-builder/vc-row_settings-css.jpg)
*Row CSS Settings*

![Row Settings](/omnis-docs/images/page-builder/vc-row_settings-responsive.jpg)
*Row Responsiveness Settings*

:::

#### Rows Gaps/Paddings behavior in Site Layout

Row Shortcodes comes with special Gaps/Paddings behavior. When two or more **[vc_row]** shortcodes next to each other with no background (color or image) set, they 'collapse' with only singular gap/padding.

::: grid 2

![Row Paddings](/omnis-docs/images/page-builder/vc-row_paddings-example.jpg)
*Rows with content Example*

![Row Settings](/omnis-docs/images/page-builder/vc-row_paddings.jpg)
*Rows Padding/Gap behavior*

:::

::: tip INFO
You can force specific behavior for selected rows or group them with [Section Shortcode](#section-shortcode-vc-section) to separate them from collapsing.
:::

### Section shortcode - [vc_section]

#### Section Animations

### Fancy Heading/Text shortcode - [vc_heading]

### Carousel Shortcode - [loprd_carousel]

### Loop Shortcode - [loprd_loop]

::: warning INFO
[Click here to read more about Loop Shortcode](/docs/loop-shortcode/)
:::