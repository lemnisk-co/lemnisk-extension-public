#Adobe Launch Extension for Lemnisk JS Tags

This will help you locally develop and make quick edits

```
npx @adobe/reactor-sandbox
```

Please open

http://localhost:3000

to view your changes


Once things are stable, you can do 

```
npx @adobe/reactor-packager
```

```
npx @adobe/reactor-uploader package-lemnisk-1.0.1.zip --private-key=<private-key> --org-id=xxxx@AdobeOrg 
--tech-account-id=yyyy@techacct.adobe.com --api-key=<api-key> --client-secret=<api-val>
```

The above code will push this Lemnisk extension as a private extension into the corresponding Adobe Org