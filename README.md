# StreetFoodMania

Street food stall is a webapp that will help user to find nearest food stall, only registered user can able to add, edit and delete food stall. 
## Installation

clone this repo and goto project directory

```bash
nano .env
```


```bash 
#.env
PORT=5000
secretKey=your_jwt_secret
```

```bash
# Install dependencies for server
npm install

# Install dependencies for client
cd client && npm install && cd ..

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

### Todo List 
- [x] Jwt Authentication
- [x] CRUD
- [x] Private Route
- [ ] Location based list
- [ ] Images
- [ ] Review System 

# App Info
### Author
Serajush Salekin
### Version
  1.0.0

## License
[MIT](https://choosealicense.com/licenses/mit/)
