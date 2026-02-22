import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: '2ZiW13s8oiTZ8BZQa4qqMT4JSPasUywi',
    socket: {
        host: 'redis-16545.c264.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16545,
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

