// Формування списку всіх охоронців

await collection.find().toArray();


// Пошук охоронців з ціною 300$

await collection.find({"price": 300}).toArray();

// Реєстрація охоронця

await collection.insertOne({
    "name": guard.name,
    "price": guard.price,
    "height": guard.height,
    "weight": guard.weight
});