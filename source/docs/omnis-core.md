# Omnis Core

Main Omnis Theme plugin required to fully use all the theme features.

::: wrapper Omnis Core plugin contains features like:  
[Theme Options](/docs/options/)  
[Templates](/docs/templates/)  
[Elements](/docs/elements/)  
[Mega Menu](/docs/menus.html#mega-menu)  
[Menu Items](/docs/menus.html#menu-items)  
[Dynamic Data Shortcodes](/docs/omnis-core.html#dynamic-data-shortcodes)  
[Image Optimization](/docs/image-optimization/)  
:::

###### Table of content

[[toc]]

## Dynamic Data Shortcodes

Dynamic Data Shortcodes allows you to create dynamic data content for [Templates](/docs/templates.html) or for [Loops](/docs/loop-shortcode.html) meta data.

::: wrapper [omnis_title]


``` php
[omnis_title anchor="false" force="false" class="" before="" after=""]
```

---

Display the title of a current page. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *anchor* - display title with a hyperlink to this title page. Default: false.
- *force* - force displaying current title page for items inside "search" or "archive" loop (instead of "Archive/Search" title). Default: false;
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_subtitle]


``` php
[omnis_subtitle anchor="false" class="" before="" after=""]
```

---

Display subtitle of a page (if set in [Page Options](/docs/options.html#page-options)).

###### Options

- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_permalink]


``` php
[omnis_permalink title="Read more" class="" before="" after=""]
```

---

Display hyperlink for a page with custom text. Can be used as a "Read more" hyperlink for the [Loop Shortcode](/docs/loop-shortcode.html) meta data.

###### Options

- *title* - text of a hyperlink. Default: "Read more".
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_cats]

``` php
[omnis_cats separator=" – " class="" before="" after=""]
```

---

Display categories list for a current post/page. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *separator* - separator between categories. E.g. "Category 1 - Category 2". Default: " - ".
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_cats]

``` php
[omnis_tags button="true" separator=", " before="" after="" btn="" class=""]
```

---

Display tag list for a current post/page. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *button* - true/false - display each tag as individual button. Default: true.
- *separator* - separator between tags (doesn't work with "btn" option enabled). E.g. "Tag, Another Tag". Default: ", ".
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.
- *btn* - tags default buttons type E.g. color:btn-light,type:btn-outlined,size:btn-sm *Available properties: color:(btn-light,btn-dark), size:(btn-xs,btn-sm,btn-md,btn-lg), type:(btn-outlined,btn-link), width:btn-block, extra:YOUR_CUSTOM_CLASS*.  Default: "";
- *class* - Adds a custom class for this shortcode.

:::

::: wrapper [omnis_date]

``` php
[omnis_date time="false" anchor="true" ago="false" class="" before="" after=""]
```

---

Display "created at" date for a current page/post. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *time* - true/false - also display time. Default: false;
- *anchor* - display date as a hyperlink. Default: true;
- *ago* - display date as a "time elapsed" format (E.g. 2 weeks ago). Default: false;
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_comments]

``` php
[omnis_comments class="" before="Comments: " after=""]
```

---

Display comments number for a current page/post. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: "Comments: ".
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_author]

``` php
[omnis_author anchor="true" avatar="true" class="" before="" after=""]
```

---

Display the author's name of a current page/post. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *anchor* - display name as a hyperlink for an author page. Default: true;
- *avatar* - display author's avatar before name. Default: true;
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_author_meta]

``` php
[omnis_author_meta field="description" class="" before="" after=""]
```

---

