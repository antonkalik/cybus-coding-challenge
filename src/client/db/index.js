const id = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export const fakeData = {
  images: [
    {
      repository: 'johnwayne/client-side-server',
      id: id(),
      tag: 'latest',
      created: '12 hours ago',
      size: '1.2GB',
    },
    {
      repository: 'johnwayne/my-nginx',
      id: id(),
      tag: 'latest',
      created: '9 days ago',
      size: '725MB',
    },
    {
      repository: 'node',
      id: id(),
      tag: '10',
      created: '24 days ago',
      size: '903MB',
    },
  ],
  containers: [
    {
      id: id(),
      image: 'johnwayne/my-nginx',
      created: '24 days ago',
      status: 'up',
      names: 'modest_mayer',
    },
    {
      id: id(),
      image: 'johnwayne/client-side-server',
      created: '9 days ago',
      status: 'up',
      names: 'compassionate_newton',
    },
    {
      id: id(),
      image: 'johnwayne/client-side-server',
      created: '5 seconds ago',
      status: 'paused',
      names: 'optimistic_mendel',
    },
    {
      id: id(),
      image: 'node',
      created: '31 hours ago',
      status: 'up',
      names: 'romantic_boyd',
    },
    {
      id: id(),
      image: 'johnwayne/client-side-server',
      created: '29 minutes ago',
      status: 'paused',
      names: 'nice_liskov',
    },
  ],
};
