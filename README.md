# bookofryan
personal blog

-----STARTUP NOTES--------
if encountering Unbound variable "PWD" in local dev may need to:
$env:PWD = $(Get-Location).Path
set PWD="$(pwd)"

then to start development: yarn dev