# My App - 1

CRUD web app with webpack (NO react-script)

Firebase DB
https://react-test-backend-af7fe-default-rtdb.europe-west1.firebasedatabase.app/

Fluent UI

## NEW FUNCTIONALITIES

- in comparison with previous optimisation sample app we've added:
  - implement remove of products

## Problems in application

1. Duplicated logic - showing Errors

- between files login-form and product-pages

![duplicated-logic](/images/problem-8.png)

Solution: Fix 1. - custom HOC

2. More readable code - Use Reducer instead of use State

- avoid re-call API after ADD and REMOVE

  a) Replace getProducts() with setProduct() with changed state

- avoid re-render of ProductDetailForm

  b) leverage useReducer and emit Action => which will change the state in reducer

![avoid-api-recall](/images/problem-9.png)

Solution:

- Fix 2. - useReducer
- Fix 2. - remove dependency for useCallback [products/state]
