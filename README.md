# Pantonial.Dev - Sample Project

## Project setup
### Docker
1. Download Docker image
```
docker pull teddzyb/pantonialdev
```
2. Run services on `docker-compose.yml`
3. Access on http://localhost:8080/

### Node
1. Install node modules
```
npm install
```
2. Run development server
```
npm serve -- --port 8080
```
3. Access on http://localhost:8080/

## Testing
### Unit tests
```
npm run test:unit
```

### Integration tests
Note: Integration testing uses port `8081`.
```
npm run test:e2e
```
