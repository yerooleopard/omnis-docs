# Page Builder

Omnis Theme is compatible and fully integrated with [WPBakery Page Builder](/docs/plugins.html#wpbakery-page-builder-64) which is the most popular WordPress drag and drop page builder. It allows you to build any layout you can imagine with no programming knowledge.

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

::: wrapper One Column (Span 12) Row Structure Example

``` php
[vc_row][vc_column][/vc_column][/vc_row]
```

---

![vc_row](/omnis-docs/images/page-builder/vc-row.jpg)
:::

##### Row Settings

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
*Row Responsive Settings*

:::

#### Columns - [vc_column]

Each Row Shortcode is built with **columns**. Grid columns are created by specifying the number of **12** available columns you wish to span. For example, three equal columns would use three *span-4*.

##### Columns Settings

::: grid 3

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings.jpg)
*Column General Settings*

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings-styling.jpg)
*Column Styling Settings*

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings-css.jpg)
*Column CSS Settings*

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings-responsive.jpg)
*Column Responsive Settings*

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings-animations.jpg)
*Column Animations Settings*

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings-hover.jpg)
*Column Hover Settings*

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

Section shortcode is a shortcode that can wrap *Rows* into groups. It allows to set options like background (color or/and image) and skin for all Rows at once, but still, each *Row* inside section can have a separate background.
 
::: wrapper Section Structure with Two Rows Example

``` php
[vc_section][vc_row][vc_column width="1/2"][/vc_column][vc_column width="1/2"][/vc_column][/vc_row][vc_row][vc_column][/vc_column][/vc_row][/vc_section]
```

---

![vc_section](/omnis-docs/images/page-builder/vc-section.jpg)
:::

##### Section Settings

::: grid 3

![Section Settings](/omnis-docs/images/page-builder/vc-section_settings.jpg)
*Section General Settings*

![Section Settings](/omnis-docs/images/page-builder/vc-section_settings-styling.jpg)
*Section Styling Settings*

![Section Settings](/omnis-docs/images/page-builder/vc-section_settings-animations.jpg)
*Section Animations Settings*

![Section Settings](/omnis-docs/images/page-builder/vc-section_settings-css.jpg)
*Section CSS Settings*

![Section Settings](/omnis-docs/images/page-builder/vc-section_settings-responsive.jpg)
*Section Responsive Settings*

:::

#### Section Animations

Section shortcode comes with unique feature like Section Scroll Animations - it is a great way to catch your website visitors attention.

###### Section Scroll Animation Examples

- [Pinned / Scaled Down & Blurred Out Hero](https://demo.loprd.pl/omnis/home/page-classic-agency-studio/) 
- [Fade Out Hero](https://demo.loprd.pl/omnis/home/home-portfolio-featured/) 
- [Pinned Sections](https://demo.loprd.pl/omnis/home/home-stack/) 
- [Pushed Down Content](https://demo.loprd.pl/omnis/home/home-corporate/) 
- [Pinned / Pushed Down Loop](https://demo.loprd.pl/omnis/home/home-blog-grid/) 
- [Blurred Out Content](https://demo.loprd.pl/omnis/blog-one-column/) 
- [Pinned / Dimmed in Background Page Title](https://demo.loprd.pl/omnis/blog-grid-baseline/) 
- [Pinned Title Bar](https://demo.loprd.pl/omnis/dp/give-us-any-rule-well-break-it/?omnis_template=604) 
- [Pinned Title Bar (100% Height)](https://demo.loprd.pl/omnis/pages/page-about-grid/) 

### Fancy Heading/Text shortcode - [vc_custom\_heading]

Fancy Heading/Text shortcode is a great shortcode for creating all fancy texts or/and headers.

::: wrapper Fancy Header Example

``` php
[vc_row][vc_column][vc_custom_heading heading_text="Fancy Header"][/vc_column][/vc_row]
```

---

![vc_row](/omnis-docs/images/page-builder/vc-heading.jpg)
:::

##### Fancy Heading/Text Settings

::: grid 3

![Fancy Heading/Text Settings](/omnis-docs/images/page-builder/vc-heading_settings.jpg)
*Fancy Heading/Text General Settings*

![Fancy Heading/Text Settings](/omnis-docs/images/page-builder/vc-heading_settings-styling.jpg)
*Fancy Heading/Text Styling Settings*

![Fancy Heading/Text Settings](/omnis-docs/images/page-builder/vc-heading_settings-css.jpg)
*Fancy Heading/Text CSS Settings*

![Fancy Heading/Text Settings](/omnis-docs/images/page-builder/vc-heading_settings-animations.jpg)
*Fancy Heading/Text Animations Settings*

:::

#### Dynamic text / Built-in Shortcodes

Fancy Heading/Text Shortcode is a great tool to use Dynamic Content Shortcodes like `[omnis_title]` or `[omnis_breadcrumbs]`.

::: tip Info
[Click here to Read More about Dynamic Content Shortcodes](/docs/omnis-core.html#build-in-shortcodes)
:::

### Carousel Shortcode - [loprd_carousel]

Carousel Shortcode is a fantastic shortcode to *easily* convert your content into **slider**.

::: wrapper Carousel with Two Sliders Example

``` php
[vc_row][vc_column][loprd_carousel][loprd_carousel_column][/loprd_carousel_column][loprd_carousel_column][/loprd_carousel_column][/loprd_carousel][/vc_column][/vc_row]
```

---

![vc_row](/omnis-docs/images/page-builder/loprd-carousel-column.jpg)
:::

##### Carousel Settings

::: grid 3

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel_settings.jpg)
*Carousel General Settings*

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel_settings-styling.jpg)
*Carousel Styling Settings*

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel_settings-responsive.jpg)
*Carousel Responsive Settings*

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel_settings-animations.jpg)
*Carousel Animations Settings*

:::


#### Carousel Column - [loprd_carousel_columns]

Carousel Shortcode is build with **Carousel Column** Shortcodes which are converted into **Slides**. There is no limit to columns inside the shortcode.

##### Carousel Column Settings

::: grid 3

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel-column_settings.jpg)
*Carousel Column General Settings*

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel-column_settings-styling.jpg)
*Carousel Column Styling Settings*

![Column Settings](/omnis-docs/images/page-builder/vc-column_settings-css.jpg)
*Carousel Column CSS Settings*

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel_settings-responsive.jpg)
*Carousel Column Responsive Settings*

![Carousel Settings](/omnis-docs/images/page-builder/loprd-carousel_settings-animations.jpg)
*Carousel Column Animations Settings*

:::

###### Carousel Examples

- [Services Carousel](https://demo.loprd.pl/omnis/pages/page-services-creative/)
- [Demo Images Carousel](https://demo.loprd.pl/omnis/#demos)
- [Team Bio Carousel](https://demo.loprd.pl/omnis/home/home-agency/)
- [App Images Carousel with Titles](https://demo.loprd.pl/omnis/home/home-mobile-app-landing/)
- [Restaurant Description - Centered Looped Carousel](https://demo.loprd.pl/omnis/home/home-restaurant/)
- [Restaurant Menu - Nested Carousel](https://demo.loprd.pl/omnis/home/home-restaurant/)

### Loop Shortcode - [loprd_loop]

::: warning INFO
[Click here to read more about Loop Shortcode](/docs/loop-shortcode/)
:::