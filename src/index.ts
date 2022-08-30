import {DataSource} from 'typeorm';
// import {AppDataSource} from './data-source';
import {Inquisition} from './entity/Inquisition';

const AppDataSource = new DataSource({
  type: 'sqlite',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'admin',
  database: 'test',
  entities: [Inquisition],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const user = new Inquisition();
    user.question = 'What will you do tomorrow?';
    user.followUp = 'Why do you do those things?';
    user.inquisitionImportance =
      'to have a plan ahead of time and understand the reasoning behind doing them.';
    await AppDataSource.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await AppDataSource.manager.find(Inquisition);
    console.log('Loaded users: ', users);

    console.log(
      'Here you can setup and run express / fastify / any other framework.',
    );
  })
  .catch(error => console.log(error));
