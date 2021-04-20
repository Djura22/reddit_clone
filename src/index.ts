import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  orm.getMigrator().up();

  const app = express();
  app.get('/', (_, res) => {
    res.send('Hello');
  });
  app.listen(4000, () => {
    console.log('Server started on port localhost:4000')
  });
  
  // const post = orm.em.create(Post, {title: 'My first post'});
  // await orm.em.persistAndFlush(post);

  // const posts = await orm.em.find(Post, {});
  // console.log(posts);

};

main().catch(err => {
  console.error(err);
});