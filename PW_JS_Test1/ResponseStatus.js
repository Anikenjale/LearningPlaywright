
function APIResponse(code)
{
    switch(code)
    {
        case 200:
            {
                return "PASS - OK: Request successful";
                breck;
            }
        case 201:
            {
                return "PASS - Created: Resource created successfully";
                breck;
            }
        case 301:
            {
                return "WARNING - Moved Permanently: URL has changed";
                break;
            }
        case 400:
            {
                return "FAIL - Bad Request: Check request payload";
                break;
            }
        case 401:
            {
                return "FAIL - Unauthorized: Check auth token";
                breck;
            }
        case 403:
            {
                return  "FAIL - Forbidden: Insufficient permissions";
                breck;
            }
        case 404:
            {
                return "FAIL - Not Found: Check endpoint URL";
                breck;
            }
        case 500:
            {
                return "FAIL - Internal Server Error: Backend issue"
                breck;
            }
        defualt:
        {
            return "UNKNOWN - Unhandled status code"
        }
    }
}