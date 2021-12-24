## Folders structure
Static folder - everything that will be publicly available and omitted with Gatsby optimization

Nested pages:
1. everything under "pages" folder - will be reflected as a page in the URL

   pages:
    |-- index  (localhost:8000)
    |-- home   (localhost:8000/home)
    |-- products
        |-- apple (localhost:8000/products/apple)
        |-- samsung

2. if we want to have a folder page - we need to add "index.js" in the folder

    |-- products
        |-- index (localhost:8000/products)
        |-- apple
        |-- samsung


## Styling: css modules approach
A way to scope styles to specific components/pages - all classes in this module, after they are imported to the component
will be applied only to that component
It's an alternative to css-in-js
