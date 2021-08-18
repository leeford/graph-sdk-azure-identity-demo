# Graph SDK Azure Identity Demo

Demonstration code for accompanying [blog post](https://www.lee-ford.co.uk/graph-sdk-with-azure-identity/)

# Instructions

1. Clone this repo
2. Populate `.env` files with your Azure AD App registration details
    ```
    AZURE_CLIENT_ID = <Azure AD Application (client) ID>
    AZURE_TENANT_ID = <Azure AD Directory (tenant) ID>
    AZURE_CLIENT_SECRET = <Azure AD Client Secret>
    ```
    > Ensure your App registration has been granted `User.Read.All` Application permissions for this demo (or change the API call in the code)
3. Install dependencies
    ```
    npm install
    ```
4. Build and start
    ```
    npm run build && npm run start
    ```

    ![](https://user-images.githubusercontent.com/472320/129971064-86840883-3999-4414-bb7c-36c0e93058ee.png)