# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Products" [ref=e6] [cursor=pointer]:
        - /url: /
      - link "Add Product" [ref=e7] [cursor=pointer]:
        - /url: /add-product
      - link "Practice" [ref=e8] [cursor=pointer]:
        - /url: /practice
      - link "Learn" [ref=e9] [cursor=pointer]:
        - /url: https://www.youtube.com/@commitquality
      - link "Login" [ref=e10] [cursor=pointer]:
        - /url: /login
  - generic [ref=e12]:
    - heading "Login" [level=1] [ref=e13]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: "Username:"
        - textbox "Enter Username" [ref=e17]
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Enter Password" [ref=e20]
      - generic [ref=e21]: Invalid username or password
      - button "Login" [active] [ref=e22] [cursor=pointer]
```