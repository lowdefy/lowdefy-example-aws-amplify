The purpose of this repository is to be an example on how to deploy Lowdefy apps (in version 4.0.0-rc.5) in AWS Amplify


1. Create a folder 'deploy' in the root of the directory of the application (e.g. at the same level of the file lowdefy.yaml)

2. Change the directoy to 'deploy'

```
cd deploy
```

3. Init an Amplify project

```
amplify init
```

3.1 Enter the name of the project: (e.g. "lowdefyamplify")
3.2 Choose the default editor: (e.g. "Visual Studio Code")
3.3 Choose the type of app you are building: javascript
3.4 Choose the javascript framework you are using: react
3.5 Source Directory Path: .
3.6 Distribution Directory Path: .next
3.7 Build Command: pnpm next build
3.8 Start Command: pnpm start

Then choose as provider: awscloudformation

4. Add Amplify Hosting

```
amplify add hosting
```
4.1 Enter the name of the environment: (e.g. "test")
4.2 Choose CI/CD

Then, once configured the backend you will be taken to the AWS Amplify Console, when you need to choose the repository for the frontend.
Choose for example GitHub, then the repostitory and then the branch.

IMPORTANT: Choose "Monorepo" app, and enter 'deploy' there, this way it will detect that it is a NextJS SSR application.

Follow the steps (do not forget to add the necessary environment variables and eventually, secret environment variables in AWS System Manager Parameter Store). 