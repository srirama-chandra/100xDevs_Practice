docker-compose up -d
echo 'Waiting For Database'
./scripts/wait-for-it.sh localhost:5432
echo 'Database is Ready'
npx prisma migrate dev --name init
npm run test
docker-compose down
