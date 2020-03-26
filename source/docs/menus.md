# Menus

With Omnis Theme comes some custom Menus improvements, like [Mega Menus](#mega-menu), [Shortcodes](#using-shortcodes-in-menus) in Menus and custom [Menu Items](#menu-items).

It requires [Omnis Core Plugin](/docs/plugins.html#required) Installed and activated.

###### Table of content

[[toc]]

## Mega Menu

::: steps

1. To create Mega Menu you need to select **Mega Menu** option for top-level Menu Item.
![Mega Menu Option](/omnis-docs/images/menus/mega_menu_option.jpg)
*Mega menu option*
2. Set up right Menus structure. **First level** - Mega menu columns. **Second & Next levels** - Mega Menu items.
::: content-wide
::: grid 2
![Mega Menu Structure](/omnis-docs/images/menus/mega-menu_structure.jpg)
*Mega Menu Items Structure*

![Mega Menu Structure Output](/omnis-docs/images/menus/mega-menu_structure-2.jpg)
*Mega Menu Output Structure*
:::

::: tip Mega Menu Columns
You can create Mega Menu with **1 to 6 columns**. Columns number depends on how *Menu Columns* you put in Menu Structure.

Also, for column 'wrappers' we recommend using 'Empty Items' (without URLs) like *Custom Links* or Omnis [Title Item](#menu-items).
:::

## Menu Items

Omnis Theme comes with custom Menu Items which helps you to improve user experience.  

All Custom Items you can find in **Appearance → Menus** under **Omnis Items** Panel.

![Menu Items](/omnis-docs/images/menus/menu-items.jpg)

::: wrapper Search Item
Add this item to Menu to enable [Search Box](/docs/search/) on your website.

[Read more about Search Box](#search-box)
:::

::: wrapper Overlay Content Dots Item
Add this item to Menu to enable [Overlay Content](/docs/elements.html#overlay-content). This item **display three dots** icon instead of text.

[Read more about Overlay Content](/docs/elements.html#overlay-content)
:::

::: wrapper Overlay Content Item
Add this item to Menu to enable [Overlay Content](/docs/elements.html#overlay-content).

[Read more about Overlay Content](/docs/elements.html#overlay-content)
:::

::: wrapper Title Item
Add this item to Menu to create **Title** for your Menu Items *(red color on image)*. Also, it has options to hide the label, then it became **separator/spacer** *(green color on image)*.  

[This item is recommended to use as Columns Wrapper for Mega Menu](#mega-menu).

---
![Menu Items - Title](/omnis-docs/images/menus/menu-items_title.jpg)
:::

::: wrapper Cart*
Add this item to Menu to enable WooCommerce [Cart](/docs/woocommerce/).

*It required WooCommerce Plugin Installed.
:::

## Using Shortcodes in Menus

Omnis Theme allows to place custom shortcodes within Menu Items. 

::: tip Example
You can display Image instead standard Menu Item.

In Menu Item in **Shortcodes (advanced)** text field place this shortcode:

``` php
[vc_single_image image="_IMAGE_ID_" image_link="custom-url" image_link_hover="" image_link_url="url:_URL_|||"]
```

:::

## Secondary Menu

Omnis Theme comes with unique feature like **Secondary Menu**. It is separated from Main Menu and it is great location to place Items like *Search*, *Cart* or *Overlay Content Icon*.

To create secondary menu go to **Appearance → Menus**. Create a new menu and assign it to **Header - Secondary Navigation** location.

![Assign Menu](/omnis-docs/images/menus/secondary-menu_assign.jpg)
*Secondary Menu Assign*

![Secondary Menu](/omnis-docs/images/menus/secondary-menu.jpg)
*Secondary Menu Example*

## Search Box

To enable **Search Box** go to **Appearance → Menus** and add [Search Menu Item](#menu-items) to *Menu Structure*.

![Search Menu Item](/omnis-docs/images/menus/menus_search.jpg)
*Search Menu Item to Enable Search Box*

![Search Menu item in Navigation ](/omnis-docs/images/menus/menus_item-search.jpg)
*Search Menu Item in Navigation*

![Search Box](/omnis-docs/images/menus/search-box.jpg)
*Search Box with Ajax search*

::: tip Search Ajax
You can enable or disable *Instant/Ajax Search results* in [Theme Global Options](/docs/options.html#global-options) under **Layout → Navigation** panel.
:::