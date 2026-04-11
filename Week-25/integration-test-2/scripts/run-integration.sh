docker-compose up -d
echo 'Waiting For Database'
./scripts/wait-for-it.sh --host=localhost --port=5432 --timeout=30
echo 'Database Is Ready'
npx prisma migrate dev --name init
npx prisma generate
npm run test
docker-compose down