Display the author's selected meta data of a current page/post. Great for displaying author's description as well as any other [author meta data](https://developer.wordpress.org/reference/functions/get_the_author_meta/)

###### Options

- *field* - a name of a field to be displayed. [Fields list](https://developer.wordpress.org/reference/functions/get_the_author_meta/). Default: "description".;
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_avatar]

``` php
[omnis_avatar size="80" anchor="true" class="" before="" after=""]
```

---

Display the author's avatar of a current page/post.

###### Options

- *size* - avatar image size in px. Default: 80;
- *anchor* - display avatar as a hyperlink for the author's page. Default: true;
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::


::: wrapper [omnis_current_year]

``` php
[omnis_current_year]
```

---

Display the current year. Great for website footer copyright notice text.  
*E.g. © Copyrights [omnis_current_year]. All Right Resevered.*

:::

::: wrapper [omnis_site_info]

``` php
[omnis_site_info show="name" class="" before="" after=""]
```

---

Display information about the current site as site name or tagline.

###### Options

- *show* - field name to display. [List of Fields](https://developer.wordpress.org/reference/functions/get_bloginfo/). Default: "name";
- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_reading_time]

``` php
[omnis_reading_time class="" before="" after=""]
```

---

Display reading time for a current post/page. Can be used as a meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *class* - Adds a custom class for this shortcode.
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

push
::: wrapper [omnis_text]

``` php
[omnis_text text="" class="" pull="" push=""]
```

---

Display simple text. Can be used as a simple text between meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *text* - Text to display.
- *class* - Adds a custom class for this shortcode.
- *pull* - true/false - If set and placed inside post meta data holder it disable left margin for this text holder.
- *push* - true/false - If set and placed inside post meta data holder it disable right margin for this text holder.

:::

## Templates Dynamic Data

::: wrapper [omnis_content]

``` php
[omnis_content content_behavior=""]
```

---

Allows to arrange post/page content in any place of [Template](/docs/templates.html#post-content-area) structure.

###### Options

- *content_behavior* - If set as "inner" it force display content as Column not Sections. Default: "";

:::

::: wrapper [omnis_shortcode_extra_content]

``` php
[omnis_shortcode_extra_content]
```

---

Allows to display Extra Content (if set in [Page / Advanced Page Options / Extra Content](/docs/options.html#page-options)) and arrange it in any place of [Template](/docs/templates.html#post-content-area) structure.

:::

::: wrapper [omnis_prevnext]

``` php
[omnis_prevnext layout="horizontal" alignment="left" class=""]
```

---

Display prev/next post for the current post/page.

###### Options

- *layout* - horizontal/vertical - display prev/next vertically (in one row) or horizontally. Default: "horizontal";
- *alignment* - left/right - set alignment for vertical layout. Default: "left";
- *class* - Adds a custom class for this shortcode.

:::

::: wrapper [omnis_breadcrumbs]

``` php
[omnis_breadcrumbs home="Home" blog="Blog" archive="Archive" search="Search" separator=" / " class="omnis-breadcrumbs" element="ul" before="" after=""]
```

---

Display breadcrumbs for the current page.

###### Options

- *home* - Title for the Home (front page) link. Default: "Home";
- *blog* - Title for the blog home page. Default: "Blog";
- *archive* - Title for the archive page. Default: "Archive";
- *search* - Title for the search page. Default: "Search";
- *separator* - Seperator to use between each crumb (string or false). Default: " / ";
- *class* - The class(es) applied to the wrapper element. Default: "omnis-breadcrumbs"
- *element* - div/nav/ol/ul - The HTML element to use. Default: "ul;
- *before* - Display custom text before shortcode. Default: empty.
- *after* - Display custom text after shortcode. Default: empty.

:::

::: wrapper [omnis_share]

``` php
[omnis_share type="box" box_text="" list_type="icons" list_direction="horizontal" list_colors="true" btn="" display="" class=""]
```

---

Display the most popular social share buttons. Can be used as an meta data for [Loop Shortcode](/docs/loop-shortcode.html).

###### Options

- *type* - box/list - Display share as a List (one after another) or a Box (visible after click). Default: "box";
- *box_text* - Hyperlink text to display shares box. Default: "Share";
- *list_type* - icons/text - Way the share buttons will be displayed - as Icons or as Text (E.g. Facebook, Twitter). Default: "icons";
- *list_direction* - horizontal/vertical - Direction of a share list buttons. Default: "horizontal";
- *list_colors* - true/false - If set to true button will be displayed with social brand color. Default: "true";
- *display* - lisf of socials to display or/and rearrange order (separated with comma. E.g. facebook,twitter). default: '' = display all. List of socials to display: **facebook, twitter, pinterest, reddit, tumblr, flipboard, pocket, linkedin, vk, copy-to-clipboard, email**
- *btn* - share default buttons type E.g. color:btn-light,type:btn-outlined,size:btn-sm *Available properties: color:(btn-light,btn-dark), size:(btn-xs,btn-sm,btn-md,btn-lg), type:(btn-outlined,btn-link), width:btn-block, extra:YOUR_CUSTOM_CLASS*.  Default: "";
- *class* - The class(es) applied to the wrapper element. Default: "";

:::

::: wrapper [omnis_logo]

``` php
[omnis_logo size="" display_sticky="false" skin=""  class=""]
```

---

Display logo image if set in [Global Options / Logo Settings](/docs/options.html#global-options).

###### Options

- *size* - Size (width) of a image wrapper in pixels. Default: "";
- *display_sticky* - true/false - If set true it will display Sticky logo Image (if set). Default: "false";
- *skin* - dark/light - If set it will display image for a selected skin (if set). Default: "";
- *class* - The class(es) applied to the wrapper element. Default: "";

:::

::: wrapper [omnis_price]

``` php
[omnis_price price="$19.00" billing="" class=""  before="" after=""]
```

---

Display formatted price. For the WooCommerce product page it will display the current product price.

###### Options

- *price* - Price number with optional currency. E.g. $9.99 or 9.99USD. Default: "$19.00";
- *billing* - Display billing text after price. E.g. "monthly". Default: empty;
- *class* - The class(es) applied to the wrapper element. Default: "";
- *before* - Display custom text before shortcode. Default: empty;
- *after* - Display custom text after shortcode. Default: empty;

:::

::: wrapper [omnis_comments_area]

``` php
[omnis_comments_area class=""]
```

---

Display comments area for a page/post.

###### Options

- *class* - Adds a custom class for this shortcode.

:::