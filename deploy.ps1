param(
    [switch]$SkipPush,
    [switch]$SkipVercel
)

$ROOT = $PSScriptRoot
Set-Location $ROOT

Write-Host "========================================" -ForegroundColor Yellow
Write-Host "  VARUN PORTFOLIO - DEPLOYMENT SCRIPT" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host ""

# Step 1: Verify build
Write-Host ">>> Running build verification..." -ForegroundColor Cyan
$build = npm run build 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "BUILD FAILED" -ForegroundColor Red
    exit 1
}
Write-Host "Build OK" -ForegroundColor Green
Write-Host ""

# Step 2: Git push
if (-not $SkipPush) {
    Write-Host ">>> Pushing to GitHub..." -ForegroundColor Cyan
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        git remote add origin https://github.com/varunbp06/varun-portfolio.git
        Write-Host "Added remote origin" -ForegroundColor Gray
    }
    git branch -M main
    git push -u origin main 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "GitHub push OK" -ForegroundColor Green
    } else {
        Write-Host "GitHub push FAILED - check your credentials" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
}

# Step 3: Vercel deploy
if (-not $SkipVercel) {
    Write-Host ">>> Deploying to Vercel..." -ForegroundColor Cyan
    if (Get-Command vercel -ErrorAction SilentlyContinue) {
        vercel --prod --yes --env VITE_WEB3FORMS_KEY=6b6c02b5-52cc-47a3-b5d6-484ecfaa86d1 2>&1
    } else {
        Write-Host "vercel CLI not installed. Installing via npx..." -ForegroundColor Yellow
        npx vercel --prod --yes --env VITE_WEB3FORMS_KEY=6b6c02b5-52cc-47a3-b5d6-484ecfaa86d1 2>&1
    }
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Vercel deploy OK" -ForegroundColor Green
    } else {
        Write-Host "Vercel deploy FAILED" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Yellow
Write-Host "  DEPLOYMENT COMPLETE" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "GitHub: https://github.com/varunbp06/varun-portfolio" -ForegroundColor Green
Write-Host "Vercel: (check vercel output above)" -ForegroundColor Green
