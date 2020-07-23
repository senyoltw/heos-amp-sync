# heos-amp-sync
Sync Amplifier and Network Audio Player using HEOS and NATURE REMO

# How to USE
1. Get Nature Remo token
2. Get amp on/off signal
```
% curl -H 'Authorization: Bearer <token>' -H "accept: application/json" -X GET "https://api.nature.global/1/appliances" |jq
```
3. write to .env
```
remo_token = 'set your token'
remo_signal = 'set your signal'
```
4. npm install and npm start

5. daemon process by pm2
```
npm install -g pm2
pm2 start npm --name heos-amp-sync -- start
pm2 save
```
