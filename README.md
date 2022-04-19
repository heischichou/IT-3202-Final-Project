# Pantonial.Dev - Sample Project

## Project setup

### Node
1. Install node modules
```
npm install
```
2. Run development server
```
npm run serve
```
Note: `serve` uses port `8080` by default.
3. Access app on http://localhost:8080/

### Docker [deprecated]
Note: Docker is deprecated due to unresolved issue of Vue hot reload not working inside Docker container.
1. Install node modules
```
npm install
```
2. Run services in `docker-compose.yml`
3. Access app on http://localhost:8080/

## Testing
### Unit tests
```
npm run test:unit
```

### Integration tests
Note: Integration testing uses port `8081` by default.
```
npm run test:e2e
```
