# Building Your Application

[**Headless CMS**](https://jamstack.org/headless-cms/)

[**Contentful**](https://www.contentful.com/)

## Contentful: Basic Concepts

> To query and get content using the APIs, client applications need to authenticate with both the SPACE ID and an ACCESS TOKEN. Hereafter, you will find the space ID and the read-only access token for the Contentful space that we have created for this lab. **The token will be invalidated after the lab is over**.
>
> CONTENTFUL_SPACE_ID=g853qxkqyatt
> CONTENTFUL_ACCESS_TOKEN=TwhTGmMZ966Zh5_vAd6OTpYmHHdo-DK55QpmWyCYtSM

If you choose to use Contentful, you will need to create an account and a space. You will also need to create a content model and populate it with data. We suggest you to check the basic concepts of Contentful before you start building your application.

Contentful > [**Concepts**](https://www.contentful.com/developers/docs/concepts/)

In particular, you should check:

Contentful > Concepts > [**API basics**](https://www.contentful.com/developers/docs/concepts/apis/)

Contentful > Concepts > [**Data model**](https://www.contentful.com/developers/docs/concepts/data-model/)

Contentful > Concepts > [**Filter API results**](https://www.contentful.com/developers/docs/concepts/relational-queries/)

## Contentful: GraphQL vs. REST

Contentful provides two APIs: REST and GraphQL. You can choose the one that best fits your needs. We suggest you to check the differences between them before you start building your application.

Contentful > [**GraphQL vs. REST**](https://www.contentful.com/blog/graphql-vs-rest-exploring-how-they-work/)

Contentful > REST API library > [**Content Delivery API - JavaScript SDK**](https://github.com/contentful/contentful.js)

> **IMPORTANT**: [REST API library and TypeScript](https://github.com/contentful/contentful.js/blob/master/TYPESCRIPT.md). Instead of defining the types manually, we propose to use a [GUI based solution for Contentful](https://github.com/marcolink/cf-content-types-generator-app).

Contentful > GraphQL > [**GraphQL tools for getting started with Contentful**](https://www.contentful.com/blog/graphql-tools-for-getting-started-with-contentful/)

> **IMPORTANT**: To get the feeling of how you can access and query your data using the GraphQL API, you can use GraphiQL app within Contentful dashboard. To do so, you have to install the app first. Go to the Contentful dashboard, click on the "Apps" tab, and search for "GraphiQL". Install the app and start querying your data.

Contentful > Guides > [**How to Integrate Contentful and Next.js**](https://www.contentful.com/blog/integrate-contentful-next-js-app-router/)
