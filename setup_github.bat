@echo off
echo Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo Failed to initialize git. Please make sure Git is installed and in your PATH.
    pause
    exit /b %errorlevel%
)

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit"

echo Configuring remote...
git remote add origin https://github.com/Luke987-pixel/firstproject-itstep.git
git branch -M main

echo Pushing to GitHub...
echo.
echo Please sign in to GitHub if prompted...
git push -u origin main

echo.
echo Done!
pause
