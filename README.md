STEP TO REPRODUCE

BACKEND

1. Create .env in backend folder

DB_USERNAME=
DB_PASSWORD=
DB_NAME=rest_api_db
DB_HOST=127.0.0.1
DB_PORT=5432
PORT=3001

2. npx sequelize-cli db:create
3. npx sequelize-cli db:migrate
4. npm run dev

FRONTEND
