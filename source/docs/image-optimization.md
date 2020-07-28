# Image Optimization

###### Table of content

[[toc]]

## How it works

::: warning Requirements
Image Optimization requires to install and activate  [Image Processing Queue](/docs/plugins.html#recommended) plugin.
:::

With Omnis theme you can easily resize your images on the fly to sizes you need - it helps you save hundreds of kilobytes. You just need to pick your desired width, height or ratio and theme will do rest in background without affecting your website performance and loading time.

If possible (image dimensions large enough) theme will also generate Retina Image (x2).

## Retina Images

Retina Images will be generated with Image Resizer (if possible) or can be uploaded manually. There is two simple steps.

::: steps

1. Prepare two images - regular size and twice larger. E.g. *image-800x600.jpg* and *image-1600x1200@2x.jpg*. **It is important to name retina image properly - with '@2x' suffix**. 
2. Upload both images to WordPress Media Library and use regular size image to display - theme generate scrset for this image with retina image.

:::