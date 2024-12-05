var push = require('web-push');

let vapidKey = {
    publicKey: 'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
    privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKey.publicKey, vapidKey.privateKey);

let sub = {
    id000001:{"endpoint":"https://fcm.googleapis.com/fcm/send/cbtzVy9o2UE:APA91bFbbVuPFJQd6TrG3hSZVSCbx9JGPkhScMfuKCbRnqE9tViZQGpvvfQeiWgQRHPB3yrC9ja4kr3iAqzVGjKT_UAfPs18dhEn_iFpqAvQvA-jBmzExP2NeAfS_cl4lhPp_IQ7Q_W8","expirationTime":null,"keys":{"p256dh":"BO0eDWtd8lhXg3GLdXial_FOQrKYZsGY1UTrnWRIbIFAZlUtNitIKRUARC_ssQAEMMlflUB_MSDNhFFnY_FR5XU","auth":"yGAlNjsbFc9ZZWGlOAibEA"}},
    id000002:{"endpoint":"https://fcm.googleapis.com/fcm/send/fWg574Y_SKA:APA91bHLEQgmtnuEOUTyeUFzEtPZV6awU7Axs8VyocAqfAbGg87ogPWh2AXsD-UlhzwCPhN4irDhZzbTamV6g-lxEpDqnQ6T5Opisrs4KXfNMGVEgruo65eFtuuJ4pHfcUQVepMxflY5","expirationTime":null,"keys":{"p256dh":"BJQ4c5M99_PXq-fWZntQH3zRAAwKp0D9TMxofa9ht0bE4Vjcv1sJcINF1KAM8-rLaVuk1C07HwYiyrOeS5Ma2AY","auth":"zYqmkk37SGs7bJaVPRYhaQ"}}
};

push.sendNotification(sub.id000001, 'test message')
push.sendNotification(sub.id000002, 'test message')