var push = require('web-push');

let vapidKey = {
    publicKey: 'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
    privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKey.publicKey, vapidKey.privateKey);

let sub = {};

push.sendNotification(sub, 'test message')