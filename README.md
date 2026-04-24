# WebDevII_Practice1
## Installation and getting started
Prerequisites
- Node.js (v16+ recommended)
- MongoDB
- Environment variables configured for JWT secrets and database URI

With the package.json file use "npm install" in the console to install all neccesary dependencies.


## Routes Execution
Execution instructions to use the routes

### POST /api/user/register
Auth required? No

{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John",
  "lastName": "Doe"
}


### POST /api/user/login
Auth required? No

{
  "email": "user@example.com",
  "password": "securePassword123"
}

### POST /api/user/refresh
Auth required? No

{
  "refreshToken": "your_stored_refresh_token_string"
}

### POST /api/user/logout
Auth required? Yes

{
  "refreshToken": "your_stored_refresh_token_string"
}

### PUT /api/user/validation
Auth required? Yes

{
  "code": 123456
}

### PUT /api/user/register
Auth required? Yes

{
  "name": "Johnny",
  "lastName": "Appleseed",
  "nif": "87654321Z"
}

### GET /api/user
Auth required? Yes

### PUT /api/user/password
Auth required? Yes

{
  "currentPassword": "securePassword123",
  "newPassword": "evenMoreSecurePassword456"
}

### DELETE /api/user
Auth required? Yes

Optional query param:
/api/user?soft=false
OR
/api/user?soft=true

### PATCH /api/user/company
Auth required? Yes

{
  "name": "Tech Corp SL",
  "cif": "B12345678",
  "address": "123 Innovation St.",
  "isFreelance": false
}

### PATCH /api/user/logo
Auth required? Yes

Field: file (choose and image file)

### POST /api/user/invite
Auth required? Yes

Requires user role to be "admin".

{
  "email": "new-employee@company.com",
  "name": "Jane",
  "lastName": "Smith"
}
