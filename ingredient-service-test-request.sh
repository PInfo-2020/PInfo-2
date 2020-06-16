# POST requests to check if recipe-service and recipe-database are working
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{
     "productName":"Test crue",
     "productType":"Legumes frais",
     "calories":"144",
     "units":"par 100 g de portion comestible"
     }' \
  http://localhost:11080/ingredients/

# This command should return a list of previously POSTed users
#curl -X GET http://localhost:11080/ingredients
