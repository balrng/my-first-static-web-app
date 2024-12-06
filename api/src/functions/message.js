const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { 
            body: JSON.stringify({ message: 'Hello, from the API!' }),  
            headers: { 'Content-Type': 'application/json' }
        };
    }
});