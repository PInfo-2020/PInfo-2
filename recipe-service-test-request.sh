# POST requests to check if recipe-service and recipe-database are working
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test"}' \
  http://localhost:15555/recipe/post/

# This command should return a list of previously POSTed users
curl -X GET http://localhost:15555/recipe/
