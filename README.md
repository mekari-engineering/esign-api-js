# esign-api-js
The esign-api-js SDK is a JavaScript library that provides a convenient way to interact with Mekari eSign API. It simplifies the process of integrating eSign functionality into your JavaScript applications. With this SDK, you can easily create, manage, and sign documents using the eSign API.

## How to Use the SDK

To use the esign-api-js SDK, follow these steps:

### Install the SDK by running the following command:

```bash
npm install esign-api-js
```

### Import the SDK into your project:

```javascript
const esignApi = require('esign-api-js');
```

### Initialize the SDK with your API credentials:

```javascript
const client = new esignApi({
    clientId: 'YOUR_CLIENT',
    clientSecret: 'YOUR_SECRET',
    sandbox: true, #if you want to use sandbox environment, default value is false
});
```

### Make API calls using the SDK's methods. For example, to create a new document:

```javascript
const document = client.documents.createGlobalDocument({
  doc: 'base64 encoded document',
  filename: 'document.pdf',
  signers: [
    {
      email: 'foo@example.com',
      name: 'Foo Bar',
      annotations: [
        {
          page: 1,
          position_x: 100,
          position_y: 100,
          element_height: 50,
          element_width: 200,
          canvas_height: 500,
          canvas_width: 500,
        }
      ]
    }
  ]
});
```

### Refer to the SDK's documentation for more information on available methods and their usage.

For detailed examples and additional information, please refer to the [SDK documentation](https://github.com/your-username/esign-api-js).