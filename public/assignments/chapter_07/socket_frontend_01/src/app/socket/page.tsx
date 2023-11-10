'use client';

import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import type { FormEvent } from 'react';

const URL = 'http://localhost:3000';

const socket = io(URL);

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<any[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: any) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);
    socket.on('create-something', (value) => console.log({ value }));

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
      socket.off('create-something');
    };
  }, []);

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <div className='max-w-md mx-auto m-4 border p-4'>
      <p>State: {isConnected ? 'true' : 'false'}</p>
      <div>
        <p>Data</p>
        <ul className='border p-4'>
          {fooEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
      <div className='flex gap-2'>
        <button className='btn btn-success' onClick={connect}>
          Connect
        </button>
        <button className='btn btn-warning' onClick={disconnect}>
          Disconnect
        </button>
      </div>
      <MyForm />
    </div>
  );
}

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('create-something', value, () => {
      setIsLoading(false);
      console.log({ value });
    });
  }

  return (
    <form className='my-4 grid gap-4' onSubmit={onSubmit}>
      <input
        className='border p-4'
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='btn btn-info' type='submit' disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
