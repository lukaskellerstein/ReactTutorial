# My App - 1

CRUD web app with webpack (NO react-script)

Firebase DB
https://react-test-backend-af7fe-default-rtdb.europe-west1.firebasedatabase.app/

Fluent UI

## Problems in application

1.  After login - products page is rendered in infinite loop.

    ![infinite-loop-render](/images/problem-0.png)

2.  After login - double render of Products page.

    ![double-render](/images/problem-1.png)

3.  Error modal component is rendered in Products page, even if it is not needed.

    ![error-modal-is-rendered](/images/problem-2.png)

4.  After theme color is changed, ProductList of Products page is re-render.

    ![product-list-re-render](/images/problem-4.png)

5.  After theme color is changed, Text of Products page is re-render.

    - and method calculateAvgHP is called on theme color

    ![product-page-text-re-render](/images/problem-6.png)

6.  After theme color is changed, ProductDetailForm of Products page is re-render.

    ![product-detail-form-re-render](/images/problem-5.png)

7.  After theme color is changed, sidebar is re-rendered.

    ![sidebar-re-render](/images/problem-3.png)

8.  Visited pages does not work.

    ![product-text-re-render](/images/problem-7.png)
