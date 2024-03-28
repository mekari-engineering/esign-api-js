const fs = require('fs');
const { Api } = require('esign-api');

const client = new Api({
  clientId: YOUR_CLIENT_ID,
  clientSecret: YOUR_CLIENT_SECRET,
  sandbox: true
});

let authUrl = client.auth.authUrl();

// open the authUrl in the browser, fill the credentials and get the code
console.log(authUrl)

// store the code from the redirect callback here
let authCode = 'AUTH_CODE';

(async () => {
  let accessToken;

  if (!fs.existsSync('key.json')) {
    const response = await client.auth.requestAuthToken(authCode);
    accessToken = response.access_token;

    if (accessToken) {
      // store response as json to access_token file
      fs.writeFileSync('key.json', JSON.stringify(response, null, 2));
    }
  } else {
    // return the access token from the file
    file = fs.readFileSync('key.json', 'utf8');
    file = JSON.parse(file);

    accessToken = file.access_token;
  }

  const document = await client.documents.createGlobalDocument(accessToken, {
    // generate a base64 string from the pdf file
    doc: 'data:application/pdf;base64,' + fs.readFileSync('test.pdf', 'base64'),
    filename: 'How to ?',
    signers: [{
      name: 'risal',
      email: 'risal@mekari.com',
      annotations: [{
        page: 1,
        type_of: 'signature',
        position_x: 100,
        position_y: 100,
        canvas_width: 595, // A4 paper width in pixels
        canvas_height: 842, // A4 paper height in pixels
        element_width: 100,
        element_height: 100,
      }]
    }],
    signing_order: false,
    callback_url: 'https://webhookdump.link/da2db21e-83d9-4d90-a8dd-34cf3543bf62'
  });

  let allDocuments = await client.documents.getAll(accessToken);

  console.log(allDocuments);
})();
