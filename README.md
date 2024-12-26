STEP TO REPRODUCE

each backend & frontend needs to install node_modules

- cd backend -> npm i
- cd frontend -> npm i

after install node_modules. please setup .env (both backend and frontend) and configure with your user postgres, etc. i already put .env.template for easy setup. instruction down below:

BACKEND (npm run dev)

1. cd backend
2. Copy .env.template to .env using terminal

cp .env.template .env

3. npx sequelize-cli db:create
4. npx sequelize-cli db:migrate
5. npm run dev

FRONTEND (npm start)

1. cd frontend
2. Copy .env.template to .env using terminal

cp .env.template .env

3. npm start

INFORMATION

untuk melihat data json secara lengkap di backend dapat melihat pada localhost:{sesuai port di .env} dengan /api/users, /api/groups, /api/task.
dan dapat melihat secara manual dengan endpoint yang sesuai pada groupRoutes, userRoutes, taskRoutes. dengan menggunakan id bertipe uuid. atau melalui frontend UI sebagai alternatif.
