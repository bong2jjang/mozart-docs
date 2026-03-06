@echo off
echo Starting Mozart Docs Development Environment...

REM Check if .env exists in backend
if not exist "backend\.env" (
    echo Error: backend\.env file not found!
    echo Please create backend\.env file with required environment variables.
    exit /b 1
)

REM Start all services
docker-compose up -d

echo.
echo Services started successfully!
echo.
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.
echo To view logs: docker-compose logs -f
echo To stop: docker-compose down
