# My App - 1

CRUD web app with webpack (NO react-script)

Firebase DB
https://react-test-backend-af7fe-default-rtdb.europe-west1.firebasedatabase.app/

Fluent UI

## Problems in application

1.  After login - products page is rendered in infinite loop.

    ![infinite-loop-render](/images/problem-0.png)

    Solution:

    - Fix 1. - useEffect with empty dependency

2.  After login - double render of Products page.

    ![double-render](/images/problem-1.png)

    Solution:

    - Fix 2. - Filter setState calls

3.  Error modal component is rendered in Products page, even if it is not needed.

    ![error-modal-is-rendered](/images/problem-2.png)

    Solution:

    - Fix 3. - conditional rendering

4.  After theme color is changed, ProductList of Products page is re-render.

    ![product-list-re-render](/images/problem-4.png)

    Solution:

    - Fix 4. - Memoization (Fixed rerendering)
    - => Because props is state !!!!
    - => If props is [] (empty array), each rerender will trigger rerender also for product-list !!!! => need to use useMemo()

5.  After theme color is changed, Text of Products page is re-render.

    - and method calculateAvgHP is called on theme color

    ![product-page-text-re-render](/images/problem-6.png)

    Solution:

    - Fix 5. - Memoization (Fixed rerendering)
    - Fix 5. - useMemo (Fixes runing function after each rerender)

6.  After theme color is changed, ProductDetailForm of Products page is re-render.

    ![product-detail-form-re-render](/images/problem-5.png)

    Solution:

    - Fix 6. - Memoization (Fixed rerendering)
    - Fix 6. - useCallback

7.  After theme color is changed, sidebar is re-rendered.

    ![sidebar-re-render](/images/problem-3.png)

    Solution:

    - Fix 7. - Memoization (Fixed rerendering)
    - Fix 7. - useCallback

8.  Visited pages does not work.

    ![product-text-re-render](/images/problem-7.png)

    Solution:

    - Fix 8. - useRef
