# General

::: danger Welcome to Omnis WordPress Theme Docs.

You will find here the all necessary information on how to use this Theme.
If you have any questions feel free to send a message via [this contact form](https://themeforest.net/user/LeopardThemes).
:::

![Intro](/omnis-docs/images/start.png)

## Theme Requirements

To run Omnis theme without any problems, we strongly recommend you to use always the latest available WordPress version (at least 5.0).  
If you need help installing WordPress follow the instructions in the official [WordPress Codex](https://wordpress.org/support/article/how-to-install-wordpress/).

### Server requirements

To run Omnis Theme, your server needs at least PHP 5.2. However, we recommend running PHP 7 or higher.

::: wrapper Recommended settings:
**PHP 7.3** or greater  
**MySQL 5.6** or greater  
Nginx or Apache with **mod_rewrite** module  
**HTTPS** support  
:::

### PHP requirements

Also, we recommend to set PHP variable values large enough to handle Omnis Theme without any issues.

```ini
# At least 8192 for multilingual websites, or at least 2048 for non-multilingual websites
max_input_var = 2048 

# Memory limit variable value shouldn’t be less than 256M.
memory_limit = 256M

# Server upload max. file size variable value shouldn’t be less than 32M (recommended 64M).
upload_max_filesize = 64M
```

::: tip INFO
You can find many informations on the internet how to [increase those values](https://www.google.com/search?q=php+max+input+vars+increase). Also, you can ask your host administrator.
:::

For demo templates installation, the theme requires also that WordPress uploads folder is writable (“wp-content/uploads” directory has correct “chmod” values).

## What’s included with Theme

Omnis theme comes with bundled premium plugins – [WPBakery Page Builder](/docs/plugins.html#wpbakery-page-builder-64), and [Revolution Slider](/docs/plugins.html#slider-revolution-23). Both plugins are included with this theme, and you don’t need to purchase a separate license unless you want to get your copy or need any extra features offered by these plugins.

Also, there are two exclusive plugins for this theme – [Omnis Studio](#) and [Omnis Theme Demo Importer](#). Both of them allow you to easily build your website and/or reproduce and modify [Demo Pages](https://demo.loprd.pl/omnis/).

[Read more about plugins](/docs/plugins/)

### Theme Package

- **omnis.zip** - installable Omnis WordPress Theme file.
- **Omnis Docs** - online theme documentation.
- **Bundled & Theme Plugins**
- **Theme Demo** - all the theme demo files.

### Credits

- Images: [Unsplash](https://unsplash.com)
- Portrait Images: [Icons8](https://photos.icons8.com/)