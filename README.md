# How to create .zip for deployment!

```
npm install --also=dev
```

#### Fill in the secrets to deploy to AWS below
```
serverless config credentials --provider aws --key CLIENTID --secret SECRET
```


#### (IMPORTANT) Fill in src/config/production with ARN's to target a topic and dynamoDB table 
####  Provide the webhookSigningKey for authenticating Mailgun Events


### Then
```
serverless deploy
```


# Design Pattern

https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
