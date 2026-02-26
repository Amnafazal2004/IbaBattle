import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'DUQ5FawDxaydwmEBooDLCUnRWYw5CTNm',
    socket: {
        host: 'redis-12639.crce263.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 12639,
    }
});

client.on('error', err => console.log('Redis Client Error', err));


export async function connectRedis() {
    if (!client.isOpen) {
        await client.connect();
    }
    return client;
}


export default client

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

