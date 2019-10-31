export const fakeData = {
  images: [
    {
      repository: 'johnwayne/client-side-server',
      id: '7sdkf842j7skcc',
      tag: 'latest',
      created: '12 hours ago',
      size: '1.2GB',
    },
    {
      repository: 'johnwayne/my-nginx',
      id: 'tuw6394kkd3mvd',
      tag: 'latest',
      created: '9 days ago',
      size: '725MB',
    },
    {
      repository: 'node',
      id: 'eu33h2djf0ok2mv',
      tag: '10',
      created: '24 days ago',
      size: '903MB',
    },
    {
      repository: 'ssr-sql',
      id: '6hdh366dhc2d2s',
      tag: 'latest',
      created: '5 days ago',
      size: '1.5GB',
    },
  ],
  containers: [
    {
      id: '7ycn4sk3kv8s',
      image: 'johnwayne/my-nginx',
      created: '24 days ago',
      status: 'up',
      names: 'modest_mayer',
    },
    {
      id: '2ydkcm84jdjdv',
      image: 'johnwayne/client-side-server',
      created: '9 days ago',
      status: 'up',
      names: 'compassionate_newton',
    },
    {
      id: '4bb99skvisdsiis',
      image: 'johnwayne/client-side-server',
      created: '5 seconds ago',
      status: 'paused',
      names: 'optimistic_mendel',
    },
    {
      id: 'idj73jhv7dkjlla',
      image: 'node',
      created: '31 hours ago',
      status: 'up',
      names: 'romantic_boyd',
    },
    {
      id: '2wi3radsgc23sfnb',
      image: 'johnwayne/client-side-server',
      created: '29 minutes ago',
      status: 'paused',
      names: 'nice_liskov',
    },
    {
      id: '8vjsj22aawv3or',
      image: 'johnwayne/my-node',
      created: '18 hours ago',
      status: 'exited',
      names: 'boring_wozniak',
    },
    {
      id: 'svjjsmkm2j4mss',
      image: 'ssr-sql',
      created: '15 days ago',
      status: 'dead',
      names: 'agitated_darwin',
    },
  ],
};

export const headers = {
  images: Object.keys(fakeData.images[0]),
  containers: Object.keys(fakeData.containers[0]),
};
