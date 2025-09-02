db.createUser({
  user: 'hypesoft',
  pwd: 'hypesoft123',
  roles: [
    {
      role: 'readWrite',
      db: 'hypesoft'
    }
  ]
});

db.createCollection('products');
db.createCollection('categories');