const heos = require('heos-api')
const request = require('request')

/// set your token
let remo_token = 'set your token'
/// set your signal
let remo_signal = 'set your signal'

let cur_state = 'stop'
const options = {
    url: `https://api.nature.global/1/signals/${remo_signal}/send`,
    headers: { 'authorization': `Bearer ${remo_token}` },
    method: 'POST'
}

function amp_power(state) {
    if (state == cur_state) {
        // console.log('amp.state.same do nothing')
    } else {
        console.log(`amp.state.change ${cur_state} => ${state} send IR`)
        request(options, (error, response, body) => {
            if (error) {
                console.log(`failed to update: ${error}, ${body}`)
            } else {
                cur_state = state
            }
        }
        )
    }
}

heos.discoverAndConnect().then(connection =>
    connection
        //.onAll(console.log)
        .write('system', 'register_for_change_events', { enable: 'on' })
        .write('system', 'prettify_json_response', { enable: 'on' })

        .on(
            {
                commandGroup: 'event',
                command: 'player_state_changed'
            },
            data => {
                if (data.heos.message.parsed.state == 'stop') {
                    // console.log('amp.off')
                    amp_power('off')
                } else {
                    // console.log('amp.on')
                    amp_power('on')
                }
            }
        )
)
