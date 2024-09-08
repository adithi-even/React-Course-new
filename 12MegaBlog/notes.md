WHAT ALL WE ARE USING :

    Aapwrite for backend as service 
    Tinymce rich text editor for text editor functionality
    Html-react-parser using to parse html 
    React Hook Forms to hamdle input forms
    Creating .env file to store environment variable

POINTS:
    Environment Variables:
        Environment variables are key-value pairs used to configure applications without hardcoding sensitive information directly into the codebase. They provide a way to store configuration settings, such as database credentials, API keys, or environment-specific settings (e.g., development, testing, production) outside of the application's source code.

        Key Concepts:
            Security:
                Environment variables are used to keep sensitive information like passwords, API keys, and database credentials out of the source code.
                They prevent sensitive data from being exposed in version control systems like Git.
                
            Flexibility:
                Environment variables allow you to configure your application differently for various environments (development, staging, production) without changing the code.
                For example, you can have different database configurations for development and production environments.

            Portability:
                Using environment variables makes your application more portable because you don't need to hardcode environment-specific settings. The same codebase can run in different environments with different configurations


*in the .env file*
    so here we get the endpoint URL i.e., URL of the website and add here , 
    project ID from the APPWRITE 
    database ID from the APPWRITE 
    collection ID from the APPWRITE 
    bucket ID from the APPWRITE  and we also call it as storage ID

*in the .env.sample* (which is only for the git, coz we don't share the details inside the .env file anywhere into the git or the production)

# appwrite
   *auth.js*
        
    


   *config.js*

