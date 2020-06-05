# POST requests to check if __template__-service and __db_name__-database are working
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"test"}' \
  http://localhost:__port_ext__/__template_instance__/post/

# This command should return a list of previously POSTed users
curl -X GET http://localhost:__port_ext__/__template_instance__/
