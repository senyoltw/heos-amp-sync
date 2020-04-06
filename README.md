# heos-amp-sync
Sync Amplifier and Network Audio Player using HEOS and NATURE REMO

# How to USE
1. Get Nature Remo token
2. Get amp on/off signal
```
% curl -H 'Authorization: Bearer <token>' -H "accept: application/json" -X GET "https://api.nature.global/1/appliances" |jq
```
3. write to eos-amp-sync.js
```
/// set your token
let remo_token = 'set your token'
/// set your signal
let remo_signal = 'set your signal'
```
4. npm install and npm start