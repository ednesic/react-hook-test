.PHONY: host-install-dependencies host-run run test
host-install-dependencies: 
	npm install

host-run: host-install-dependencies
	npm start

run:
	docker build -t ny-times-app .
	docker run -it --rm -p 3000:80 ny-times-app

test:
	npm run test