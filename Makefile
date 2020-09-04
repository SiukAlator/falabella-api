api-up:
	docker run -d -p 4000:4000 falabella-api

api-ini:
	make api-install
	make api-up

api-reset:
	make api-down
	make api-up

api-down:
	docker rm -f falabella-api

api-install:
	docker build -t falabella-api .