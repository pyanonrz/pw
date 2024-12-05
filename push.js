var push = require('web-push');

let vapidKey = {
    publicKey: 'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
    privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKey.publicKey, vapidKey.privateKey);

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/d6fvbeABmwc:APA91bH4mu3ng4CNYDyB-Zl8FZ0d03W1oMJ4qu_YmtBKw4FcGSEA7ujhDcf1F8ygQ39_EFNsjBROBtcCelD9wnrt7ah0NsqeQvVVWppQzQ-ZP_lz-1TZ0OXtk_Q5NO0MiEtj3mhix0Lu","expirationTime":null,"keys":{"p256dh":"BLJ8TJKpv8f2PXkGCcYjf1VO0EMzal5JlLz-ysrSuBupn86-e3vcz5flyLs-7vXwvJ3d5tPMdwxW_634NVZmRTQ","auth":"hYl23fnvKBvbxUf2LKDq4g"}
};

push.sendNotification(sub, 'test message')